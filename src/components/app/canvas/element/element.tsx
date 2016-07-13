import * as React from "react";

import {Point} from "../../../../utils/geometry/point";
import {DragSession, DragSessionEvent} from "../../../../utils/drag_drop/drag_drop";
import {CanvasElement} from "../../../../models/canvas";
import {defaultDispatcher} from "../../../../redux/app";

interface IElementComponentProps {
  element: CanvasElement;
}

export class ElementComponent extends React.Component<IElementComponentProps, {}> {
  refs: {
    [key: string]: (Element);
    element: HTMLElement;
  }

  onMouseDown(e: MouseEvent) {
    if (e.button != 0) {
      return;
    }

    new DragSession(
      e,
      (e: DragSessionEvent) => {
        this.refs.element.style.transform = `translate(${e.translation.x}px, ${e.translation.y}px)`;
      },
      (e: DragSessionEvent) => {
        defaultDispatcher.move({
          elementId: this.props.element.id,
          newPosition: new Point(
            this.props.element.position.x + e.translation.x,
            this.props.element.position.y + e.translation.y
          )
        })
        this.refs.element.style.transform = '';
      }
    );
  }

  onDoubleClick(e: MouseEvent) {
    let args = {elementId: this.props.element.id};
    if (e.altKey) {
      defaultDispatcher.sendBackward(args)
    } else {
      defaultDispatcher.sendForward({
        elementId: this.props.element.id
      })
    }
  }

  render() {
    let element = this.props.element;
    let onMouseDown = this.onMouseDown.bind(this);
    let onDoubleClick = this.onDoubleClick.bind(this);

    return (
      <use ref="element"
           xlinkHref={`shapes/${element.shape}.svg#${element.shape}`}
           x={element.position.x} y={element.position.y}
           width={element.width} height={element.height}
           onMouseDown={onMouseDown}
           onDoubleClick={onDoubleClick} />
    );
  }
}
