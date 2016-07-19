import * as React from "react";
import * as DomUtils from "../../../utils/dom";
import * as ObjectUtils from "../../../utils/object";

import {Point} from "../../../utils/geometry/point";
import {Rect, outerRect} from "../../../utils/geometry/rect";
import {Canvas} from "../../../models/canvas";
import {BaseSpreadType} from "../../../models/canvas/spread_element";
import {SpreadStickerElement, SpreadStickerElementType} from "../../../models/canvas/spread_element_sticker";
import {SpreadTextElement, SpreadTextElementType} from "../../../models/canvas/spread_element_text";

import {DragSession, DragSessionEvent} from "../../../utils/mouse/drag_drop";

import {AppChildComponent} from "../../../app"; 

import {BaseSpreadElementComponent} from "./element/element"
import {SpreadTextElementComponent, ContentEvent, TextChangeEvent} from "./element/text/text"
import {SpreadStickerElementComponent} from "./element/sticker/sticker"

type SvgAttributes = React.SVGAttributes & React.Attributes;

interface ISpreadComponentOptionalProps {
  contentEditable?: boolean;
}

interface ISpreadComponentProps extends ISpreadComponentOptionalProps {
  canvas: Canvas;
  width: number;
  height: number;
  
}

const getElementKey = (element: BaseSpreadType, modifier: string = null) => {
  let key = `element:${element.id}`;
  if(modifier) {
    key += `:${modifier}`;
  }
  return key;
} 

export class SpreadComponent extends AppChildComponent<ISpreadComponentProps> {
  static get defaultProps(): ISpreadComponentOptionalProps {
    return {
      contentEditable: false
    }
  }

  private _currentDragSession: DragSession;
  private _editingText: boolean = false;

  refs: {
    [key: string]: any;
    canvasNode: SVGElement;
    contentNode: SVGGElement;
    selectionNode: SVGGElement;
    selectionElementsNode: SVGGElement;
    selectionOuterNode: SVGRectElement;
  }

  private getOffset(): Point {
    let rect = this.refs.canvasNode.getBoundingClientRect();
    return new Point(rect.left, rect.top);
  }

  private getScale(): number {
    let rect = this.refs.canvasNode.getBoundingClientRect();
    return rect.width * 1.0 / this.props.width;
  }

  private clientRectToSVGRect(clientRect: ClientRect): SVGRect {
    let scale = this.getScale();
    let offset = this.getOffset();
    let {left, top, width, height} = clientRect;
    
    let x = (left - offset.x) / scale;
    let y = (top - offset.y) / scale;
    width /= scale;
    height /= scale;

    return {x, y, width, height};
  }

  private get selectedElements() {
    //TODO: cache
    return this.props.canvas.elements.getSelected();
  }

  // Events

  private onDragOver(e: DragEvent) {
    e.preventDefault();
  }

  private onDrop(e: DragEvent) {
    e.preventDefault();
    let scale = this.getScale();
    let offset = this.getOffset();
    let addX = (e.clientX - offset.x) / scale;
    let addY = (e.clientY - offset.y) / scale;
    let shape = e.dataTransfer.getData("shape");

    switch (shape) {
      case "text":
      case "paragraph":
        this.app.spreadDispatcher.addTextElement(addX, addY, shape != "paragraph");

        setTimeout(() => {
          let {canvas} = this.props;
          let elementKey = getElementKey(canvas.elements.get(canvas.elements.maxIndex));
          let lastElement = this.refs[elementKey] as SpreadTextElementComponent; 

          lastElement.focus();
        }, 100);
        break;

      default:
        this.app.spreadDispatcher.add(shape, addX, addY);
        break;
    }
  }

  private onMouseSelectionStart(e: DragSessionEvent) {
    //
  }

  private onMouseSelectionChange(e: DragSessionEvent) {
    //
  }

  private onMouseSelectionStop(e: DragSessionEvent) {
    //
  }

