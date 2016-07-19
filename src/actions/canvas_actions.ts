import {AppState} from "../models/app_state";
import {Canvas} from "../models/canvas";
import {CanvasElement} from "../models/canvas/canvas_element";

export interface PositioningAction {
  x: number;
  y: number;
}

export interface AddAction extends PositioningAction {
  shape: string;
}

export interface ElementSelectAction {
  elements: number[];
  exclusive: boolean;
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

export function elementAdd(state: AppState, payload: AddAction) {
  return updateCurrentSpread(state, newCanvas => {
    newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
      let newElement = newCanvas.createElement(payload.shape, payload.x, payload.y);
      newCanvasElements.push(newElement);
      newCanvasElements.select(true, newElement.id);
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

export function selectionClear(state: AppState, payload: AddAction) {
  return updateCurrentSpread(state, newCanvas => {
    newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
      newCanvasElements.clearSelection();
    });
  });
}

export function selectionDelete(state: AppState, payload: AddAction) {
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
