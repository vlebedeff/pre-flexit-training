import {AppState} from "../models/app_state";
import {Canvas} from "../models/canvas";
import {SpreadTextElement, TextAlign} from "../models/canvas/spread_element_text";

export interface PositioningAction {
  x: number;
  y: number;
}

export interface AddStickerAction extends PositioningAction {
  shape: string;
}

export interface AddTextAction extends PositioningAction {
  autosize: boolean;
}

export interface ElementSelectAction {
  elements: number[];
  exclusive: boolean;
}

export interface EditTextAction {
  elementId: number;
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface AlignTextAction {
  align: TextAlign;
}

function updateCurrentSpread(state: AppState, updateFn: (spread: Canvas) => void): AppState {
  return state.update(newState => {
    return newState.spreads = newState.spreads.update(newSpreads => {
      let currentSpread = newSpreads.current;
      let updatedSpread = currentSpread.update(newSpread => {
        updateFn(newSpread);
      });
      newSpreads.replace(currentSpread, updatedSpread);
    });
  });
}

export function elementAddSticker(state: AppState, payload: AddStickerAction) {
  return updateCurrentSpread(state, newCanvas => {
    newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
      let newElement = newCanvas.createStickerElement(payload.shape, payload.x, payload.y);
      newCanvasElements.push(newElement);
      newCanvasElements.select(true, newElement.id);
    });
  });
}

export function elementAddText(state: AppState, payload: AddTextAction) {
  return updateCurrentSpread(state, newCanvas => {
    newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
      let newElement = newCanvas.createTextElement(payload.x, payload.y, payload.autosize);
      newCanvasElements.push(newElement);
      newCanvasElements.select(true, newElement.id);
    });
  });
}

export function elementEditText(state: AppState, payload: EditTextAction) {
  return updateCurrentSpread(state, newCanvas => {
    newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
      let textElement = <SpreadTextElement>newCanvasElements.getById(payload.elementId);
      let newTextElement = textElement.clone();
      newTextElement.text = payload.text;
      newTextElement.setBBox(payload.x, payload.y, payload.width, payload.height);
      newCanvasElements.replace(textElement, newTextElement);
    });
  });
}

export function elementsSelect(state: AppState, payload: ElementSelectAction) {
  return updateCurrentSpread(state, newCanvas => {
    newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
      newCanvasElements.select(payload.exclusive, ...payload.elements);
    });
  });
}

export function elementsSelectAll(state: AppState, payload: ElementSelectAction) {
  return updateCurrentSpread(state, newCanvas => {
    newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
      newCanvasElements.selectAll();
    });
  });
}

export function selectionClear(state: AppState) {
  return updateCurrentSpread(state, newCanvas => {
    newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
      newCanvasElements.clearSelection();
    });
  });
}

export function selectionDelete(state: AppState) {
  return updateCurrentSpread(state, newCanvas => {
    newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
      newCanvasElements.deleteSelection();
    });
  });
}

export function selectionTranslate(state: AppState, payload: PositioningAction) {
  return updateCurrentSpread(state, newCanvas => {
    newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
      for (let canvasElement of newCanvasElements.getSelected()) {
        let newCanvasElement = canvasElement.clone();
        newCanvasElement.translate(payload.x, payload.y);
        newCanvasElements.replace(canvasElement, newCanvasElement);
      }
    });
  });
}

export function selectionSendForward(state: AppState) {
  return updateCurrentSpread(state, newCanvas => {
    newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
      for (let canvasElement of newCanvasElements.getSelected()) {
        newCanvasElements.sendForward(canvasElement);
      }
    });
  });
}

export function selectionSendBackward(state: AppState) {
  return updateCurrentSpread(state, newCanvas => {
    newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
      for (let canvasElement of newCanvasElements.getSelected()) {
        newCanvasElements.sendBackward(canvasElement);
      }
    });
  });
}

export function selectionBringToTop(state: AppState) {
  return updateCurrentSpread(state, newCanvas => {
    newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
      for (let canvasElement of newCanvasElements.getSelected()) {
        newCanvasElements.bringToTop(canvasElement);
      }
    });
  });
}

export function selectionBringToBack(state: AppState) {
  return updateCurrentSpread(state, newCanvas => {
    newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
      for (let canvasElement of newCanvasElements.getSelected()) {
        newCanvasElements.bringToBack(canvasElement);
      }
    });
  });
}

export function selectionTextAlign(state: AppState, payload: AlignTextAction) {
  return updateCurrentSpread(state, newCanvas => {
    newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
      for (let canvasElement of newCanvasElements.getSelected()) {
        if (canvasElement instanceof SpreadTextElement) {
          let newElement = (<SpreadTextElement>canvasElement).clone();
          newElement.align = payload.align;
          newCanvasElements.replace(canvasElement, newElement);
        }
      }
    });
  });
}
