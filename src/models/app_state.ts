import {Model} from "../lib/model";
import {Canvas} from "../models/canvas";
import {CanvasElementCollection} from "../models/canvas/canvas_element_collection";

export class AppState extends Model {
  canvas: Canvas;

  constructor(init: boolean = false) {
    super();
    if (init) {
      this.canvas = new Canvas;
      this.canvas.elements = new CanvasElementCollection(true);
    }
  }

  clone() {
    let clone = <this>new AppState;
    clone.canvas = this.canvas;
    return clone;
  }
}
