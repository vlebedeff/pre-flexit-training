import {Model, List} from  "../lib/model";
import {CanvasElement} from "./canvas/canvas_element";
import {CanvasElementCollection} from "./canvas/canvas_element_collection";

const newElementWidth = 100;
const newElementHeight = 100;

export class Canvas extends Model {
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
}
