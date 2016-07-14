import {AppState, BaseDispatcher} from "./app";

const UNDO = "HISTORY_UNDO";
const REDO = "HISTORY_REDO";

class HistoryDispatcher extends BaseDispatcher {
  static get default(): HistoryDispatcher {
    var dispatcher = new HistoryDispatcher();

    dispatcher.registerAction(UNDO, (state: AppState, payload: {}) => {
      //TODO: Implement
      return state;
    });

    dispatcher.registerAction(REDO, (state: AppState, payload: {}) => {
      //TODO: Implement
      return state;
    });

    return dispatcher;
  }

  undo() { this._call(UNDO); }
  redo() { this._call(REDO); }
}

export HistoryDispatcher.default;
