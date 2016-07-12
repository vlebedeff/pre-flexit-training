import * as React from "react";

import {ToolbarComponent} from "./toolbar/toolbar";
import {CanvasComponent} from "./canvas/canvas";

export class AppComponent extends React.Component<{}, {}> {
  render() {
    return (
      <div className="c-app">
        <ToolbarComponent />
        <CanvasComponent />
      </div>
    )
  }
}
