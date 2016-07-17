import {IClonable} from "./interfaces/clonable";

export abstract class Model implements IClonable {
  abstract clone(): this;
  
  update(predicate: (model: this) => void): this {
    let clonedModel = this.clone();
    predicate(clonedModel);
    return clonedModel;
  }
}

export class List<T> extends Model {
  private _array: T[];

  constructor(init: boolean = false) {
    super();
    if (init) {
      this._array = [];
    }
  }

  get count() {
    return this._array.length;
  }

  get maxIndex() {
    return this._array.length - 1;
  }

  find(predicate: (item: T) => boolean): T {
    for (let item of this._array) {
      if (predicate(item)) {
        return item;
      }
    }
  }
 
  reset(...items: T[]) {
    this._array = items;
  }

  push(item: T) {
    this._array.push(item);
  }

  insert(index: number, item: T) {
    this._array.splice(index, 0, item);
  }

  remove(item: T): number {
    let index = this._array.indexOf(item);
    this._array.splice(index, 1);
    return index;
  }

  removeAll(predicate: (item: T) => boolean) {
    this._array = this.reject(predicate);
  }

  replace(item: T, other: T) {
    let index = this.remove(item);
    this.insert(index, other);
  }

  map<U>(mappingFn: (item: T, index: number) => U): U[] {
    return this._array.map(mappingFn);
  }

  reject(predicate: (item: T) => boolean): T[] {
    return this._array.filter((item) => !predicate(item));
  }

  cloneExtended<U extends this>(type: {new(): U}): U {
    let clonedList = <U>new type();
    clonedList._array = [...this._array];
    return clonedList;
  }

  clone(): this {
    let clonedList = <this>new List<T>();
    clonedList._array = [...this._array];
    return clonedList;
  }
}
