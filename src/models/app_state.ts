import {ISerializable} from "../lib/interfaces/serializable";
import {Model} from "../lib/model";
import {Canvas} from "../models/canvas";
import {CanvasCollection, ISerializedSpreadCollection} from "../models/canvas/canvas_collection";
import {CanvasElementCollection, ISerializedSpreadElementCollection} from "../models/canvas/canvas_element_collection";
import {SpreadStickerElement} from "./canvas/spread_element_sticker";
import {SpreadTextElement, TextAlign} from "./canvas/spread_element_text";

export interface ISerialzedAppState {
  spreads: ISerializedSpreadCollection;
  nextId: number;
  clipboard: ISerializedSpreadElementCollection;
}

const newElementWidth = 100;
const newElementHeight = 100;
const newTextElementWidth = 20;
const newTextElementHeight = 24;
const newParagraphElementWidth = 450;
const newParagraphElementHeight = 170;

export class AppState extends Model implements ISerializable<ISerialzedAppState> {
  private _nextId: number;
  spreads: CanvasCollection;
  clipboard: CanvasElementCollection;

  constructor(init: boolean = false) {
    super();
    if (init) {
      this._nextId = 1;
      this.spreads = new CanvasCollection(true);
      this.clipboard = new CanvasElementCollection(true);
    }
  }

  getNextId(): number {
    return this._nextId++;
  }

  createStickerElement(shape: string, x: number, y: number): SpreadStickerElement {
    let newStickerElement = new SpreadStickerElement(this.getNextId());

    newStickerElement.shape = shape;
    newStickerElement.x = x - newElementWidth / 2;
    newStickerElement.y = y - newElementHeight / 2; 
    newStickerElement.width = newElementWidth;
    newStickerElement.height = newElementHeight;

    return newStickerElement;
  }

  createTextElement(x: number, y: number, autosize: boolean) {
    let newTextElement = new SpreadTextElement(this.getNextId());
    
    newTextElement.autosize = autosize;

    if (autosize) {
      newTextElement.align = TextAlign.Center;
      newTextElement.x = x - newTextElementWidth / 2;
      newTextElement.y = y - newTextElementHeight / 2; 
      newTextElement.width = newTextElementWidth;
      newTextElement.height = newTextElementHeight;
    } else {
      newTextElement.align = TextAlign.Left;
      newTextElement.x = x - newParagraphElementWidth / 2;
      newTextElement.y = y - newParagraphElementHeight / 2; 
      newTextElement.width = newParagraphElementWidth;
      newTextElement.height = newParagraphElementHeight;
    }

    return newTextElement;
  }

  clone() {
    let clone = <this>new AppState;
    clone.spreads = this.spreads;
    clone._nextId = this._nextId;
    clone.clipboard = this.clipboard;
    return clone;
  }

  serialize() {
    return {
      spreads: this.spreads.serialize(),
      nextId: this._nextId,
      clipboard: this.clipboard.serialize()
    }
  }

  deserialize(serializedValue: ISerialzedAppState) {
    this.spreads = new CanvasCollection();
    this.spreads.deserialize(serializedValue.spreads);
    this._nextId = serializedValue.nextId;  
    this.clipboard = new CanvasElementCollection();
    this.clipboard.deserialize(serializedValue.clipboard);
  }
}
