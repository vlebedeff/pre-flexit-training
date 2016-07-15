import {IStore} from "./interfaces/store";

import {Component, PropTypes} from "react";
import {ReduxStore} from "./lib/stores/redux";

import {AppState} from "./models/app";

import {CanvasDispatcher} from "./dispatchers/canvas";
import {HistoryDispatcher} from "./dispatchers/history";


export class App {
  store: IStore<AppState>;
  canvasDispatcher: CanvasDispatcher;
  historyDispatcher: HistoryDispatcher;

  constructor() {
    this.store = new ReduxStore<AppState>(new AppState());

    this.canvasDispatcher = new CanvasDispatcher(this.store);
    this.historyDispatcher = new HistoryDispatcher(this.store);

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
