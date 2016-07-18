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

export function add(state: AppState, payload: AddAction) {
  return state.update(newState => {
    newState.canvas = newState.canvas.update(newCanvas => {
      newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
        let newElement = newCanvas.createElement(payload.shape, payload.x, payload.y);
        newCanvasElements.push(newElement);
        newCanvasElements.select(true, newElement.id);
      })
    });
  });
}

export function select(state: AppState, payload: ElementSelectAction) {
  return state.update(newState => {
    newState.canvas = newState.canvas.update(newCanvas => {
      newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
        newCanvasElements.select(payload.exclusive, ...payload.elements);
      })
    });
  });
}

export function clearSelection(state: AppState, payload: AddAction) {
  return state.update(newState => {
    newState.canvas = newState.canvas.update(newCanvas => {
      newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
        newCanvasElements.clearSelection();
      });
    });
  });
}

export function deleteSelection(state: AppState, payload: AddAction) {
  return state.update(newState => {
    newState.canvas = newState.canvas.update(newCanvas => {
      newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
        newCanvasElements.deleteSelection();
      });
    });
  });
}

export function move(state: AppState, payload: PositioningAction) {
  return state.update(newState => {
    newState.canvas = newState.canvas.update(newCanvas => {
      newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
        for (let canvasElement of newCanvasElements.getSelected()) {
          let newCanvasElement = canvasElement.clone();
          newCanvasElement.translate(payload.x, payload.y);
          newCanvasElements.replace(canvasElement, newCanvasElement);
        }
      });
    });
  });
}

export function sendForward(state: AppState) {
  return state.update(newState => {
    newState.canvas = newState.canvas.update(newCanvas => {
      newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
        for (let canvasElement of newCanvasElements.getSelected()) {
          newCanvasElements.sendForward(canvasElement);
        }
      });
    });
  });
}

export function sendBackward(state: AppState) {
  return state.update(newState => {
    newState.canvas = newState.canvas.update(newCanvas => {
      newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
        for (let canvasElement of newCanvasElements.getSelected()) {
          newCanvasElements.sendBackward(canvasElement);
        }
      });
    });
  });
}

export function bringToTop(state: AppState) {
  return state.update(newState => {
    newState.canvas = newState.canvas.update(newCanvas => {
      newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
        for (let canvasElement of newCanvasElements.getSelected()) {
          newCanvasElements.bringToTop(canvasElement);
        }
      });
    });
  });
}

export function bringToBottom(state: AppState) {
  return state.update(newState => {
    newState.canvas = newState.canvas.update(newCanvas => {
      newCanvas.elements = newCanvas.elements.update(newCanvasElements => {
        for (let canvasElement of newCanvasElements.getSelected()) {
          newCanvasElements.brintToBottom(canvasElement);
        }
      });
    });
  });
}
