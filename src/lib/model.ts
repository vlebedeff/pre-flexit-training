import {IClonable} from "../interfaces/clonable";

export type UpdatablePropeties = BaseModel | any[];

export abstract class BaseModel implements IClonable<BaseModel> {
  abstract clone(): BaseModel;

  updateAll(predicate: (property: UpdatablePropeties) => UpdatablePropeties): this {
    let updatedModel = <this>predicate(this);

    if (updatedModel !== this) {
      return updatedModel;
    }

    let cloned: this = null;

    for (let propertyName of Object.keys(this)) {
      let propertyValue = (<any>this)[propertyName];
      let newValue: any = undefined;

      if (propertyValue instanceof BaseModel) {
        let result = (<BaseModel>propertyValue).updateAll(predicate);
        if (result !== propertyValue) {
          newValue = result;
        }
      }
      else if (propertyValue instanceof Array) {
        let changedArray = predicate(propertyValue);
        if (changedArray !== propertyValue) {
          newValue = changedArray;
        } else {
          let clonedArray: any[] = [];
          for(let item of <[]>propertyValue) {
            if (item instanceof BaseModel) {
              let result = (<BaseModel>item).updateAll(predicate);
              if (result !== item && newValue === undefined) {
                newValue = clonedArray;
              }
              clonedArray.push(result);
              
            } else {
              clonedArray.push(item);
            }
          }
        }
      }

      if (newValue !== undefined) {
        if (cloned == null) {
          cloned = <this>this.clone();
        }
        (<any>cloned)[propertyName] = newValue;
      }
    }

    return cloned || this;
  }

  update<T extends UpdatablePropeties>(model: T, func: (model: T) => T): this {
    return this.updateAll((inspectedModel) => {
      if (inspectedModel !== model) {
        return inspectedModel;
      }

      return func(model);
    });
  }
}
