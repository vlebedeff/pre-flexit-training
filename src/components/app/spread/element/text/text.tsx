import * as React from "react";

import * as ObjectUtils from "../../../../../utils/object";

import {SpreadTextElement, TextAlign, textAlignStyle} from "../../../../../models/canvas/spread_element_text";

import {SpreadElementComponent, IBaseProps} from "../element" 

export interface ContentEvent {
  text: string;
}

export interface TextChangeEvent extends ContentEvent {
  bbox: ClientRect
}

export type TextChangeHandler = (e: TextChangeEvent, element: SpreadTextElement) => void;
export type TextBlurHandler = (e: ContentEvent, element: SpreadTextElement) => boolean;

export interface IProps extends IBaseProps<SpreadTextElement> {
  onChange?: TextChangeHandler;
  onBlur?: TextBlurHandler;
}

export class SpreadTextElementComponent extends SpreadElementComponent<IProps> {
  private _editing: boolean;
  private _initialBBox: ClientRect;

  refs: {
    [key: string]: (Element);
    rootElement: SVGForeignObjectElement;
    contentElement: HTMLDivElement;
  }

  // Getters

  getAttributes(): React.SVGAttributes {
    let {element} = this.props;

    let attributes = ObjectUtils.assign<React.SVGAttributes>(super.getAttributes(), {
      onDoubleClick: this.onDoubleClick.bind(this)
    });

    attributes.className += " c-app-spread-element__text";

    if (!element.autosize) {
      attributes.className += " c-app-spread-element__text__paragraph";
    }

    return attributes;
  }

  getContentAttributes(): React.HTMLAttributes {
    let {element} = this.props;

    return {
      ref: "contentElement",
      style: {
        textAlign: textAlignStyle(element.align)
      },
      className: "c-app-spread-element__text--content",
      dangerouslySetInnerHTML: {__html: element.text},
      onInput: this.onContentInput.bind(this),
      onBlur: this.onContentBlur.bind(this),
    }
  }

  // Events

  onMouseDown(e: React.MouseEvent) {
    if (this._editing) return;

    super.onMouseDown(e);
  }

  onDoubleClick(e: React.MouseEvent) {
    this.focus();
  }

  onContentBlur(e: Event) {
    this.blur();
  }

  onContentInput(e: Event) {
    let {element} = this.props;

    if (element.autosize) {
      this.resizeRootElement();
    }
  }

  // Render

  render() {
    return (
      <foreignObject {...this.getAttributes()}>
        <div {...this.getContentAttributes()} />
      </foreignObject>
    );
  }

  // Actions

  resizeRootElement() {
    let {element} = this.props;
    let {rootElement, contentElement} = this.refs;

    let initialBBox = this._initialBBox;
    let currentBBox = contentElement.getBoundingClientRect();

    let diffX = currentBBox.width - initialBBox.width;
    let newX = currentBBox.left;

    switch (element.align) {
      case TextAlign.Center:
        newX = initialBBox.left - diffX / 2.0;
        break;
      case TextAlign.Right:
        newX= initialBBox.left - diffX;
        break;
    }

    this.triggerBBoxChange({
      left: newX,
      top: currentBBox.top,
      width: currentBBox.width,
      height: currentBBox.height,
    } as ClientRect);
  }

  blur() {
    let {element, onChange, onBlur} = this.props;
    let {rootElement, contentElement} = this.refs;
    contentElement.contentEditable = String(false);
    contentElement.spellcheck = false;
    this.app.hotkeys.enable();
    this._editing = false;

    if (onBlur) {
      if (onBlur.call(this, {text: contentElement.innerHTML}, element) === false) {
        return;
      }
    }

    if (element.text != contentElement.innerHTML && onChange) {
      let event = {
        text: contentElement.innerHTML,
        bbox: (element.autosize ? contentElement : rootElement).getBoundingClientRect()
      } as TextChangeEvent;

      onChange.call(this, event, element);
    }
  }

  focus() {
    let {contentElement} = this.refs;
    contentElement.contentEditable = String(true);
    contentElement.spellcheck = true;
    this.app.hotkeys.disable();
    contentElement.focus();
    this._initialBBox = contentElement.getBoundingClientRect();
    this._editing = true; 
  }
}
