import {ISerializable} from "../lib/interfaces/serializable";
import {Model, List} from  "../lib/model";
import {CanvasElementCollection, ISerializedSpreadElementCollection} from "./canvas/canvas_element_collection";

export interface ISerializedSpread {
  elements: ISerializedSpreadElementCollection;
}

export class Canvas extends Model implements ISerializable<ISerializedSpread>  {
  elements: CanvasElementCollection;

  constructor(init: boolean = true) {
    super();
    if (init) {
      this.elements = new CanvasElementCollection(true);
    }
  }
  
  clone(): this {
    let clone = <this>new Canvas();
    clone.elements = this.elements;
    return clone;
  }

  serialize() {
    return {
      elements: this.elements.serialize()
    };
  }

  deserialize(serializedValue: ISerializedSpread) {
    this.elements = new CanvasElementCollection();
    this.elements.deserialize(serializedValue.elements);
  }
}
