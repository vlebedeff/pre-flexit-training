import * as React from "react";
import * as DomUtils from "../../../../utils/dom";

import {BaseSpreadType} from "../../../../models/canvas/spread_element";

import {AppChildComponent} from "../../../../app"; 

export type BaseProps = IBaseProps<BaseSpreadType>
export type BBoxChange = (e: ClientRect) => void;
export type BaseSpreadElementComponent = SpreadElementComponent<BaseProps>;

export interface IBaseProps<T extends BaseSpreadType> {
  element: T;
  onMouseDown?: React.MouseEventHandler;
  onMouseUp?: React.MouseEventHandler;
  onBBoxChange?: BBoxChange
}

export class SpreadElementComponent<T extends BaseProps> extends AppChildComponent<T> {
  refs: {
    [key: string]: any;
    rootElement: DomUtils.SVGBaseRectElement;
  }

  getAttributes(): React.SVGAttributes {
    let {element} = this.props;

    return {
      ref: "rootElement",
      className: "c-app-spread-element",
      x: element.x,
      y: element.y,
      width: element.width,
      height: element.height,
      onMouseDown: this.onMouseDown.bind(this),
      onMouseUp: this.onMouseUp.bind(this),
    }
  }

  onMouseDown(e: React.MouseEvent) {
    let {element, onMouseDown} = this.props;
    if(onMouseDown) {
      onMouseDown.call(this, e, element);
    }
  }

  onMouseUp(e: React.MouseEvent) {
    let {element, onMouseUp} = this.props;
    if(onMouseUp) {
      onMouseUp.call(this, e, element);
    }
  }

  onBBoxChange(clientRect: ClientRect) {
    let {element, onBBoxChange} = this.props;
    if(onBBoxChange) {
      onBBoxChange.call(this, clientRect, element);
    }
  }

  triggerBBoxChange(clientRect: ClientRect) {
    this.onBBoxChange(clientRect);
  }

}
