import * as React from "react";

import {CanvasCollection} from "../../../models/canvas/canvas_collection";

import {AppChildComponent} from "../../../app"; 
import {CanvasComponent} from "../canvas/canvas";

interface INavComponentProps {
  spreads: CanvasCollection
}

export class NavComponent extends AppChildComponent<INavComponentProps> {
  render() {
    let {spreads} = this.props;
    
    return (
      <div className="c-app-nav">
        {
          spreads.map((canvas, i) => {
            return (
              <CanvasComponent key={`canvas_${i}`} canvas={canvas} width={1200} height={600} />
            );
          })
        }
      </div>
    );
  }
}
