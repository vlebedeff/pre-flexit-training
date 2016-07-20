import {AppState} from "../models/app_state";
import {Canvas} from "../models/canvas";

export interface SpreadSelectAction {
  spreadIndex: number;
}

export function reset(state: AppState, payload: SpreadSelectAction) {
  return new AppState(true);
}

export function spreadSelect(state: AppState, payload: SpreadSelectAction) {
  return state.update(newState => {
    return newState.spreads = newState.spreads.update(newSpreads => {
      newSpreads.select(payload.spreadIndex);
    });
  });
}
