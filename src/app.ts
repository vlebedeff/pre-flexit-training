import {IStore} from "./lib/interfaces/store";

import {Component, PropTypes} from "react";
import {ReduxStore} from "./lib/stores/redux";

import {AppState, ISerialzedAppState} from "./models/app_state";

import {HistoryProvider} from "./lib/history/history_provider"

import {HistoryDispatcher} from "./dispatchers/history_dispatcher";
import {BookDispatcher} from "./dispatchers/book_dispatcher";
import {SpreadDispatcher} from "./dispatchers/spread_dispatcher";

import {HotkeysManager} from "./utils/keyboard/hotkeys"

import * as Keys from "./utils/keyboard/keys"
import {CTRL, SHIFT, ALT, COMMAND} from "./utils/keyboard/keys"

const appStateLocalStorageKey = "appState";

export class App {
  store: IStore<AppState>;
  historyProvider: HistoryProvider<AppState>;

  spreadDispatcher: SpreadDispatcher;
  historyDispatcher: HistoryDispatcher;
  bookDispatcher: BookDispatcher;

  hotkeys: HotkeysManager;  

  constructor() {
    let serializedInitialAppState = window.localStorage.getItem(appStateLocalStorageKey);
    let initialState = new AppState(true);

    if (serializedInitialAppState) {
      initialState.deserialize(<ISerialzedAppState>JSON.parse(serializedInitialAppState));
    }

    this.store = new ReduxStore<AppState>(initialState);
    this.historyProvider = new HistoryProvider<AppState>(this.store);

    this.historyDispatcher = new HistoryDispatcher(this.store, this.historyProvider);
    this.bookDispatcher = new BookDispatcher(this.store);
    this.spreadDispatcher = new SpreadDispatcher(this.store);
    
    this.hotkeys = new HotkeysManager();

    this.hotkeys
      .register(Keys.Esc, () => this.spreadDispatcher.clearSelection())
      .register(COMMAND|Keys.code('a'), () => this.spreadDispatcher.elementsSelectAll())
      .register(Keys.Backspace, () => this.spreadDispatcher.deleteSelection())
      .register(Keys.Up, () => this.spreadDispatcher.translate(0 , -1))
      .register(Keys.Down, () => this.spreadDispatcher.translate(0 , 1))
      .register(Keys.Left, () => this.spreadDispatcher.translate(-1 , 0))
      .register(Keys.Right, () => this.spreadDispatcher.translate(1 , 0))
      .register(SHIFT|Keys.Up, () => this.spreadDispatcher.translate(0 , -10))
      .register(SHIFT|Keys.Down, () => this.spreadDispatcher.translate(0 , 10))
      .register(SHIFT|Keys.Left, () => this.spreadDispatcher.translate(-10 , 0))
      .register(SHIFT|Keys.Right, () => this.spreadDispatcher.translate(10 , 0))
      .register(ALT|Keys.Up, () => this.spreadDispatcher.sendForward())
      .register(ALT|Keys.Down, () => this.spreadDispatcher.sendBackward())
      .register(CTRL|ALT|Keys.Up, () => this.spreadDispatcher.bringToTop())
      .register(CTRL|ALT|Keys.Down, () => this.spreadDispatcher.bringToBottom())
      .register(COMMAND|Keys.code('z'), () => this.historyDispatcher.undo())
      .register(COMMAND|SHIFT|Keys.code('z'), () => this.historyDispatcher.redo());

    this.spreadDispatcher.registerActions();
    this.historyDispatcher.registerActions();
    this.bookDispatcher.registerActions();

    this.store.subscribe(state => {
      window.localStorage.setItem(appStateLocalStorageKey, JSON.stringify(state.serialize()));
    });
  }

  get state() {
    return this.store.getState();
  }
}

let contextType = { app: PropTypes.object };
type ContextType = { app: App };

export abstract class BaseAppComponent extends Component<{}, AppState> {
  static get childContextTypes() {
    return contextType;
  }

  app: App;

  constructor() {
    super();
    this.app = new App();
    this.state = this.app.store.getState();
    this.app.store.subscribe(() => {
      this.setState(this.app.store.getState());
    });
  }

  getChildContext() {
    return <ContextType>{app: this.app};
  }
}

export abstract class AppChildComponent<TProps> extends Component<TProps, {}> {
  static get contextTypes() {
    return contextType;
  }

  get app(): App {
    return (<ContextType>this.context).app;
  }
}
