import {ISerializable} from "../../lib/interfaces/serializable";
import {List} from  "../../lib/model";
import {CanvasElement, ISerializedSpreadElement} from "./canvas_element";

export interface ISerializedSpreadElementCollection {
  items: ISerializedSpreadElement[];
  selectedItems: number[];
}

export class CanvasElementCollection extends List<CanvasElement> implements ISerializable<ISerializedSpreadElementCollection> {
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

  select(exclusive: boolean, ...elementIds: number[]) {
    if (exclusive) {
      this._selected = elementIds.slice(0);
    } else {
      for (let elementId of elementIds) {
        let index = this._selected.indexOf(elementId);
        let selected = index != -1;
        if (selected) {
          this._selected.splice(index, 1);
        } else {
          this._selected.push(elementId);
        }
      }
    }
  }

  selectAll() {
    this._selected = this.map(element => element.id);
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

  bringToBack(canvasElement: CanvasElement) {
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

  serialize() {
    return {
      items: this.map(element => element.serialize()),
      selectedItems: this._selected
    };
  }

  deserialize(serializedValue: ISerializedSpreadElementCollection) {
    this.reset(...serializedValue.items.map(item => {
      var spreadElement = new CanvasElement();
      spreadElement.deserialize(item);
      return spreadElement;
    }));
    this._selected = serializedValue.selectedItems;
  }
}
