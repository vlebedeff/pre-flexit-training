import {Point} from "../utils/geometry/point";

export class CanvasElement {
  shape: string;
  position: Point;
  width: number;
  height: number;

  constructor(shape: string, position: Point, width: number, height: number) {
    this.shape = shape;
    this.position = position;
    this.width = width;
    this.height = height;
  }
}
