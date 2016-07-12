import * as React from "react";

import {Point} from "../../../../utils/geometry/point";
import {DragSession, DragSessionEvent} from "../../../../utils/drag_drop/drag_drop";
import {CanvasElement} from "../../../../models/canvas_element";

interface IElementComponentProps {
  element: CanvasElement;
}

export class ElementComponent extends React.Component<IElementComponentProps, IElementComponentProps> {
  private _startDragPosition: Point;

  constructor(props : IElementComponentProps) {
    super(props);

    this.state = this.props;
  }

  refs: {
    [key: string]: (Element);
    element: HTMLElement;
  }

  onMouseDown(e: MouseEvent) {
    new DragSession(
      e,
      (e: DragSessionEvent) => {
        this.refs.element.style.transform = `translate(${e.translation.x}px, ${e.translation.y}px)`;
      },
      (e: DragSessionEvent) => {
        this.state.element.position.x += e.translation.x;
        this.state.element.position.y += e.translation.y;
        this.refs.element.setAttribute("x", (this.state.element.position.x).toString());
        this.refs.element.setAttribute("y", (this.state.element.position.y).toString());
        this.refs.element.style.transform = "";
      }
    );
  }

  render() {
    let state = this.state;
    let element = state.element;
    let onMouseDown = this.onMouseDown.bind(this);

    return (
      <use ref="element"
           xlinkHref={`shapes/${element.shape}.svg#${element.shape}`}
           x={element.position.x} y={element.position.y}
           width={element.width} height={element.height}
           onMouseDown={onMouseDown} />
    );
  }
}