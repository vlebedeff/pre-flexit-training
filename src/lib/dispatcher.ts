import {IStore} from "../interfaces/store";

export abstract class Dispatcher<T> {
  constructor(private _store: IStore<T>) {

  }

  abstract registerActions(): void;

  protected call(actionName: string, payload: {} = null) {
    this._store.dispatch({type: actionName, payload: payload});
  }

  protected registerAction(actionName: string, handler: (state: T, payload: {}) => T): void {
    this._store.registerAction(actionName, handler);
  }
}
