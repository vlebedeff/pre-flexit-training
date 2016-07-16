import * as React from "react";

import {Point} from "../../../../utils/geometry/point";
import {DragSession, DragSessionEvent} from "../../../../utils/mouse/drag_drop";
import {CanvasElement} from "../../../../models/canvas";
import {AppChildComponent} from "../../../../app";

interface IElementComponentProps {
  element: CanvasElement;
}

export class ElementComponent extends AppChildComponent<IElementComponentProps> {
  private _currentDragSession: DragSession;

  refs: {
    [key: string]: (Element);
    elementNode: HTMLElement;
  }

  onMouseDown(e: MouseEvent) {
    if (e.button != 0) {
      return;
    }

    const {element} = this.props;
    const {elementNode} = this.refs;

    elementNode.classList.add("dragging");

    let selectedElements: HTMLElement[] = [];
    let selectedElementsOutlines: HTMLElement[];
    let shiftKey = e.shiftKey;

    new DragSession(
      e,
      (e: DragSessionEvent) => {
        if (selectedElementsOutlines == null) {
          this._currentDragSession = e.session;

          if (this.app.state.canvas.selectedElementIds.indexOf(element.id) == -1) {
            this.app.canvasDispatcher.select({
              element: element,
              exclusive: !shiftKey
            });
          }
          selectedElementsOutlines = Array.prototype.slice.call(document.querySelectorAll("#selection rect")) as HTMLElement[];
          selectedElements = this.app.state.canvas.selectedElementIds.map((elementId) => {
            return document.querySelector(`#c-element__${elementId}`) as HTMLElement;
          });
        }

        selectedElements.concat(selectedElementsOutlines).forEach((el) => {
          if (el == null) {
            return;
          }
          el.style.transform = `translate(${e.translation.x}px, ${e.translation.y}px)`;
        });
      },
      (e: DragSessionEvent) => {
        this._currentDragSession = null;

        elementNode.classList.remove("dragging");
        
        if (e.translation.x != 0 || e.translation.y != 0) {
          this.app.canvasDispatcher.selectMove({
            translation: e.translation
          });
        }
        
        selectedElements.concat(selectedElementsOutlines).forEach((el) => {
          if (el == null) {
            return;
          }
          el.style.transform = "";
        });
      }
    );
  }

  onMouseUp(e: MouseEvent) {
    if (this._currentDragSession != null) {
      return;
    }

    const {element} = this.props;

    this.app.canvasDispatcher.select({
      element: element,
      exclusive: !e.shiftKey
    });
  }

  onDoubleClick(e: MouseEvent) {
    let args = {element: this.props.element};
    if (e.altKey) {
      this.app.canvasDispatcher.sendBackward(args);
    } else {
      this.app.canvasDispatcher.sendForward(args);
    }
  }

  render() {
    const {element} = this.props;

    return (
      <use ref="elementNode" className="c-element" id={`c-element__${element.id}`}
           xlinkHref={`shapes/${element.shape}.svg#${element.shape}`}
           x={element.position.x} y={element.position.y}
           width={element.width} height={element.height}
           onMouseDown={this.onMouseDown.bind(this)}
           onMouseUp={this.onMouseUp.bind(this)}
           onDoubleClick={this.onDoubleClick.bind(this)} />
    );
  }
}
