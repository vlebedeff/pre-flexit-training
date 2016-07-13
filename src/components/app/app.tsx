import * as React from "react";

import * as AppStore from "../../redux/app";

import {ToolbarComponent} from "./toolbar/toolbar";
import {CanvasComponent} from "./canvas/canvas";

export class AppComponent extends React.Component<{}, {}> {
  constructor() {
    super();

    AppStore.defaultStore.subscribe(() => {
      this.setState({});
    })
  }

  render() {
    var state = AppStore.defaultStore.getState();

    return (
      <div className="c-app">
        <ToolbarComponent />
        <CanvasComponent canvas={state.canvas} />
      </div>
    )
  }
}

export function createApplicationElement(): JSX.Element {
  return <AppComponent />;
}
