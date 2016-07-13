import {IClonable} from "../interfaces/clonable";
import {Point} from "../utils/geometry/point";

export class Canvas implements IClonable<Canvas> {
  constructor(public elements: CanvasElement[] = []) {

  }

  addElement(shape: string, position: Point, width: number = 100, height: number = 100) {
    let newElement = new CanvasElement(shape, position, width, height);
    this.elements.push(newElement);
  }

  findElement(id: number): CanvasElement {
    return this.elements.find((e) => e.id == id);
  }

  findElementIndex(id: number): number {
    return this.elements.findIndex((e) => e.id == id);
  }

  getElement(id: number): CanvasElement {
    let element = this.findElement(id);
    if (element == null) {
      throw new Error(`Canvas doesn't containt element with id "${id}"`);
    }
    return element;
  }

  moveElement(elementId: number, newPosition: Point) {
    let element = this.getElement(elementId);
    element.position = newPosition;
  }

  sendForward(elementId: number) {
    let index = this.findElementIndex(elementId);
    let desiredIndex = index + 1;
    if (index > -1 || desiredIndex < this.elements.length) {
      let element = this.elements.splice(index, 1)[0];
      this.elements.splice(desiredIndex, 0, element);
    }
  }

  sendBackward(elementId: number) {
    let index = this.findElementIndex(elementId);
    let desiredIndex = index - 1;
    if (index > -1 && desiredIndex > -1) {
      let element = this.elements.splice(index, 1)[0];
      this.elements.splice(desiredIndex, 0, element);
    }
  }

  clone(): Canvas {
    return new Canvas(this.elements.map((e) => e.clone()));
  }
}

export class CanvasElement implements IClonable<CanvasElement> {
  id: number;
  shape: string;
  position: Point;
  width: number;
  height: number;

  constructor(shape: string, position: Point, width: number, height: number) {
    this.id = new Date().getTime();
    this.shape = shape;
    this.position = position;
    this.width = width;
    this.height = height;
  }

  clone(): CanvasElement {
    var newCanvasElement = new CanvasElement(this.shape, this.position.clone(), this.width, this.height);
    newCanvasElement.id = this.id;
    return newCanvasElement;
  }
}
