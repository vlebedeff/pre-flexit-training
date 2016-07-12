import {CanvasElement} from "./canvas_element";

export class Canvas {
  elements: CanvasElement[]

  constructor() {
    this.elements = [] as CanvasElement[];
  }
}