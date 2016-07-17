import {List} from  "../../lib/model";
import {CanvasElement} from "./canvas_element";

export class CanvasElementCollection extends List<CanvasElement> {
  private _selected: number[];

  constructor(init: boolean = false) {
    super(init);
    if (init) {
      this._selected = [];
    }
  }

  isSelected(elementId: number) {
    return this._selected.indexOf(elementId) != -1;
  }

  getById(id: number): CanvasElement {
    return this.find(canvasElement => canvasElement.id == id);
  }

  getSelected(): CanvasElement[] {
    return this._selected.map(elementId => this.getById(elementId));
  }

  select(canvasElement: CanvasElement, exclusive: boolean = true) {
    let elementId = canvasElement.id;
    let index = this._selected.indexOf(elementId);
    let selected = index != -1;
    if (exclusive) {
      this._selected = [elementId];
    } else {
      if (selected) {
        this._selected.splice(index, 1);
      } else {
        this._selected.push(elementId);
      }
    }
  }

  clearSelection() {
    this._selected = [];
  }

  deleteSelection() {
    this.removeAll((item) => this.isSelected(item.id));
    this._selected = [];
  }

  bringToTop(canvasElement: CanvasElement) {
    this.remove(canvasElement);
    this.push(canvasElement);
  }

  brintToBottom(canvasElement: CanvasElement) {
    this.remove(canvasElement);
    this.insert(0, canvasElement);
  }

  sendForward(canvasElement: CanvasElement) {
    let index = this.remove(canvasElement);
    this.insert(Math.min(index + 1, this.count), canvasElement);
  }

  sendBackward(canvasElement: CanvasElement) {
    let index = this.remove(canvasElement);
    this.insert(Math.max(index - 1, 0), canvasElement);
  }

  clone(): this {
    let clone = <this>super.cloneExtended(CanvasElementCollection);
    clone._selected = [...this._selected]; 
    return clone;
  }
}
