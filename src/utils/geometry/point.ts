export interface IPoint {
  x: number;
  y: number;
}

//TODO: move it in separate file
interface IClonable<T> {
  clone(): T;
}

export class Point implements IPoint, IClonable<Point> {
  constructor(public x: number, public y: number) {

  }

  clone() {
    return new Point(this.x, this.y);
  }
}
