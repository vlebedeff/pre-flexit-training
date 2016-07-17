import {Model} from  "../../lib/model";

export class CanvasElement extends Model {
  shape: string;
  x: number;
  y: number;
  width: number;
  height: number;
  angle: number;

  constructor(public id: number = new Date().getTime()) {
    super();
  }

  clone(): this {
    let clone =  <this>new CanvasElement(this.id);
    clone.id = this.id;
    clone.shape = this.shape;
    clone.x = this.x;
    clone.y = this.y;
    clone.width = this.width;
    clone.height = this.height;
    clone.angle = this.angle;
    return clone;
  }

  translate(x: number, y: number) {
    this.x += x;
    this.y += y;
  }
}
