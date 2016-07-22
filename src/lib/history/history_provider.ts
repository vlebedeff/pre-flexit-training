import {IStore} from "../interfaces/store";

export class HistoryProvider<T> {
  private _timeline: T[];
  private _position: number;

  constructor(private _store: IStore<T>) {
    this._timeline = [_store.getState()]
    this._position = 0;
    this._store.subscribe(this._onNewState.bind(this));
  }

  private _onNewState(state: T) {
    if (this._position == 0 && state == this._timeline[0]) {
      return;
    }

    if (this._position > 0 && state == this._timeline[this._position - 1]) {
      this._position--;
      return;
    }
    
    if (this._position < this._timeline.length - 1 && state == this._timeline[this._position + 1]) {
      this._position++;
      return;
    }

    if (this._timeline.length > this._position + 1) {
      this._timeline = this._timeline.slice(0, this._position + 1); 
    }

    this._timeline.push(state);
    this._position = this._timeline.length - 1;
  }

  public getPreviousState(): T {
    if (this._position <= 0) return this._timeline[0];
    return this._timeline[this._position - 1];
  }

  public getNextState(): T {
    if (this._position >= this._timeline.length - 1) return this._timeline[this._timeline.length - 1];
    return this._timeline[this._position + 1];
  }
}
