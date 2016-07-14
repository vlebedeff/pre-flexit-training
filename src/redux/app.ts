import * as Redux from "redux";

import {IClonable} from "../interfaces/clonable";
import {Canvas} from "../models/canvas";
import {BaseModel, UpdatablePropeties} from "../utils/model/base_model";

interface Action extends Redux.Action {
  payload: {};
}

type ActionHandler = (state: AppState, action: {}) => AppState;
type ActionHandlers = {[actionName: string]: ActionHandler};

var actions = <ActionHandlers>{};

function appReducer(state: AppState = new AppState(), action: Action) {
  var newState = state;

  var actionLogic = actions[action.type];
  if (actionLogic) {
    newState = actionLogic(state, action.payload);
  } 

  if (location.search.match(/[?&]debug=true(&|$)/)) {
    (<any>window).statesHistory = (<any>window).statesHistory || [];
    (<[]>(<any>window).statesHistory).push(newState);
  }

  return newState;
}

export class AppState extends BaseModel {
  constructor(public canvas: Canvas = new Canvas()) {
    super();
  }

  clone(): AppState {
    return new AppState(this.canvas);
  }

  updateAll(predicate: (model: BaseModel) => BaseModel): AppState {
    return <AppState>super.updateAll(predicate);
  }

  update<T extends UpdatablePropeties>(model: T, func: (model: T) => T): AppState { 
    return <AppState>super.update<T>(model, func);
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
