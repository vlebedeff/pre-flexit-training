import {IStore} from "../lib/interfaces/store";
import {HistoryProvider} from "../lib/history/history_provider";
import {Dispatcher} from "../lib/dispatcher";
import {AppState} from "../models/app_state";

const UNDO = "history.undo";
const REDO = "history.redo";

export class HistoryDispatcher extends Dispatcher<AppState> {
  constructor(store: IStore<AppState>, private _provider: HistoryProvider<AppState>) {
    super(store);
  }
  
  registerActions() {
    this.registerAction(UNDO, (state: AppState) => {
      return this._provider.getPreviousState();
    });

    this.registerAction(REDO, (state: AppState, payload: {}) => {
      return this._provider.getNextState();
    });
  }

  undo() {
    this.sendCommand(UNDO);
  }

  redo() {
    this.sendCommand(REDO);
  }
}
