import * as React from "react";

import {Point} from "../../../utils/geometry/point";

interface ICanvasComponentProps {
  
}

interface ICanvasComponentState {
  elements: JSX.Element[];
}

export class CanvasComponent extends React.Component<ICanvasComponentProps, ICanvasComponentState> {
  static get initialState(): ICanvasComponentState {
    return {
      elements: [] as JSX.Element[]
    };
  }

  constructor(props : ICanvasComponentProps) {
    super(props);
  
    this.state = {
      elements: [] as JSX.Element[]
    };
  }

  refs: {
    [key: string]: (Element);
    canvas: Element;
  }

  private onDragOver(e: DragEvent) {
    e.preventDefault();
  }

  private onDrop(e: DragEvent) {
    e.preventDefault();  
    let offset = this.getOffset();
    let shape = e.dataTransfer.getData("shape");
    let shapeElement = (
      <svg key={new Date().getTime()}>
        <use xlinkHref={`/shapes/${shape}.svg#${shape}`} x={e.clientX - offset.x - 50} y={e.clientY - offset.y - 50} width="100" height="100" />
      </svg>
    )

    this.setState({
      elements: this.state.elements.concat(shapeElement)
    });
  }

  getOffset(): Point {
    let rect = this.refs.canvas.getClientRects()[0];
    return new Point(rect.left, rect.top);
  }

  render() {
    let onDragOver = this.onDragOver.bind(this)
    let onDrop = this.onDrop.bind(this)

    return (
      <svg ref="canvas" className="c-app-canvas" onDragOver={onDragOver} onDrop={onDrop}>
        {this.state.elements}
      </svg>
    )
  }
}
