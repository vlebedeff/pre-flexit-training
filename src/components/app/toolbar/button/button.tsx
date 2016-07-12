import * as React from "react";

interface ButtonComponentProps {
  shape: string;
}

export class ButtonComponent extends React.Component<ButtonComponentProps, {}> {
  render() {
    return (
      <button className="c-app-toolbar-button">
        <svg>
          <use xlinkHref={`/shapes/${this.props.shape}.svg#${this.props.shape}`} x="10" y="10" width="30" height="30" />
        </svg>
      </button>
    )
  }
}
