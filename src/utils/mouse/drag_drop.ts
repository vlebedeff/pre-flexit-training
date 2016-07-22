import {Point} from "../geometry/point";

type DragSessionCallback = (e: DragSessionEvent) => void;

export class DragSessionEvent {
  constructor(public session: DragSession, public translation: Point, public originalEvent: MouseEvent) {

  }
}

export class DragSession {
  private _startDragPoint: Point;
  private _started: boolean;
  private _originalEvent: MouseEvent;
  private _windowOnMouseMoveFn: (e: MouseEvent) => void;
  private _windowOnMouseUpFn: (e: MouseEvent) => void;

  constructor(e: MouseEvent,
              private _onStartDragCallback: DragSessionCallback,
              private _onDragCallback: DragSessionCallback,
              private _onDropCallback: DragSessionCallback)
  {
    this._originalEvent = e;
    this._startDragPoint = new Point(e.clientX, e.clientY);
    this._started = false;

    window.addEventListener("mousemove", this._windowOnMouseMoveFn = this._onMouseMove.bind(this));
    window.addEventListener("mouseup", this._windowOnMouseUpFn = this._onMouseUp.bind(this));
  }

  private getTranslation(e: MouseEvent): Point {
    return new Point(e.clientX, e.clientY).subtract(this._startDragPoint);
  }

  private createEventObject(e: MouseEvent): DragSessionEvent {
    return new DragSessionEvent(this, this.getTranslation(e), this._originalEvent);
  }

  private _onMouseMove(e: MouseEvent) {
    if (!this._started) {
      this._onStartDragCallback(this.createEventObject(e));
      this._onStartDragCallback = null;
      this._started = true;
    }
    this._onDragCallback(this.createEventObject(e));
  }

  private _onMouseUp(e: MouseEvent) {
    window.removeEventListener("mousemove", this._windowOnMouseMoveFn);
    window.removeEventListener("mouseup", this._windowOnMouseUpFn);
    if (this._started) {
      this._onDropCallback(this.createEventObject(e));
    }
  }
}

// type MouseEventHandler = (e: MouseEvent) => void;

// export class DragManager {
//   private _activeDragSessions: DragSession[];

//   public onMouseDown(e: MouseEvent): MouseEventHandler {
//     return (e: MouseEvent) => {
      
//     };

//     if (e.button != 0) return;

    
//   }

//   public onMouseUp(e: MouseEvent) {
//     if (this._isDragActive) return;
//   }
// }
