import * as React from "react";

import {Point} from "../../../utils/geometry/point";
import {Canvas, CanvasElement} from "../../../models/canvas";
import canvasDispatcher from "../../../redux/canvas";

import {ElementComponent} from "./element/element";

interface ICanvasComponentProps {
  canvas: Canvas;
}

export class CanvasComponent extends React.Component<ICanvasComponentProps,  {}> {
  refs: {
    [key: string]: (Element);
    canvasNode: Element;
  }

  private onDragOver(e: DragEvent) {
    e.preventDefault();
  }

  private onDrop(e: DragEvent) {
    e.preventDefault();  
    canvasDispatcher.add({
      shape: e.dataTransfer.getData("shape"),
      position: new Point(e.clientX, e.clientY).subtract(this.getOffset()).subtract(new Point(50, 50))
    });
  }

  getOffset(): Point {
    let rect = this.refs.canvasNode.getClientRects()[0];
    return new Point(rect.left, rect.top);
  }

  render() {
    return (
      <svg ref="canvasNode" className="c-app-canvas" 
           onDragOver={this.onDragOver.bind(this)}
           onDrop={this.onDrop.bind(this)}>

        <g id="content">
          {this.props.canvas.elements.map((element) => <ElementComponent key={element.id} element={element} /> )}
        </g>
        <g id="selections">

        </g>
      </svg>
    )
  }
}
