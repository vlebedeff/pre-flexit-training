import * as Redux from "redux";

import {IClonable} from "../interfaces/clonable";
import {Point} from "../utils/geometry/point";
import {Canvas, CanvasElement} from "../models/canvas";


interface Action<T> extends Redux.Action {
  payload: T;
}

export interface AddAction {
  shape: string;
  position: Point;
}


export interface ElementAction {
  elementId: number;
}

export interface ElementMoveAction extends ElementAction {
  newPosition: Point;
}

export class AppState implements IClonable<AppState> {
  constructor(public canvas: Canvas = new Canvas()) {
    
  }

  clone(): AppState {
    return new AppState(this.canvas.clone());
  }
}

export function appReducer(state: AppState = new AppState(), action: Redux.Action): AppState {
  var newState = state.clone();

  switch (action.type) {
    case "add": {
      let payload = (<Action<AddAction>>action).payload;
      newState.canvas.addElement(payload.shape, payload.position);
      break;
    }
    case "move": {
      let payload = (<Action<ElementMoveAction>>action).payload;
      newState.canvas.moveElement(payload.elementId, payload.newPosition);
      break;
    }
    case "sendForward": {
      let payload = (<Action<ElementAction>>action).payload;
      newState.canvas.sendForward(payload.elementId);
      break;
    }
    case "sendBackward": {
      let payload = (<Action<ElementAction>>action).payload;
      newState.canvas.sendBackward(payload.elementId);
      break;
    }
    default:
      return state;
  }

  return newState;
}

class AppDispatcher {
  private _call(command: string, payload: {}) {
     defaultStore.dispatch({type: command, payload: payload});
  }

  add(payload: AddAction) { this._call("add", payload); }
  move(payload: ElementMoveAction) { this._call("move", payload); }
  sendForward(payload: ElementAction) { this._call("sendForward", payload); }
  sendBackward(payload: ElementAction) { this._call("sendBackward", payload); }
}

export var defaultStore = Redux.createStore<AppState>(appReducer);
export var defaultDispatcher = new AppDispatcher();
