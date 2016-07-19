export interface IPoint {
  x: number;
  y: number;
}

export class Point implements IPoint {
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

  clone(): this {
    return <this>new Point(this.x, this.y);
  }
}
