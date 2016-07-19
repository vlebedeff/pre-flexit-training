import {Model} from "../lib/model";
import {Canvas} from "../models/canvas";
import {CanvasCollection} from "../models/canvas/canvas_collection";
import {CanvasElementCollection} from "../models/canvas/canvas_element_collection";

export class AppState extends Model {
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
}
