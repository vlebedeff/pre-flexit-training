import * as React from "react";
import * as ReactDOM from "react-dom";

import {BaseAppComponent} from "../../app";
import {ToolbarComponent} from "./toolbar/toolbar";
import {NavComponent} from "./nav/nav";
import {CanvasComponent} from "./canvas/canvas";

class AppComponent extends BaseAppComponent {
  render() {
    let {spreads} = this.state;

    return (
      <div className="c-app">
        <ToolbarComponent />
        <div className="c-app--layout--main-column">
          <div className="c-app--work-area">
            <div className="c-app--work-area--target">
              <CanvasComponent canvas={spreads.current} width={1200} height={600} />
            </div>
          </div>
          <NavComponent spreads={spreads} />
        </div>
      </div>
    );
  }
}

export function createApplicationElement(): JSX.Element {
  return <AppComponent />;
}

export function createApplication(target: Element) {
  ReactDOM.render(createApplicationElement(), target);
}
