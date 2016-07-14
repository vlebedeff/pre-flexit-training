import {BaseModel} from "../utils/model/base_model";
import {Point} from "../utils/geometry/point";

export class Canvas extends BaseModel {
  constructor(public elements: CanvasElement[] = []) {
    super();
  }

  clone(): Canvas {
    return new Canvas(this.elements);
  }
}

export class CanvasElement extends BaseModel {
  id: number;
  shape: string;
  position: Point;
  width: number;
  height: number;

  constructor(shape: string, position: Point, width: number = 100, height: number = 100) {
    super();
    this.id = new Date().getTime();
    this.shape = shape;
    this.position = position;
    this.width = width;
    this.height = height;
  }

  changePosition(newPosition: Point): CanvasElement {
    this.position = newPosition;
    return this;
  }

  clone(): CanvasElement {
    var newCanvasElement = new CanvasElement(this.shape, this.position.clone(), this.width, this.height);
    newCanvasElement.id = this.id;
    return newCanvasElement;
  }
}
