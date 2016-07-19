import {AppState} from "../models/app_state";
import {Canvas} from "../models/canvas";
import {CanvasElement} from "../models/canvas/canvas_element";

export interface SpreadSelectAction {
  spreadIndex: number;
}

export function spreadSelect(state: AppState, payload: SpreadSelectAction) {
  return state.update(newState => {
    return newState.spreads = newState.spreads.update(newSpreads => {
      newSpreads.select(payload.spreadIndex);
    });
  });
}
