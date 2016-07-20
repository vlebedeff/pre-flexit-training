import {ISerializable} from "../../lib/interfaces/serializable";
import {Model} from  "../../lib/model";

export type BaseSpreadType = SpreadElement<ISerializedSpreadElement>;

export interface ISerializedSpreadElement {
  type: string;
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  angle: number;
}

export abstract class SpreadElement<T extends ISerializedSpreadElement> extends Model implements ISerializable<T> {
  x: number;
  y: number;
  width: number;
  height: number;
  angle: number;

  constructor(public id: number) {
    super();
  }

  abstract getType(): string;

  translate(x: number, y: number) {
    this.x += x;
    this.y += y;
  }

  setBBox(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  cloneSuper<U extends this>(type: {new(id: number): U}): U {
    let clone =  <U>new type(this.id);
    clone.id = this.id;
    clone.x = this.x;
    clone.y = this.y;
    clone.width = this.width;
    clone.height = this.height;
    clone.angle = this.angle;
    return clone;
  }

  serialize() {
    return <T>{
      type: this.getType(),
      id: this.id,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      angle: this.angle
    };
  }

  deserialize(serializedValue: T) {
    this.id = serializedValue.id;
    this.x = serializedValue.x;
    this.y = serializedValue.y;
    this.width = serializedValue.width;
    this.height = serializedValue.height;
    this.angle = serializedValue.angle;
  }
}
