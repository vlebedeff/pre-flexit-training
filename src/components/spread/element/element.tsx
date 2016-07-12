import * as React from "react";

import {SpreadElement} from "../../../models/books/spread_element";

interface SpreadElementComponentProps {
  element: SpreadElement;
}

export class SpreadElementComponent extends React.Component<SpreadElementComponentProps, {}> {  
  render() {
    var styles = {
      transform: "rotate(30deg)"
    }
    return (
      <use className="c-spread-element" xlinkHref="/stickers/circle.svg#circle" x="50" y="50" width="50" height="50" fill="red" style={styles} />
    ) 
  }
}