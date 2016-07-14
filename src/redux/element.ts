import * as Redux from "redux";

import {AppState, BaseDispatcher} from "./app";
import {Point} from "../utils/geometry/point";

const ADD = "ELEMENT_ADD";
const MOVE = "ELEMENT_MOVE";
const SEND_FORWARD = "ELEMENT_SEND_FORWARD";
const SEND_BACKWARD = "ELEMENT_SEND_BACKWARD";

interface AddAction {
  shape: string;
  position: Point;
}

interface ElementAction {
  elementId: number;
}

interface ElementMoveAction extends ElementAction {
  newPosition: Point;
}

class ElementDispatcher extends BaseDispatcher {
  static get default(): ElementDispatcher {
    var dispatcher = new ElementDispatcher();

    dispatcher.registerAction(ADD, (state: AppState, payload: AddAction) => {
      let newState = state.clone();
      newState.canvas.addElement(payload.shape, payload.position);
      return newState;
    });

    dispatcher.registerAction(MOVE, (state: AppState, payload: ElementMoveAction) => {
      let newState = state.clone();
      newState.canvas.moveElement(payload.elementId, payload.newPosition);
      return newState;
    });

    dispatcher.registerAction(SEND_FORWARD, (state: AppState, payload: ElementAction) => {
      let newState = state.clone();
      newState.canvas.sendForward(payload.elementId);
      return newState;
    });

    dispatcher.registerAction(SEND_BACKWARD, (state: AppState, payload: ElementAction) => {
      let newState = state.clone();
      newState.canvas.sendBackward(payload.elementId);
      return newState;
    });

    return dispatcher;
  }

  add(payload: AddAction) { this.call(ADD, payload); }
  move(payload: ElementMoveAction) { this.call(MOVE, payload); }
  sendForward(payload: ElementAction) { this.call(SEND_FORWARD, payload); }
  sendBackward(payload: ElementAction) { this.call(SEND_BACKWARD, payload); }
}

export default ElementDispatcher.default;
