import {AppState} from "../models/app_state";
import {Dispatcher} from "../lib/dispatcher";
import {CanvasElement} from "../models/canvas/canvas_element";

import * as SpreadActions from "../actions/spread_actions";

const ELEMENT_ADD = "spread.element.add";
const ELEMENTS_SELECT = "spread.elements.select";
const SELECTION_TRANSLATE = "spread.selection.move";
const SELECTION_SEND_FORWARD = "spread.selection.sendForward";
const SELECTION_SEND_BACKWARD = "spread.selection.sendBackward";
const SELECTION_BRING_TO_FRONT = "spread.selection.bringToFront";
const SELECTION_BRING_TO_BACK = "spread.selection.bringToBack";
const SELECTION_CLEAR = "spread.selection.clear";
const SELECTION_DELETE = "spread.selection.delete";

export class SpreadDispatcher extends Dispatcher<AppState> {
  registerActions() {
    this.registerAction(ELEMENT_ADD, SpreadActions.elementAdd);
    this.registerAction(ELEMENTS_SELECT, SpreadActions.elementsSelect);
    this.registerAction(SELECTION_TRANSLATE, SpreadActions.selectionTranslate);
    this.registerAction(SELECTION_SEND_FORWARD, SpreadActions.selectionSendForward);
    this.registerAction(SELECTION_SEND_BACKWARD, SpreadActions.selectionSendBackward);
    this.registerAction(SELECTION_BRING_TO_FRONT, SpreadActions.selectionBringToTop);
    this.registerAction(SELECTION_BRING_TO_BACK, SpreadActions.selectionBringToBack);
    this.registerAction(SELECTION_CLEAR, SpreadActions.selectionClear);
    this.registerAction(SELECTION_DELETE, SpreadActions.selectionDelete);
  }

  add(shape: string, x: number, y: number) {
    this.sendCommand(ELEMENT_ADD, <SpreadActions.AddAction>{shape, x, y});
  }

  select(exclusive: boolean, ...elements: number[]) {
    this.sendCommand(ELEMENTS_SELECT, <SpreadActions.ElementSelectAction>{elements, exclusive});
  }

  clearSelection() {
    this.sendCommand(SELECTION_CLEAR);
  }

  deleteSelection() {
    this.sendCommand(SELECTION_DELETE);
  }

  translate(x: number, y: number) {
    this.sendCommand(SELECTION_TRANSLATE, <SpreadActions.PositioningAction>{x, y});
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
