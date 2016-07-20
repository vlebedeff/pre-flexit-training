import {ISerializable} from "../../lib/interfaces/serializable";
import {List} from  "../../lib/model";
import {SpreadStickerElement, ISerializedSpreadStickerElement, SpreadStickerElementType} from "./spread_element_sticker";
import {SpreadTextElement, ISerializedSpreadTextElement, SpreadTextElementType} from "./spread_element_text";
import {BaseSpreadType, ISerializedSpreadElement} from "./spread_element";

export interface ISerializedSpreadElementCollection {
  items: ISerializedSpreadElement[];
  selectedItems: number[];
}

export class CanvasElementCollection extends List<BaseSpreadType> implements ISerializable<ISerializedSpreadElementCollection> {
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

  getById(id: number): BaseSpreadType {
    return this.find(canvasElement => canvasElement.id == id);
  }

  getSelected(): BaseSpreadType[] {
    return this._selected.map(elementId => this.getById(elementId));
  }

  select(exclusive: boolean, ...elements: BaseSpreadType[]) {
    this.selectIds(exclusive, ...elements.map(element => element.id));
  }

  selectIds(exclusive: boolean, ...elementIds: number[]) {
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

  bringToTop(canvasElement: BaseSpreadType) {
    this.remove(canvasElement);
    this.push(canvasElement);
  }

  bringToBack(canvasElement: BaseSpreadType) {
    this.remove(canvasElement);
    this.insert(0, canvasElement);
  }

  sendForward(canvasElement: BaseSpreadType) {
    let index = this.remove(canvasElement);
    this.insert(Math.min(index + 1, this.count), canvasElement);
  }

  sendBackward(canvasElement: BaseSpreadType) {
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
      let spreadElement: BaseSpreadType;
      switch (item.type) {
        case SpreadStickerElementType:
          spreadElement = new SpreadStickerElement(item.id);
          break;
        case SpreadTextElementType:
          spreadElement = new SpreadTextElement(item.id);
          break;
        default:
          throw new Error("Invalid type value of element");
      }
      spreadElement.deserialize(item);
      return spreadElement;
    }));
    this._selected = serializedValue.selectedItems;
  }
}
