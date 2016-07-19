import {AppState} from "../models/app_state";
import {Dispatcher} from "../lib/dispatcher";

import * as BookActions from "../actions/book_actions";

const SPREAD_SELECT = "book.spread.select";

export class BookDispatcher extends Dispatcher<AppState> {
  registerActions() {
    this.registerAction(SPREAD_SELECT, BookActions.spreadSelect);
  }

  spreadSelect(spreadIndex: number) {
    this.sendCommand(SPREAD_SELECT, <BookActions.SpreadSelectAction>{spreadIndex});
  }
}
