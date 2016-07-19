export interface IRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class Rect implements IRect {
  static fromArray([x, y, width, height]: number[]): Rect {
    return new Rect(x, y, width, height);
  }

  constructor(public x: number, public y: number, public width: number, public height: number) {

  }

  toArray(): number[] {
    return [this.x, this.y, this.width, this.height];
  }
}

export function outerRect(...rects: Rect[]): Rect {
  if (rects.length == 0) return null;

  let x = Math.min.apply(null, rects.map(e => e.x));
  let y = Math.min.apply(null, rects.map(e => e.y));
  let x2 = Math.max.apply(null, rects.map(e => e.x + e.width));
  let y2 = Math.max.apply(null, rects.map(e => e.y + e.height));

  return new Rect(x, y, x2 - x, y2 - y);
}
