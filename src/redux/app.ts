import * as Redux from "redux";

import {IClonable} from "../interfaces/clonable";
import {Canvas} from "../models/canvas";

interface Action extends Redux.Action {
  payload: {};
}

type ActionHandler = (state: AppState, action: {}) => AppState;
type ActionHandlers = {[actionName: string]: ActionHandler};

var actions = <ActionHandlers>{};

function appReducer(state: AppState = new AppState(), action: Action) {
  var actionLogic = actions[action.type];

  if (!actionLogic) {
    return state;
  }

  return actionLogic(state, action.payload);
}

export class AppState implements IClonable<AppState> {
  constructor(public canvas: Canvas = new Canvas()) {
    
  }

  clone(): AppState {
    return new AppState(this.canvas.clone());
  }
}

export abstract class BaseDispatcher {
  protected call(command: string, payload: {} = null) {
     defaultStore.dispatch({type: command, payload: payload});
  }

  protected registerAction(command: string, handler: ActionHandler) {
    actions[command] = handler;
  }
}

export var defaultStore = Redux.createStore<AppState>(appReducer);
