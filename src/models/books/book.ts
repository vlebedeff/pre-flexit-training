import {Spread, CoverSpread} from "./spread";

export class Book {
  private _coverSpread: CoverSpread;
  private _spreads: Array<Spread>;
  private _spreadPaperType: number;
  private _endSheetsType: number;
  private _minPages: number;

  private _width: number; //TODO: replace with Length class
  private _height: number;

  constructor() {
    this._coverSpread = new CoverSpread();
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }

  get spineWidth() {
    return Math.min(this._minPages, this._spreads.length) * this._spreadPaperType + (this._endSheetsType * 2)
  }

  get coverSpread() {
    return this._coverSpread;
  }
}