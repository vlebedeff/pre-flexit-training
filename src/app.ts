import {IStore} from "./lib/interfaces/store";

import {Component, PropTypes} from "react";
import {ReduxStore} from "./lib/stores/redux";

import {AppState} from "./models/app_state";

import {CanvasDispatcher} from "./dispatchers/canvas_dispatcher";
import {HistoryDispatcher} from "./dispatchers/history_dispatcher";

import {HotkeysManager} from "./utils/keyboard/hotkeys"

import * as Keys from "./utils/keyboard/keys"
import {CTRL, SHIFT, ALT} from "./utils/keyboard/keys"

export class App {
  store: IStore<AppState>;
  canvasDispatcher: CanvasDispatcher;
  historyDispatcher: HistoryDispatcher;
  hotkeys: HotkeysManager;

  constructor() {
    this.store = new ReduxStore<AppState>(new AppState(true));

    this.canvasDispatcher = new CanvasDispatcher(this.store);
    this.historyDispatcher = new HistoryDispatcher(this.store);
    this.hotkeys = new HotkeysManager();

    this.hotkeys
      .register(Keys.Esc, () => this.canvasDispatcher.clearSelection())
      .register(Keys.Backspace, () => this.canvasDispatcher.deleteSelection())
      .register(Keys.Up, () => this.canvasDispatcher.translate(0 , -1))
      .register(Keys.Down, () => this.canvasDispatcher.translate(0 , 1))
      .register(Keys.Left, () => this.canvasDispatcher.translate(-1 , 0))
      .register(Keys.Right, () => this.canvasDispatcher.translate(1 , 0))
      .register(SHIFT|Keys.Up, () => this.canvasDispatcher.translate(0 , -10))
      .register(SHIFT|Keys.Down, () => this.canvasDispatcher.translate(0 , 10))
      .register(SHIFT|Keys.Left, () => this.canvasDispatcher.translate(-10 , 0))
      .register(SHIFT|Keys.Right, () => this.canvasDispatcher.translate(10 , 0))
      .register(ALT|Keys.Up, () => this.canvasDispatcher.sendForward())
      .register(ALT|Keys.Down, () => this.canvasDispatcher.sendBackward())
      .register(CTRL|ALT|Keys.Up, () => this.canvasDispatcher.bringToTop())
      .register(CTRL|ALT|Keys.Down, () => this.canvasDispatcher.bringToBottom());

    this.canvasDispatcher.registerActions();
    this.historyDispatcher.registerActions();
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
