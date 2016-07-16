import * as Redux from "redux";
import {IStore, IStoreAction} from "../../interfaces/store";

export class ReduxStore<TState> implements IStore<TState>{
  private _store: Redux.Store<TState>;
  private _actionHandlers: {[actionName: string]: (state: TState, payload: {}) => TState};
  private _initialState: TState;

  constructor(initialState: TState) {
    this._initialState = initialState;
    this._actionHandlers = {};
    this._store = Redux.createStore<TState>(this._reducer.bind(this));
  }

  private _reducer(state: TState, action: IStoreAction): TState {
    let newState = state || this._initialState;

    let actionHandler = this._actionHandlers[action.type];
    if (actionHandler) {
      newState = actionHandler(state, action.payload);
    } 

    if (location.search.match(/[?&]debug=true(&|$)/)) {
      (<any>window).statesHistory = (<any>window).statesHistory || [];
      (<[]>(<any>window).statesHistory).push(newState);
    }

    return newState;
  }

  getState(): TState {
    return this._store.getState();
  }

  subscribe(subscribeFn: (currentState: TState) => void): void {
    this._store.subscribe(() => {
      subscribeFn(this.getState());
    });
  }

  dispatch(action: IStoreAction) {
    this._store.dispatch(action);
  }

  registerAction(actionName: string, handler: (state: TState, payload: {}) => TState): void {
    this._actionHandlers[actionName] = handler;
  }
}
