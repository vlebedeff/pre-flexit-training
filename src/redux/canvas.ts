import * as Redux from "redux";

import {AppState, BaseDispatcher} from "./app";
import {BaseModel} from "../utils/model/base_model";
import {Canvas, CanvasElement} from "../models/canvas";
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
  element: CanvasElement;
}

interface ElementMoveAction extends ElementAction {
  newPosition: Point;
}

class CanvasDispatcher extends BaseDispatcher {
  static get default(): CanvasDispatcher {
    var dispatcher = new CanvasDispatcher();

    dispatcher.registerAction(ADD, (state: AppState, payload: AddAction) => {
      return state.update<CanvasElement[]>(state.canvas.elements, (elements) => {
        return elements.concat(new CanvasElement(payload.shape, payload.position));
      });
    });

    dispatcher.registerAction(MOVE, (state: AppState, payload: ElementMoveAction) => {
      return state.update<CanvasElement>(payload.element, (element) => {
        return element.clone().changePosition(payload.newPosition)
      });
    });

    dispatcher.registerAction(SEND_FORWARD, (state: AppState, payload: ElementAction) => {
      return state.update<CanvasElement[]>(state.canvas.elements, (elements) => {
        //TODO: move logic to model
        var index = state.canvas.elements.indexOf(payload.element);
        var desiredIndex = index + 1;
        if (index != -1 && desiredIndex < elements.length) {
          var newElements = elements.slice(0); 
          newElements.splice(index, 1);
          newElements.splice(desiredIndex, 0, payload.element);
          return newElements; 
        }
        return elements;
      });
    });

    dispatcher.registerAction(SEND_BACKWARD, (state: AppState, payload: ElementAction) => {
      return state.update<CanvasElement[]>(state.canvas.elements, (elements) => {
        //TODO: move logic to model
        var index = state.canvas.elements.indexOf(payload.element);
        var desiredIndex = index - 1;
        if (index != -1 && desiredIndex > -1) {
          var newElements = elements.slice(0); 
          newElements.splice(index, 1);
          newElements.splice(desiredIndex, 0, payload.element);
          return newElements;
        }
        return elements;
      });
    });

    return dispatcher;
  }

  add(payload: AddAction) { this.call(ADD, payload); }
  move(payload: ElementMoveAction) { this.call(MOVE, payload); }
  sendForward(payload: ElementAction) { this.call(SEND_FORWARD, payload); }
  sendBackward(payload: ElementAction) { this.call(SEND_BACKWARD, payload); }
}

export default CanvasDispatcher.default;
