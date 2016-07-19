import {List} from  "../../lib/model";
import {Canvas} from "../canvas";

export class CanvasCollection extends List<Canvas> {
  private _current: number;

  constructor(init: boolean = false) {
    super(init);
    if (init) {
      this.push(new Canvas(true));
      this.push(new Canvas(true));
      this.push(new Canvas(true));
      this._current = 0;
    }
  }

  get current(): Canvas {
    return this.get(this._current);
  }

  get currentIndex(): number {
    return this._current;
  }

  select(spreadIndex: number) {
    this._current = spreadIndex;
  }

  clone(): this {
    let clone = <this>super.cloneExtended(CanvasCollection);
    clone._current = this._current; 
    return clone;
  }
}
