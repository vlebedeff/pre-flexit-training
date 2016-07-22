import {ISerializable} from "../../lib/interfaces/serializable";
import {List} from  "../../lib/model";
import {Canvas, ISerializedSpread} from "../canvas";

export interface ISerializedSpreadCollection {
  items: ISerializedSpread[];
  currentIndex: number;
}

export class CanvasCollection extends List<Canvas> implements ISerializable<ISerializedSpreadCollection>  {
  private _currentIndex: number;

  constructor(init: boolean = false) {
    super(init);
    if (init) {
      this.push(new Canvas(true));
      this.push(new Canvas(true));
      this.push(new Canvas(true));
      this._currentIndex = 0;
    }
  }

  get current(): Canvas {
    return this.get(this._currentIndex);
  }

  get currentIndex(): number {
    return this._currentIndex;
  }

  select(spreadIndex: number) {
    this._currentIndex = spreadIndex;
  }

  clone(): this {
    let clone = <this>super.cloneExtended(CanvasCollection);
    clone._currentIndex = this._currentIndex; 
    return clone;
  }

  serialize() {
    return {
      items: this.map(spread => spread.serialize()),
      currentIndex: this._currentIndex
    };
  }

  deserialize(serializedValue: ISerializedSpreadCollection) {
    this.reset(...serializedValue.items.map(item => {
      let spread = new Canvas();
      spread.deserialize(item);
      return spread;
    }));
    this._currentIndex = serializedValue.currentIndex;
  }
}