  private onCanvasMouseDown(e: MouseEvent) {
    if (e.button != 0) return;    
    if (e.target != this.refs.canvasNode) return;

    let selected: SVGRectElement[];
    let selectionElementNodes: SVGRectElement[];
    let selectionMouseNode: SVGRectElement;

    let offset = this.getOffset();
    let scale = this.getScale();

    let startX = (e.clientX - offset.x) / scale;
    let startY = (e.clientY - offset.y) / scale;

    let {contentNode, selectionNode, selectionElementsNode, selectionOuterNode} = this.refs;

    new DragSession(
      e,
      (e: DragSessionEvent) => {
        this._currentDragSession = e.session;

        selectionElementNodes = DomUtils.childElements<SVGRectElement>(selectionElementsNode);

        selectionMouseNode = DomUtils.createSVGElement<SVGRectElement>("rect");
        selectionMouseNode.classList.add("c-app-canvas--selection--mouse");
        selectionNode.appendChild(selectionMouseNode);

        selectionElementNodes.forEach(el => DomUtils.hide(el));
        DomUtils.hide(selectionOuterNode);

        selected = [];
      },
      (e: DragSessionEvent) => {


        let x = startX;
        let y = startY;
        let width = e.translation.x / scale;
        let height = e.translation.y / scale;

        if (e.translation.x < 0) { 
          x += e.translation.x / scale;
          width = -width;
        }

        if (e.translation.y < 0) { 
          y += e.translation.y / scale;
          height = -height;
        }

        DomUtils.setSVGRectBounds(selectionMouseNode, x, y, width, height);

        selected = selectionElementNodes.filter(rect => {
          let [rectX, rectY, rectWidth, rectHeight] = DomUtils.getSVGRectBounds(rect);
          let selected = rectX + rectWidth > x && rectY + rectHeight > y && rectX < x + width && rectY < y + height;

          DomUtils.toggleVisibility(rect, selected);

          return selected;
        });

        if (selected.length > 1) {
          let outer = outerRect(...selected.map(rect => Rect.fromArray(DomUtils.getSVGRectBounds(rect))));
          DomUtils.setSVGRectBounds(selectionOuterNode, outer.x, outer.y, outer.width, outer.height);
          DomUtils.show(selectionOuterNode);
        } else {
          DomUtils.hide(selectionOuterNode);
        }
      },
      (e: DragSessionEvent) => {
        this._currentDragSession = null;
        selectionNode.removeChild(selectionMouseNode);
        this.app.spreadDispatcher.select(true, ...selected.map(rect => parseInt(rect.getAttribute("data-id"))));
      }
    )
  }

  private onCanvasMouseUp(e: DragEvent) {
    if (this._currentDragSession != null) {
      return;
    }

    if (e.target == this.refs.canvasNode) {
      this.app.spreadDispatcher.clearSelection();
    }
  }

  private onElementDragStart(e: DragSessionEvent, element: BaseSpreadType) {
    this._currentDragSession = e.session;

    const {canvasNode} = this.refs;
    canvasNode.classList.add("dragging");
    if (!this.app.state.spreads.current.elements.isSelected(element.id)) {
      this.app.spreadDispatcher.select(!e.originalEvent.shiftKey, element.id);
    }
  }

  private onElementDragOver(e: DragSessionEvent) {
    let scale = this.getScale();
    let translateX = e.translation.x / scale;
    let translateY = e.translation.y / scale;
    let translationStyle = `translate(${translateX}px, ${translateY}px)`;

    for (let selectedElement of this.selectedElements) {
      let selectedElementComponent = this.refs[getElementKey(selectedElement)] as BaseSpreadElementComponent;
      let selectedElementOutline = this.refs[getElementKey(selectedElement, "outline")] as SVGRectElement;

      selectedElementComponent.refs.rootElement.style.transform = translationStyle;
      selectedElementOutline.style.transform = translationStyle;
    }

    let selectedElementOutlineOuter = this.refs.selectionOuterNode as SVGRectElement;
    selectedElementOutlineOuter.style.transform = translationStyle;
  }

