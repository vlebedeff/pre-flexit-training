import * as Redux from "redux";

import {AppState, BaseDispatcher} from "./app";
import {BaseModel} from "../utils/model/base_model";
import {Canvas, CanvasElement} from "../models/canvas";
import {Point} from "../utils/geometry/point";

const ADD = "ELEMENT_ADD";
const MOVE = "ELEMENT_MOVE";
const SEND_FORWARD = "ELEMENT_SEND_FORWARD";
const SEND_BACKWARD = "ELEMENT_SEND_BACKWARD";
const SELECT = "ELEMENT_SELECT";
const SELECT_FLUSH = "SELECT_FLUSH";
const SELECT_MOVE = "SELECT_MOVE";

interface AddAction {
  shape: string;
  position: Point;
}

interface MoveAction {
  translation: Point;
}

interface ElementAction {
  element: CanvasElement;
}

interface ElementMoveAction extends ElementAction {
  newPosition: Point;
}

interface ElementSelectAction extends ElementAction {
  exclusive: boolean;
}

class CanvasDispatcher extends BaseDispatcher {
  static get default(): CanvasDispatcher {
    var dispatcher = new CanvasDispatcher();

    dispatcher.registerAction(ADD, (state: AppState, payload: AddAction) => {
      //TODO: Optimize it and do update via one itaration
      let newElement = new CanvasElement(payload.shape, payload.position);
      return state
        .update<CanvasElement[]>(state.canvas.elements, (elements) => {
          return elements.concat(newElement);
        })
        .update<number[]>(state.canvas.selectedElementIds, (selectedElementIds) => {
          return [newElement.id];
        });
    });

    dispatcher.registerAction(MOVE, (state: AppState, payload: ElementMoveAction) => {
      return state.update<CanvasElement>(payload.element, (element) => {
        return element.clone().setPosition(payload.newPosition)
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

    dispatcher.registerAction(SELECT, (state: AppState, payload: ElementSelectAction) => {
      return state.update<number[]>(state.canvas.selectedElementIds, (selectedElementIds) => {
        //TODO: move logic to model
        var index = selectedElementIds.indexOf(payload.element.id);
        var alreadyExists = index != -1;

        if (payload.exclusive) {
          if (alreadyExists && selectedElementIds.length == 1) {
            return selectedElementIds;
          }
          return [payload.element.id];
        }

        var newSelectedElements = selectedElementIds.slice(0);
        if (alreadyExists) {
          newSelectedElements.splice(index, 1);
        } else {
          newSelectedElements.push(payload.element.id);
        }

        return newSelectedElements;
      });
    });

    dispatcher.registerAction(SELECT_FLUSH, (state: AppState, payload: AddAction) => {
      return state.update<number[]>(state.canvas.selectedElementIds, (selectedElementIds) => {
        return [];
      });
    });

    dispatcher.registerAction(SELECT_MOVE, (state: AppState, payload: MoveAction) => {
      return state.update<CanvasElement[]>(state.canvas.elements, (elements) => {
        return elements.map((element) => {
          var selected = state.canvas.selectedElementIds.indexOf(element.id) > -1;
          if (!selected) {
            return element;
          }
          return element.clone().move(payload.translation);
        })
      });
    });

    return dispatcher;
  }

  add(payload: AddAction) { this.call(ADD, payload); }
  move(payload: ElementMoveAction) { this.call(MOVE, payload); }
  sendForward(payload: ElementAction) { this.call(SEND_FORWARD, payload); }
  sendBackward(payload: ElementAction) { this.call(SEND_BACKWARD, payload); }
  select(payload: ElementSelectAction) { this.call(SELECT, payload); }
  selectFlush() { this.call(SELECT_FLUSH); }
  selectMove(payload: MoveAction) { this.call(SELECT_MOVE, payload); }
}

export default CanvasDispatcher.default;
