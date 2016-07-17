import {Dispatcher} from "../lib/dispatcher";
import {AppState} from "../models/app_state";

const UNDO = "HISTORY_UNDO";
const REDO = "HISTORY_REDO";

export class HistoryDispatcher extends Dispatcher<AppState> {
  registerActions() {
    this.registerAction(UNDO, (state: AppState, payload: {}) => {
      //TODO: Implement
      return state;
    });

    this.registerAction(REDO, (state: AppState, payload: {}) => {
      //TODO: Implement
      return state;
    });
  }

  undo() {
    this.sendCommand(UNDO);
  }

  redo() {
    this.sendCommand(REDO);
  }
}
