import {ISerializable} from "../lib/interfaces/serializable";
import {Model, List} from  "../lib/model";
import {CanvasElement} from "./canvas/canvas_element";
import {CanvasElementCollection, ISerializedSpreadElementCollection} from "./canvas/canvas_element_collection";

const newElementWidth = 100;
const newElementHeight = 100;

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

  createElement(shape: string, x: number, y: number): CanvasElement {
    let newElement = new CanvasElement();

    newElement.shape = shape;
    newElement.x = x - newElementWidth / 2;
    newElement.y = y - newElementHeight / 2; 
    newElement.width = newElementWidth;
    newElement.height = newElementHeight;

    return newElement;
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
