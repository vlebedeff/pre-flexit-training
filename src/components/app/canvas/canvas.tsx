import * as React from "react";

import {Point} from "../../../utils/geometry/point";
import {Rect} from "../../../utils/geometry/rect";
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

  private onClick(e: DragEvent) {
    if (e.target == this.refs.canvasNode) {
      canvasDispatcher.selectFlush();
    }
  }

  getOffset(): Point {
    let rect = this.refs.canvasNode.getClientRects()[0];
    return new Point(rect.left, rect.top);
  }

  render() {
    const {canvas} = this.props;

    let outterSelection = canvas.selectedElementIds.length > 1 ? [canvas.getSelectedElementsRect()] : [];

    return (
      <svg ref="canvasNode" className="c-app-canvas" 
           onDragOver={this.onDragOver.bind(this)}
           onDrop={this.onDrop.bind(this)}
           onClick={this.onClick.bind(this)}>
        <g id="content">
          {canvas.elements.map((element) => <ElementComponent key={element.id} element={element} /> )}
        </g>
        <g id="selection">
          <g id="selection-elements">
            {
              canvas.getSelectedElements().map((e) => {
                return (
                  <rect key={`selection-${e.id}`} id={`selection-elements-${e.id}`}
                      x={e.position.x - 2} y={e.position.y - 2} width={e.width + 3} height={e.height + 3} />
                );
              })
            }
          </g>
          {
            outterSelection.map((r => {
              return (
                <rect key="selection" id="selection-outter-rect"
                      x={r.position.x - 5} y={r.position.y - 5} width={r.width + 10} height={r.height + 10} />
              );
            }))
          }
        </g>
      </svg>
    )
  }
}
