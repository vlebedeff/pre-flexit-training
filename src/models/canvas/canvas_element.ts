import {ISerializable} from "../../lib/interfaces/serializable";
import {Model} from  "../../lib/model";

export interface ISerializedSpreadElement {
  id: number;
  shape: string;
  x: number;
  y: number;
  width: number;
  height: number;
  angle: number;
}


export class CanvasElement extends Model implements ISerializable<ISerializedSpreadElement> {
  shape: string;
  x: number;
  y: number;
  width: number;
  height: number;
  angle: number;

  constructor(public id: number = new Date().getTime()) {
    super();
  }

  translate(x: number, y: number) {
    this.x += x;
    this.y += y;
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

  serialize() {
    return {
      id: this.id,
      shape: this.shape,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      angle: this.angle
    };
  }

  deserialize(serializedValue: ISerializedSpreadElement) {
    this.id = serializedValue.id;
    this.shape = serializedValue.shape;
    this.x = serializedValue.x;
    this.y = serializedValue.y;
    this.width = serializedValue.width;
    this.height = serializedValue.height;
    this.angle = serializedValue.angle;
  }
}