  private onElementDrop(e: DragSessionEvent) {
    const {canvasNode} = this.refs;
    canvasNode.classList.remove("dragging");

    let scale = this.getScale();

    if (e.translation.x != 0 || e.translation.y != 0) {
      this.app.spreadDispatcher.translate(e.translation.x / scale, e.translation.y / scale);
    }

    for (let selectedElement of this.selectedElements) {
      let selectedElementComponent = this.refs[getElementKey(selectedElement)] as BaseSpreadElementComponent;
      let selectedElementOutline = this.refs[getElementKey(selectedElement, "outline")] as SVGRectElement;
      selectedElementComponent.refs.rootElement.style.transform = "";
      selectedElementOutline.style.transform = "";

      if (selectedElement instanceof SpreadTextElement) {
        DomUtils.redraw(selectedElementComponent.refs.rootElement);
      }
    }

    let selectedElementOutlineOuter = this.refs.selectionOuterNode as SVGRectElement;
    selectedElementOutlineOuter.style.transform = "";

    this._currentDragSession = null;
  }

  private onElementMouseDown(e: React.MouseEvent, element: BaseSpreadType) {
    // TODO: rethink this boxing/unboxing

    let unboxedEvent = (e as any);

    unboxedEvent.persist();

    if (e.button != 0) return;
    new DragSession(
      unboxedEvent as MouseEvent,
      (e) => this.onElementDragStart(e, element),
      (e) => this.onElementDragOver(e),
      (e) => this.onElementDrop(e)
    );
  }

  private onElementMouseUp(e: React.MouseEvent, spreadElement: BaseSpreadType) {
    if (this._currentDragSession != null) return;
    this.app.spreadDispatcher.select(!e.shiftKey, spreadElement.id);
  }

  private onElementBBoxChange(clientRect: ClientRect, element: BaseSpreadType) {
    let component = this.refs[getElementKey(element)] as BaseSpreadElementComponent;
    let componentOutline = this.refs[getElementKey(element, "outline")] as SVGRectElement;
    let {x, y, width, height} = this.clientRectToSVGRect(clientRect);

    DomUtils.setSVGRectBounds(component.refs.rootElement, x, y, width, height);
    if (componentOutline) {
      DomUtils.setSVGRectBounds(componentOutline, x, y, width, height);
    }
  }

  private onTextElementChange(e: TextChangeEvent, element: SpreadTextElement) {
    let scale = this.getScale();
    let offset = this.getOffset();
    let {x, y, width, height} = this.clientRectToSVGRect(e.bbox);
    this.app.spreadDispatcher.editTextElement(element.id, e.text, x, y, width, height);
  }

  private onTextElementBlur(e: ContentEvent, element: SpreadTextElement) {
    if (!e.text.replace(/<.*?>/g, "")) {
      this.app.spreadDispatcher.deleteSelection();
      return false;
    }
  }

  // Render

  private renderDefs(): JSX.Element {
    return (
      <defs>
        <mask id="left-page">
          <rect  x="0" y="0" width="50%" height="100%" fill="#fff" />
        </mask>
        <mask id="right-page">
          <rect x="50%" y="0" width="50%" height="100%" fill="#fff" />
        </mask>
        <linearGradient id="overlay--shadow--gradient--left" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" className="c-app-canvas--overlay--shadow--gradient--stop" />
          <stop offset="100%" className="c-app-canvas--overlay--shadow--gradient--start" />
        </linearGradient>
        <linearGradient id="overlay--shadow--gradient--right" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" className="c-app-canvas--overlay--shadow--gradient--start" />
          <stop offset="100%" className="c-app-canvas--overlay--shadow--gradient--stop" />
        </linearGradient>
      </defs>
    );
  }
  
  private renderBackground(): JSX.Element {
    return (
      <g className="c-app-canvas--background">
        <rect className="c-app-canvas--background--rect" x="0" y="0" width="100%" height="100%" />
      </g>
    );
  }

  private renderElement(element: BaseSpreadType): JSX.Element {
    let {contentEditable} = this.props;

    let elementId = getElementKey(element);
    let attributes = {
      key: elementId,
      ref: elementId
    };

    if (contentEditable) {
      ObjectUtils.assign<{}>(attributes, {
        onMouseDown: this.onElementMouseDown.bind(this),
        onMouseUp: this.onElementMouseUp.bind(this),
        onBBoxChange: this.onElementBBoxChange.bind(this),
      });
    }

    switch (element.getType()) {
      case SpreadStickerElementType:
        return <SpreadStickerElementComponent element={element as SpreadStickerElement} {...attributes} />
        
      case SpreadTextElementType:
        if (contentEditable) {
          ObjectUtils.assign<{}>(attributes, {
            onChange: this.onTextElementChange.bind(this),
            onBlur: this.onTextElementBlur.bind(this),
          });
        }
        return <SpreadTextElementComponent element={element as SpreadTextElement} {...attributes}/>
    }
  }

