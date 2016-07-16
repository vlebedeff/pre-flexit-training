import * as React from "react";

import {ButtonComponent} from "./button/button";

export class ToolbarComponent extends React.Component<{}, {}> {
  render() {
    return (
      <div className="c-app-toolbar">
        <ButtonComponent shape="square" />
        <ButtonComponent shape="circle" />
        <ButtonComponent shape="triangle" />
        <ButtonComponent shape="mixbook" />
        <ButtonComponent shape="homer-simpson" />
        <ButtonComponent shape="sonic" />
        <ButtonComponent shape="slack" />
        <ButtonComponent shape="react" />
      </div>
    )
  }
}