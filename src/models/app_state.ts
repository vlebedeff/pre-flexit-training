import {ISerializable} from "../lib/interfaces/serializable";
import {Model} from "../lib/model";
import {Canvas} from "../models/canvas";
import {CanvasCollection, ISerializedSpreadCollection} from "../models/canvas/canvas_collection";
import {CanvasElementCollection} from "../models/canvas/canvas_element_collection";

export interface ISerialzedAppState {
  spreads: ISerializedSpreadCollection;
}

export class AppState extends Model implements ISerializable<ISerialzedAppState> {
  spreads: CanvasCollection;

  constructor(init: boolean = false) {
    super();
    if (init) {
      this.spreads = new CanvasCollection(true);
    }
  }

  clone() {
    let clone = <this>new AppState;
    clone.spreads = this.spreads;
    return clone;
  }

  serialize() {
    return {
      spreads: this.spreads.serialize()
    }
  }

  deserialize(serializedValue: ISerialzedAppState) {
    this.spreads = new CanvasCollection();
    this.spreads.deserialize(serializedValue.spreads);  
  }
}
