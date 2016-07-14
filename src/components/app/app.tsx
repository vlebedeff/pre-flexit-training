import * as React from "react";
import * as ReactDOM from "react-dom";

import {defaultStore, AppState} from "../../redux/app";

import {ToolbarComponent} from "./toolbar/toolbar";
import {CanvasComponent} from "./canvas/canvas";

class AppComponent extends React.Component<{}, AppState> {
  constructor() {
    super();
    this.state = defaultStore.getState();

    defaultStore.subscribe(() => {
      this.setState(defaultStore.getState());
    });
  }

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