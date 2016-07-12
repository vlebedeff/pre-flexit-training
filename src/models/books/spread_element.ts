import {CanvasElement} from "../canvas/canvas_element";

export const enum SpreadElementVisibility {
    None        = 0,
    
    LeftPage    = 1 << 1,
    RightPage   = 1 << 2,
    Spine       = 1 << 3,
    LeftFlap    = 1 << 4,
    RightFlap   = 1 << 5,

    All         = LeftPage | RightPage | Spine | LeftFlap | RightFlap
}

export class SpreadElement {
  element: CanvasElement;
  visibility: SpreadElementVisibility;
}