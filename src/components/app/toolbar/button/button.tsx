import * as React from "react";

interface ButtonComponentProps {
  shape: string;
}

export class ButtonComponent extends React.Component<ButtonComponentProps, {}> {
  onDragStart(e: DragEvent) {
    e.dataTransfer.setData("shape", this.props.shape);
  }

  render() {
    let onDragStart = this.onDragStart.bind(this);

    return (
      <button className="c-app-toolbar-button" draggable="true" onDragStart={onDragStart}>
        <svg>
          <use xlinkHref={`/shapes/${this.props.shape}.svg#${this.props.shape}`} x="10" y="10" width="30" height="30" />
        </svg>
      </button>
    )
  }
}
