import {ISerializable} from "../../lib/interfaces/serializable";
import {SpreadElement, ISerializedSpreadElement} from  "./spread_element";

export interface ISerializedSpreadStickerElement extends ISerializedSpreadElement {
  shape: string;
}

export const SpreadStickerElementType = "sticker";

export class SpreadStickerElement extends SpreadElement<ISerializedSpreadStickerElement> {
  shape: string;

  getType() {
    return SpreadStickerElementType;
  }

  clone(): this {
    let clone = <this>super.cloneSuper(SpreadStickerElement);
    clone.shape = this.shape;
    return clone;
  }

  serialize() {
    let serializedValue = super.serialize();
    serializedValue.shape = this.shape;
    return serializedValue;
  }

  deserialize(serializedValue: ISerializedSpreadStickerElement) {
    super.deserialize(serializedValue);
    this.shape = serializedValue.shape;
  }
}
