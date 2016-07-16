import {Dispatcher} from "../lib/dispatcher";
import {AppState} from "../models/app";

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

  undo() { this.call(UNDO); }
  redo() { this.call(REDO); }
}
