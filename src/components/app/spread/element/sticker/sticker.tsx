import * as React from "react";

import * as ObjectUtils from "../../../../../utils/object";

import {SpreadStickerElement} from "../../../../../models/canvas/spread_element_sticker";

import {SpreadElementComponent, IBaseProps} from "../element"

export interface IProps extends IBaseProps<SpreadStickerElement> {
  
} 

export class SpreadStickerElementComponent extends SpreadElementComponent<IProps> {
  refs: {
    [key: string]: (Element);
    rootElement: SVGUseElement;
  }

  // Getters

  getAttributes(): React.SVGAttributes {
    let {element} = this.props;

    let attributes = ObjectUtils.assign(super.getAttributes(), {
      xlinkHref: `shapes/${element.shape}.svg#${element.shape}` 
    });

    attributes.className += " c-app-spread-element__sticker";

    return attributes;
  }

  // Render

  render() {
    return <use {...this.getAttributes()} />
  }
}
