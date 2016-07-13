import * as React from "react";

import {Point} from "../../../utils/geometry/point";
import {Canvas, CanvasElement} from "../../../models/canvas";

import {ElementComponent} from "./element/element";
import {AppComponent} from "../app";
import {defaultDispatcher} from "../../../redux/app";

interface ICanvasComponentProps {
  canvas: Canvas;
}

export class CanvasComponent extends React.Component<ICanvasComponentProps,  {}> {
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
    
    defaultDispatcher.add({
      shape: e.dataTransfer.getData("shape"),
      position: new Point(e.clientX - offset.x - 50, e.clientY - offset.y - 50)
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
        {this.props.canvas.elements.map((element) => <ElementComponent key={element.id} element={element} /> )}
      </svg>
    )
  }
}
