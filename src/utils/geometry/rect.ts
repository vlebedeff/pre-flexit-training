import {IPoint} from "./point";

export interface IRect {
  position: IPoint;
  width: number;
  height: number;
}

export class Rect implements IRect {
  constructor(public position: IPoint, public width: number, public height: number) {

  }
}
