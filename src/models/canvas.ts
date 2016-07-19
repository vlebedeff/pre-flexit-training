import {ISerializable} from "../lib/interfaces/serializable";
import {Model, List} from  "../lib/model";
import {SpreadStickerElement} from "./canvas/spread_element_sticker";
import {SpreadTextElement, TextAlign} from "./canvas/spread_element_text";
import {CanvasElementCollection, ISerializedSpreadElementCollection} from "./canvas/canvas_element_collection";

const newElementWidth = 100;
const newElementHeight = 100;
const newTextElementWidth = 20;
const newTextElementHeight = 24;
const newParagraphElementWidth = 200;
const newParagraphElementHeight = 200;

export interface ISerializedSpread {
  elements: ISerializedSpreadElementCollection;
}

export class Canvas extends Model implements ISerializable<ISerializedSpread>  {
  elements: CanvasElementCollection;

  constructor(init: boolean = true) {
    super();
    if (init) {
      this.elements = new CanvasElementCollection(true);
    }
  }

  createStickerElement(shape: string, x: number, y: number): SpreadStickerElement {
    let newStickerElement = new SpreadStickerElement();

    newStickerElement.shape = shape;
    newStickerElement.x = x - newElementWidth / 2;
    newStickerElement.y = y - newElementHeight / 2; 
    newStickerElement.width = newElementWidth;
    newStickerElement.height = newElementHeight;

    return newStickerElement;
  }

  createTextElement(x: number, y: number, autosize: boolean) {
    let newTextElement = new SpreadTextElement();
    
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
  
  clone(): this {
    let clone = <this>new Canvas();
    clone.elements = this.elements;
    return clone;
  }

  serialize() {
    return {
      elements: this.elements.serialize()
    };
  }

  deserialize(serializedValue: ISerializedSpread) {
    this.elements = new CanvasElementCollection();
    this.elements.deserialize(serializedValue.elements);
  }
}