  private renderContent(): JSX.Element {
    let {canvas} = this.props;
    
    return (
      <g ref="contentNode" className="c-app-canvas--content">
        {canvas.elements.map(spreadElement => this.renderElement(spreadElement))}
      </g>
    );
  }

  private renderSelection(): JSX.Element {
    return (
      <g ref="selectionNode" className="c-app-canvas--selection">
        <g ref="selectionElementsNode" className="c-app-canvas--selection--elements">
          {this.renderSelectedElementsOutline()}
        </g>
        {this.renderSelectedElementsOuterRect()}
      </g>
    );
  }

  private renderSelectedElementsOutline(): JSX.Element[] {
    let selectedElements = this.selectedElements;

    return this.props.canvas.elements.map(spreadElement => {
      let styles: React.CSSProperties = {};

      if (selectedElements.indexOf(spreadElement) == -1) {
        styles.display = "none";
      }

      let id = getElementKey(spreadElement, "outline")

      return (
        <rect key={id} ref={id} style={styles}
              className="c-app-canvas--selection--elements--rect translatable"
              x={spreadElement.x} y={spreadElement.y} data-id={spreadElement.id}
              width={spreadElement.width} height={spreadElement.height} />
      );
    });
  }

  private renderSelectedElementsOuterRect(): JSX.Element {
    let x = 0;
    let y = 0;
    let width = 0;
    let height = 0;
    let styles: React.CSSProperties = {};

    if (this.selectedElements.length > 1) {
      [x, y, width, height] = outerRect(...this.selectedElements.map(e => new Rect(e.x, e.y, e.width, e.height))).toArray();  
    } else {
      styles.display = "none";
    }

    return (
      <rect ref="selectionOuterNode"
            key="selectionOuterNode" className="c-app-canvas--selection--outer translatable" style={styles}
            x={x} y={y} width={width} height={height} />
    );
  }

  private renderOverlay() {
    let {width, height} = this.props;
    let middle = width / 2;


    return (
      <g className="c-app-canvas--overlay">
        <rect className="c-app-canvas--overlay--shadow--left" x="50%" y="0" width="50" height="100%" fill="url(#overlay--shadow--gradient--left)" />
        <rect className="c-app-canvas--overlay--shadow--right" x="50%" y="0" width="50" height="100%" fill="url(#overlay--shadow--gradient--right)" />
      </g>
    );
  }

  private renderGuidelines(): JSX.Element {
    return (
      <g className="c-app-canvas--guidelines">
        <line x1="50%" y1="0" x2="50%" y2="100%" />
      </g>
    );
  }

  private renderEditableCanvas(): JSX.Element {
    let {width, height} = this.props;

    return (
      <svg ref="canvasNode" className="c-app-canvas" 
          onDragOver={this.onDragOver.bind(this)}
          onDrop={this.onDrop.bind(this)}
          onMouseDown={this.onCanvasMouseDown.bind(this)}
          onMouseUp={this.onCanvasMouseUp.bind(this)}
          viewBox={`0 0 ${width} ${height}`}>
        {this.renderDefs()}
        {this.renderBackground()}
        {this.renderContent()}
        {this.renderOverlay()}
        {this.renderGuidelines()}
        {this.renderSelection()}
      </svg>
    );
  }

  private renderCanvas(): JSX.Element {
    let {width, height} = this.props;

    return (
      <svg ref="canvasNode" className="c-app-canvas" viewBox={`0 0 ${width} ${height}`}>
        {this.renderDefs()}
        {this.renderBackground()}
        {this.renderContent()}
        {this.renderOverlay()}
        {this.renderGuidelines()}
      </svg>
    );
  }

  render() {
    let {contentEditable} = this.props;

    if (contentEditable) {
      return this.renderEditableCanvas();
    } else {
      return this.renderCanvas();
    }
  }
}
