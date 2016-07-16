import {IClonable} from "../../interfaces/clonable"; 

export interface IPoint {
  x: number;
  y: number;
}

export class Point implements IPoint, IClonable<Point> {
  constructor(public x: number, public y: number) {

  }

  add(other: Point): Point {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  subtract(other: Point): Point {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  clone() {
    return new Point(this.x, this.y);
  }
}
