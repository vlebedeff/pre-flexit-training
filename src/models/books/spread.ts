import {SpreadElement} from "./spread_element";

export class Spread {
  private _elements: Array<SpreadElement>;
  private _background: SVGGElement;

  constructor() {
    this._elements = new Array<SpreadElement>();
  }

  // TODO: make return array immutable or return Enumerable object
  get elements(): Array<SpreadElement> {
    return this._elements;
  }
}

export class CoverSpread extends Spread {

}