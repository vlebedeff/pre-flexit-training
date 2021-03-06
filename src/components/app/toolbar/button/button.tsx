import * as React from "react";

import {AppChildComponent} from "../../../../app"; 

interface ButtonComponentProps {
  shape: string;
}

export class ButtonComponent extends AppChildComponent<ButtonComponentProps> {
  onDragStart(e: DragEvent) {
    e.dataTransfer.setData("shape", this.props.shape);
  }

  render() {
    return (
      <button className="c-app-toolbar-button" draggable="true" onDragStart={this.onDragStart.bind(this)}>
        <svg>
          <use xlinkHref={`shapes/${this.props.shape}.svg#${this.props.shape}`} x="10" y="10" width="30" height="30" />
        </svg>
      </button>
    )
  }
}
