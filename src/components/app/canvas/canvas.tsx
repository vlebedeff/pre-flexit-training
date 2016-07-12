import * as React from "react";

import {Point} from "../../../utils/geometry/point";
import {Canvas} from "../../../models/canvas";
import {CanvasElement} from "../../../models/canvas_element";

import {ElementComponent} from "./element/element";

interface ICanvasComponentProps {
  canvas: Canvas;
}

export class CanvasComponent extends React.Component<ICanvasComponentProps, ICanvasComponentProps> {
  constructor(props : ICanvasComponentProps) {
    super(props);
  
    this.state = this.props;
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

    let canvasElement = new CanvasElement(
      e.dataTransfer.getData("shape").toString(),
      new Point(e.clientX - offset.x - 50, e.clientY - offset.y - 50),
      100,
      100
    );

    this.setState(Object.assign({}, this.state, {
      canvas: {
        elements: this.state.canvas.elements.concat(canvasElement)
      }
    }));
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
        {this.state.canvas.elements.map((element, i) => <ElementComponent key={i} element={element} /> )}
      </svg>
    )
  }
}
