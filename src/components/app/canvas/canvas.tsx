import * as React from "react";
import * as DomUtils from "../../../utils/dom";

import {Point} from "../../../utils/geometry/point";
import {Rect, outerRect} from "../../../utils/geometry/rect";
import {Canvas} from "../../../models/canvas";
import {CanvasElement} from "../../../models/canvas/canvas_element";

import {DragSession, DragSessionEvent} from "../../../utils/mouse/drag_drop";

import {AppChildComponent} from "../../../app"; 

interface ICanvasComponentProps {
  canvas: Canvas;
  width: number;
  height: number;
}

export class CanvasComponent extends AppChildComponent<ICanvasComponentProps> {
  private _currentDragSession: DragSession;

  refs: {
    [key: string]: (Element);
    canvasNode: SVGElement;
    contentNode: SVGGElement;
    selectionNode: SVGGElement;
    selectionElementsNode: SVGGElement;
    selectionOuterNode: SVGRectElement;
  }

  private get selectedElements() {
    //TODO: cache
    return this.props.canvas.elements.getSelected();
  }

  private getOffset(): Point {
    let rect = this.refs.canvasNode.getClientRects()[0];
    return new Point(rect.left, rect.top);
  }

  private getScale(): number {
    let rect = this.refs.canvasNode.getClientRects()[0];
    return rect.width * 1.0 / this.props.width;
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

    this.app.canvasDispatcher.add(e.dataTransfer.getData("shape"), addX, addY);
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
        this.app.canvasDispatcher.select(true, ...selected.map(rect => parseInt(rect.getAttribute("data-id"))));
      }
    )
  }

  private onCanvasMouseUp(e: DragEvent) {
    if (this._currentDragSession != null) {
      return;
    }

    if (e.target == this.refs.canvasNode) {
      this.app.canvasDispatcher.clearSelection();
    }
  }

  private onElementMouseDown(e: MouseEvent, canvasElement: CanvasElement) {
    if (e.button != 0) return;

    const {canvasNode} = this.refs;

    let scale = this.getScale();
    let translatedElements: HTMLElement[] = [];
    let shiftKey = e.shiftKey;

    new DragSession(
      e,
      (e: DragSessionEvent) => {
        this._currentDragSession = e.session;

        canvasNode.classList.add("dragging");

        if (!this.app.state.spreads.current.elements.isSelected(canvasElement.id)) {
          this.app.canvasDispatcher.select(!shiftKey, canvasElement.id);
        }

      },
      (e: DragSessionEvent) => {
        translatedElements = DomUtils.querySelectorAll<HTMLElement>(".translatable");

        translatedElements.forEach((el: HTMLElement) => {
          let translateX = e.translation.x / scale;
          let translateY = e.translation.y / scale;

          el.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
      },
      (e: DragSessionEvent) => {
        this._currentDragSession = null;

        canvasNode.classList.remove("dragging");
        
        if (e.translation.x != 0 || e.translation.y != 0) {
          this.app.canvasDispatcher.translate(e.translation.x / scale, e.translation.y / scale);
        }
        
        translatedElements.forEach((el: HTMLElement) => {
          el.style.transform = "";
        });
        translatedElements = null;
      }
    );
  }

  private onElementMouseUp(e: MouseEvent, canvasElement: CanvasElement) {
    if (this._currentDragSession != null) {
      return;
    }

    this.app.canvasDispatcher.select(!e.shiftKey, canvasElement.id);
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

  private renderContent(): JSX.Element {
    return (
      <g ref="contentNode" className="c-app-canvas--content">
        {
          this.props.canvas.elements.map(canvasElement =>
            <use key={canvasElement.id}
                 className={`c-app-canvas--content--element ${this.selectedElements.indexOf(canvasElement) > -1 ? "translatable" : ""}`}
                 xlinkHref={`shapes/${canvasElement.shape}.svg#${canvasElement.shape}`}
                 x={canvasElement.x} y={canvasElement.y}
                 width={canvasElement.width} height={canvasElement.height}
                 onMouseDown={(e: MouseEvent) => this.onElementMouseDown(e, canvasElement)}
                 onMouseUp={(e: MouseEvent) => this.onElementMouseUp(e, canvasElement)} />)
        }
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

    return this.props.canvas.elements.map(canvasElement => {
      let styles: React.CSSProperties = {};

      if (selectedElements.indexOf(canvasElement) == -1) {
        styles.display = "none";
      }

      return (
        <rect key={`selection-${canvasElement.id}`} style={styles}
              className="c-app-canvas--selection--elements--rect translatable"
              x={canvasElement.x} y={canvasElement.y} data-id={canvasElement.id}
              width={canvasElement.width} height={canvasElement.height} />
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
        <rect className="c-app-canvas--overlay--shadow--left" x="50%" y="0" width="100" height="100%" fill="url(#overlay--shadow--gradient--left)" />
        <rect className="c-app-canvas--overlay--shadow--right" x="50%" y="0" width="100" height="100%" fill="url(#overlay--shadow--gradient--right)" />
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

  render() {
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
    )
  }
}
