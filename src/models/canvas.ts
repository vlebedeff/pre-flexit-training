import {BaseModel, UpdatablePropeties} from "../lib/model";
import {Point} from "../utils/geometry/point";
import {Rect} from "../utils/geometry/rect";

export class Canvas extends BaseModel {
  constructor(public elements: CanvasElement[] = [], public selectedElementIds: number[] = []) {
    super();
  }

  getSelectedElements(): CanvasElement[] {
    return this.elements.filter(e => this.selectedElementIds.indexOf(e.id) > -1)
  }

  getSelectedElementsRect(): Rect {
    // TODO: do all calculation in one iteration
    let selectedElements = this.getSelectedElements();

    if (selectedElements.length == 0) {
      return null;
    }

    let x = Math.min.apply(null, selectedElements.map(e => e.position.x));
    let y = Math.min.apply(null, selectedElements.map(e => e.position.y));
    let x2 = Math.max.apply(null, selectedElements.map(e => e.position.x + e.width));
    let y2 = Math.max.apply(null, selectedElements.map(e => e.position.y + e.height));

    return new Rect(new Point(x, y), x2 - x, y2 - y);
  }

  clone(): Canvas {
    return new Canvas(this.elements, this.selectedElementIds);
  }
}

export class CanvasElement extends BaseModel {
  id: number;
  shape: string;
  position: Point;
  width: number;
  height: number;

  constructor(shape: string, position: Point, width: number = 100, height: number = 100) {
    super();
    this.id = new Date().getTime();
    this.shape = shape;
    this.position = position;
    this.width = width;
    this.height = height;
  }

  setPosition(newPosition: Point): CanvasElement {
    this.position = newPosition;
    return this;
  }

  move(translation: Point): CanvasElement {
    this.position = this.position.clone().add(translation);
    return this;
  }

  clone(): CanvasElement {
    let newCanvasElement = new CanvasElement(this.shape, this.position.clone(), this.width, this.height);
    newCanvasElement.id = this.id;
    return newCanvasElement;
  }
}
