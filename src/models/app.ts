import {BaseModel, UpdatablePropeties} from "../lib/model";
import {Canvas} from "../models/canvas";

export class AppState extends BaseModel {
  constructor(public canvas: Canvas = new Canvas()) {
    super();
  }

  clone() {
    return new AppState(this.canvas);
  }

  updateAll(predicate: (property: UpdatablePropeties) => UpdatablePropeties): this {
    return super.updateAll(predicate) as this;
  }

  update<T extends UpdatablePropeties>(model: T, func: (model: T) => T): this { 
    return super.update<T>(model, func) as this;
  }
}
