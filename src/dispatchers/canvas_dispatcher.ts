import {AppState} from "../models/app_state";
import {Dispatcher} from "../lib/dispatcher";
import {CanvasElement} from "../models/canvas/canvas_element";

import * as CanvasActions from "../actions/canvas_actions";

const ELEMENT_ADD = "canvas.element.add";
const SELECTION_TRANSLATE = "canvas.selection.move";
const SELECTION_SEND_FORWARD = "canvas.selection.sendForward";
const SELECTION_SEND_BACKWARD = "canvas.selection.sendBackward";
const SELECTION_BRING_TO_FRONT = "canvas.selection.bringToFront";
const SELECTION_BRING_TO_BACK = "canvas.selection.bringToBack";
const ELEMENTS_SELECT = "canvas.elements.select";
const SELECTION_CLEAR = "canvas.selection.clear";
const SELECTION_DELETE = "canvas.selection.delete";

export class CanvasDispatcher extends Dispatcher<AppState> {
  registerActions() {
    this.registerAction(ELEMENT_ADD, CanvasActions.elementAdd);
    this.registerAction(ELEMENTS_SELECT, CanvasActions.elementsSelect);
    this.registerAction(SELECTION_TRANSLATE, CanvasActions.selectionTranslate);
    this.registerAction(SELECTION_SEND_FORWARD, CanvasActions.selectionSendForward);
    this.registerAction(SELECTION_SEND_BACKWARD, CanvasActions.selectionSendBackward);
    this.registerAction(SELECTION_BRING_TO_FRONT, CanvasActions.selectionBringToTop);
    this.registerAction(SELECTION_BRING_TO_BACK, CanvasActions.selectionBringToBack);
    this.registerAction(SELECTION_CLEAR, CanvasActions.selectionClear);
    this.registerAction(SELECTION_DELETE, CanvasActions.selectionDelete);
  }

  add(shape: string, x: number, y: number) {
    this.sendCommand(ELEMENT_ADD, <CanvasActions.AddAction>{shape, x, y});
  }

  select(exclusive: boolean, ...elements: number[]) {
    this.sendCommand(ELEMENTS_SELECT, <CanvasActions.ElementSelectAction>{elements, exclusive});
  }

  clearSelection() {
    this.sendCommand(SELECTION_CLEAR);
  }

  deleteSelection() {
    this.sendCommand(SELECTION_DELETE);
  }

  translate(x: number, y: number) {
    this.sendCommand(SELECTION_TRANSLATE, <CanvasActions.PositioningAction>{x, y});
  }

  sendForward() {
    this.sendCommand(SELECTION_SEND_FORWARD);
  }

  sendBackward() {
    this.sendCommand(SELECTION_SEND_BACKWARD);
  }

  bringToTop() {
    this.sendCommand(SELECTION_BRING_TO_FRONT);
  }

  bringToBottom() {
    this.sendCommand(SELECTION_BRING_TO_BACK);
  }
}
