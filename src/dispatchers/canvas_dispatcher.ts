import {AppState} from "../models/app_state";
import {Dispatcher} from "../lib/dispatcher";
import {CanvasElement} from "../models/canvas/canvas_element";

import * as CanvasActions from "../actions/canvas_actions";

const ADD = "ELEMENT_ADD";
const MOVE = "ELEMENT_MOVE";
const SEND_FORWARD = "ELEMENT_SEND_FORWARD";
const SEND_BACKWARD = "ELEMENT_SEND_BACKWARD";
const BRING_FORWARD = "ELEMENT_BRING_FORWARD";
const BRING_BACKWARD = "ELEMENT_BRING_BACKWARD";
const SELECT = "ELEMENT_SELECT";
const SELECT_FLUSH = "SELECT_FLUSH";
const SELECT_MOVE = "SELECT_MOVE";
const DELETE = "DELETE";

export class CanvasDispatcher extends Dispatcher<AppState> {
  registerActions() {
    this.registerAction(ADD, CanvasActions.add);
    this.registerAction(SELECT, CanvasActions.select);
    this.registerAction(MOVE, CanvasActions.move);
    this.registerAction(SEND_FORWARD, CanvasActions.sendForward);
    this.registerAction(SEND_BACKWARD, CanvasActions.sendBackward);
    this.registerAction(BRING_FORWARD, CanvasActions.bringToTop);
    this.registerAction(BRING_BACKWARD, CanvasActions.bringToBottom);
    this.registerAction(SELECT_FLUSH, CanvasActions.clearSelection);
    this.registerAction(DELETE, CanvasActions.deleteSelection);
  }

  add(shape: string, x: number, y: number) {
    this.sendCommand(ADD, <CanvasActions.AddAction>{shape, x, y});
  }

  select(exclusive: boolean, ...elements: number[]) {
    this.sendCommand(SELECT, <CanvasActions.ElementSelectAction>{elements, exclusive});
  }

  clearSelection() {
    this.sendCommand(SELECT_FLUSH);
  }

  deleteSelection() {
    this.sendCommand(DELETE);
  }

  translate(x: number, y: number) {
    this.sendCommand(MOVE, <CanvasActions.PositioningAction>{x, y});
  }

  sendForward() {
    this.sendCommand(SEND_FORWARD);
  }

  sendBackward() {
    this.sendCommand(SEND_BACKWARD);
  }

  bringToTop() {
    this.sendCommand(BRING_FORWARD);
  }

  bringToBottom() {
    this.sendCommand(BRING_BACKWARD);
  }
}
