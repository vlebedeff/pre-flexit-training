import {AppState} from "../models/app_state";
import {Dispatcher} from "../lib/dispatcher";

import * as SpreadActions from "../actions/spread_actions";

const ELEMENT_ADD_STICKER = "spread.element.add.sticker";
const ELEMENT_ADD_TEXT = "spread.element.add.text";
const ELEMENT_EDIT_TEXT = "spread.element.edit.text";
const ELEMENTS_SELECT = "spread.elements.select";
const ELEMENTS_SELECT_ALL = "spread.elements.select.all";
const SELECTION_TRANSLATE = "spread.selection.move";
const SELECTION_SEND_FORWARD = "spread.selection.sendForward";
const SELECTION_SEND_BACKWARD = "spread.selection.sendBackward";
const SELECTION_BRING_TO_FRONT = "spread.selection.bringToFront";
const SELECTION_BRING_TO_BACK = "spread.selection.bringToBack";
const SELECTION_CLEAR = "spread.selection.clear";
const SELECTION_DELETE = "spread.selection.delete";
const SELECTION_TEXT_ALIGN = "spread.selection.text.align";
const SELECTION_COPY = "spread.selection.copy";
const SELECTION_CUT = "spread.selection.cut";
const SELECTION_PASTE = "spread.selection.paster";

export class SpreadDispatcher extends Dispatcher<AppState> {
  registerActions() {
    this.registerAction(ELEMENT_ADD_STICKER, SpreadActions.elementAddSticker);
    this.registerAction(ELEMENT_ADD_TEXT, SpreadActions.elementAddText);
    this.registerAction(ELEMENT_EDIT_TEXT, SpreadActions.elementEditText);
    this.registerAction(ELEMENTS_SELECT, SpreadActions.elementsSelect);
    this.registerAction(ELEMENTS_SELECT_ALL, SpreadActions.elementsSelectAll);
    this.registerAction(SELECTION_TRANSLATE, SpreadActions.selectionTranslate);
    this.registerAction(SELECTION_SEND_FORWARD, SpreadActions.selectionSendForward);
    this.registerAction(SELECTION_SEND_BACKWARD, SpreadActions.selectionSendBackward);
    this.registerAction(SELECTION_BRING_TO_FRONT, SpreadActions.selectionBringToTop);
    this.registerAction(SELECTION_BRING_TO_BACK, SpreadActions.selectionBringToBack);
    this.registerAction(SELECTION_CLEAR, SpreadActions.selectionClear);
    this.registerAction(SELECTION_DELETE, SpreadActions.selectionDelete);
    this.registerAction(SELECTION_TEXT_ALIGN, SpreadActions.selectionTextAlign);
    this.registerAction(SELECTION_COPY, SpreadActions.copySelection);
    this.registerAction(SELECTION_CUT, SpreadActions.cutSelection);
    this.registerAction(SELECTION_PASTE, SpreadActions.pasteSelection);
  }

  add(shape: string, x: number, y: number) {
    this.sendCommand(ELEMENT_ADD_STICKER, <SpreadActions.AddStickerAction>{shape, x, y});
  }

  addTextElement(x: number, y: number, autosize: boolean) {
    this.sendCommand(ELEMENT_ADD_TEXT, <SpreadActions.AddTextAction>{x, y, autosize});
  }

  editTextElement(elementId: number, text: string, x: number, y: number, width: number, height: number) {
    this.sendCommand(ELEMENT_EDIT_TEXT, <SpreadActions.EditTextAction>{elementId, text, x, y, width, height});
  }

  select(exclusive: boolean, ...elements: number[]) {
    this.sendCommand(ELEMENTS_SELECT, <SpreadActions.ElementSelectAction>{elements, exclusive});
  }

  elementsSelectAll() {
    this.sendCommand(ELEMENTS_SELECT_ALL);
  }

  clearSelection() {
    this.sendCommand(SELECTION_CLEAR);
  }

  deleteSelection() {
    this.sendCommand(SELECTION_DELETE);
  }

  copySelection() {
    this.sendCommand(SELECTION_COPY);
  }

  cutSelection() {
    this.sendCommand(SELECTION_CUT);
  }

  pasteSelection() {
    this.sendCommand(SELECTION_PASTE);
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

  textAlign(align: number) {
    this.sendCommand(SELECTION_TEXT_ALIGN, <SpreadActions.AlignTextAction>{align});
  }
}
