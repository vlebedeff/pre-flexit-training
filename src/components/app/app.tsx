import * as React from "react";

import {Canvas} from "../../models/canvas";

import {ToolbarComponent} from "./toolbar/toolbar";
import {CanvasComponent} from "./canvas/canvas";

export class AppComponent extends React.Component<{}, {}> {
  private _canvas: Canvas;
  
  constructor(props: Object) {
    super(props);
    this._canvas = new Canvas();
  }

  render() {
    return (
      <div className="c-app">
        <ToolbarComponent />
        <CanvasComponent canvas={this._canvas} />
      </div>
    )
  }
}
