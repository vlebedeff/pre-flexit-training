import * as React from "react";

import {Point} from "../../../../utils/geometry/point";
import {DragSession, DragSessionEvent} from "../../../../utils/mouse/drag_drop";
import {CanvasElement} from "../../../../models/canvas";
import canvasDispatcher from "../../../../redux/canvas";

interface IElementComponentProps {
  element: CanvasElement;
}

export class ElementComponent extends React.Component<IElementComponentProps, {}> {
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

    new DragSession(
      e,
      (e: DragSessionEvent) => {
        elementNode.style.transform = `translate(${e.translation.x}px, ${e.translation.y}px)`;
      },
      (e: DragSessionEvent) => {
        canvasDispatcher.move({
          element: element,
          newPosition: element.position.clone().add(e.translation)
        });
        elementNode.style.transform = '';
        elementNode.classList.remove("dragging");
      }
    );
  }

  onDoubleClick(e: MouseEvent) {
    let args = {element: this.props.element};
    if (e.altKey) {
      canvasDispatcher.sendBackward(args);
    } else {
      canvasDispatcher.sendForward(args);
    }
  }

  render() {
    const {element} = this.props;

    return (
      <use ref="elementNode" className="c-element"
           xlinkHref={`shapes/${element.shape}.svg#${element.shape}`}
           x={element.position.x} y={element.position.y}
           width={element.width} height={element.height}
           onMouseDown={this.onMouseDown.bind(this)}
           onDoubleClick={this.onDoubleClick.bind(this)} />
    );
  }
}
