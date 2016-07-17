import * as React from "react";
import * as ReactDOM from "react-dom";

import {BaseAppComponent} from "../../app";
import {ToolbarComponent} from "./toolbar/toolbar";
import {CanvasComponent} from "./canvas/canvas";

class AppComponent extends BaseAppComponent {
  render() {
    return (
      <div className="c-app">
        <ToolbarComponent />
        <CanvasComponent canvas={this.state.canvas} />
      </div>
    )
  }
}

export function createApplicationElement(): JSX.Element {
  return <AppComponent />;
}

export function createApplication(target: Element) {
  ReactDOM.render(createApplicationElement(), target);
}
