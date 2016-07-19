import * as React from "react";

import {Canvas} from "../../../models/canvas";
import {CanvasCollection} from "../../../models/canvas/canvas_collection";

import {AppChildComponent} from "../../../app"; 
import {SpreadComponent} from "../spread/spread";

interface INavComponentProps {
  spreads: CanvasCollection
}

export class NavComponent extends AppChildComponent<INavComponentProps> {
  onSpreadClick(spread: Canvas) {
    let {spreads} = this.props;
    this.app.bookDispatcher.spreadSelect(spreads.indexOf(spread));
  }

  render() {
    let {spreads} = this.props;
    let currentSpreadIndex = spreads.currentIndex;
    
    return (
      <div className="c-app-nav">
        {
          spreads.map((canvas, i) => {
            let classNames: string[] = [
              "c-app-nav--button"
            ];
            if (currentSpreadIndex == i) {
              classNames.push("active");
            }

            return (
              <div key={`canvas_${i}`} className={classNames.join(" ")} onClick={(e) => this.onSpreadClick(canvas)}>
                <SpreadComponent canvas={canvas} width={1200} height={600} />
              </div>
            );
          })
        }
      </div>
    );
  }
}
