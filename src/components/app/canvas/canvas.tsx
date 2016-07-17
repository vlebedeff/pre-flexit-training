import * as React from "react";

import {Point} from "../../../utils/geometry/point";
import {Rect, outerRect} from "../../../utils/geometry/rect";
import {Canvas} from "../../../models/canvas";
import {CanvasElement} from "../../../models/canvas/canvas_element";

import {DragSession, DragSessionEvent} from "../../../utils/mouse/drag_drop";

import {AppChildComponent} from "../../../app";

interface ICanvasComponentProps {
  canvas: Canvas;
}

export class CanvasComponent extends AppChildComponent<ICanvasComponentProps> {
  private _currentDragSession: DragSession;

  refs: {
    [key: string]: (Element);
    canvasNode: Element;
  }

  get selectedElements() {
    //TODO: cache
    return this.props.canvas.elements.getSelected();
  }

  private onDragOver(e: DragEvent) {
    e.preventDefault();
  }

  private onDrop(e: DragEvent) {
    e.preventDefault();
    let position = new Point(e.clientX, e.clientY).subtract(this.getOffset())

    this.app.canvasDispatcher.add(e.dataTransfer.getData("shape"), position.x, position.y);
  }

  private onCanvasClick(e: DragEvent) {
    if (e.target == this.refs.canvasNode) {
      this.app.canvasDispatcher.clearSelection();
    }
  }

  private onElementMouseDown(e: MouseEvent, canvasElement: CanvasElement) {
    if (e.button != 0) {
      return;
    }

    const {canvasNode} = this.refs;

    canvasNode.classList.add("dragging");

    let translatedElements: HTMLElement[] = [];
    let shiftKey = e.shiftKey;

    new DragSession(
      e,
      (e: DragSessionEvent) => {
        this._currentDragSession = e.session;

        if (!this.app.state.canvas.elements.isSelected(canvasElement.id)) {
          this.app.canvasDispatcher.select(canvasElement, !shiftKey);
        }

      },
      (e: DragSessionEvent) => {
        translatedElements = Array.prototype.slice.call(this.refs.canvasNode.querySelectorAll(".translatable"));

        translatedElements.forEach((el: HTMLElement) => {
          el.style.transform = `translate(${e.translation.x}px, ${e.translation.y}px)`;
        });
      },
      (e: DragSessionEvent) => {
        this._currentDragSession = null;

        canvasNode.classList.remove("dragging");
        
        if (e.translation.x != 0 || e.translation.y != 0) {
          this.app.canvasDispatcher.translate(e.translation.x, e.translation.y);
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

    this.app.canvasDispatcher.select(canvasElement, !e.shiftKey);
  }

  private onElementDoubleClick(e: MouseEvent) {
    if (e.altKey) {
      this.app.canvasDispatcher.sendBackward();
    } else {
      this.app.canvasDispatcher.sendForward();
    }
  }

  getOffset(): Point {
    let rect = this.refs.canvasNode.getClientRects()[0];
    return new Point(rect.left, rect.top);
  }

  renderContent(): JSX.Element {
    return (
      <g id="content">
        {
          this.props.canvas.elements.map(canvasElement =>
            <use key={canvasElement.id}
                 className={`c-element ${this.selectedElements.indexOf(canvasElement) > -1 ? "translatable" : ""}`}
                 xlinkHref={`shapes/${canvasElement.shape}.svg#${canvasElement.shape}`}
                 x={canvasElement.x} y={canvasElement.y}
                 width={canvasElement.width} height={canvasElement.height}
                 onMouseDown={(e: MouseEvent) => this.onElementMouseDown(e, canvasElement)}
                 onMouseUp={(e: MouseEvent) => this.onElementMouseUp(e, canvasElement)}
                 onDoubleClick={(e: MouseEvent) => this.onElementDoubleClick(e)} />)
        }
      </g>
    );
  }

  renderSelection(): JSX.Element {
    return (
      <g id="selection">
        <g id="selection-elements">{this.renderSelectedElementsOutline()}</g>
        {this.renderSelectedElementsOuterRect()}
      </g>
    );
  }

  private renderSelectedElementsOutline(): JSX.Element[] {
    return this.selectedElements.map(canvasElement => {
      return (
        <rect key={`selection-${canvasElement.id}`}
              className="translatable"
              x={canvasElement.x - 2} y={canvasElement.y - 2}
              width={canvasElement.width + 3} height={canvasElement.height + 3} />
      );
    });
  }

  private renderSelectedElementsOuterRect(): JSX.Element {
    if (this.selectedElements.length < 2) return null;

    let selectedRect = outerRect(...this.selectedElements.map(e => new Rect(e.x, e.y, e.width, e.height)));

    return (
      <rect key="selection" id="selection-outter-rect"
            className="translatable"
            x={selectedRect.x - 5} y={selectedRect.y - 5}
            width={selectedRect.width + 10} height={selectedRect.height + 10} />
    );
  }

  render() {
    return (
      <svg ref="canvasNode" className="c-app-canvas" 
           onDragOver={this.onDragOver.bind(this)}
           onDrop={this.onDrop.bind(this)}
           onClick={this.onCanvasClick.bind(this)}
           >
        {this.renderContent()}
        {this.renderSelection()}
      </svg>
    )
  }
}
