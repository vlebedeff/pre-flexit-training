import * as React from "react";
import * as ReactDOM from "react-dom";

import {playPreset} from "../../demo/presets";

import {BaseAppComponent} from "../../app";
import {ToolbarComponent} from "./toolbar/toolbar";
import {NavComponent} from "./nav/nav";
import {SpreadComponent} from "./spread/spread";

class AppComponent extends BaseAppComponent {
  private onDemoClick() {
    alert("Comming soon");
    //playPreset((c: {}) => this.app.store.dispatch(c as any), 1000);
  }

  render() {
    let {spreads} = this.state;

    return (
      <div className="c-app">
        <ToolbarComponent />
        <div className="c-app--layout--main-column">
          <div className="c-app--work-area">
            <div className="c-app--work-area--target">
              <SpreadComponent canvas={spreads.current} width={1200} height={600} contentEditable={true} />
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
