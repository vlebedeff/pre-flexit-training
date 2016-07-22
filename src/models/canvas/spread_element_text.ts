import {ISerializable} from "../../lib/interfaces/serializable";
import {SpreadElement, ISerializedSpreadElement} from  "./spread_element";

export enum TextAlign {Left, Right, Center, Justify}
export const textAlignStyles = ["left", "right", "center", "justify"]
export const textAlignStyle = (textAlign: TextAlign): string => textAlignStyles[textAlign];

export interface ISerializedSpreadTextElement extends ISerializedSpreadElement {
  text: string;
  align: TextAlign;
  autosize: boolean;
}

export const SpreadTextElementType = "text";

export class SpreadTextElement extends SpreadElement<ISerializedSpreadTextElement> {
  text: string;
  align: TextAlign;
  autosize: boolean;

  getType() {
    return SpreadTextElementType;
  }

  clone(): this {
    let clone = <this>super.cloneSuper(SpreadTextElement);
    clone.text = this.text;
    clone.align = this.align;
    clone.autosize = this.autosize;
    return clone;
  }

  serialize() {
    let serializedValue = super.serialize();
    serializedValue.text = this.text;
    serializedValue.align = this.align;
    serializedValue.autosize = this.autosize;
    return serializedValue;
  }

  deserialize(serializedValue: ISerializedSpreadTextElement) {
    super.deserialize(serializedValue);
    this.text = serializedValue.text;
    this.align = serializedValue.align;
    this.autosize = serializedValue.autosize;
  }
}
