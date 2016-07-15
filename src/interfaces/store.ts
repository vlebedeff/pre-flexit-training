export interface IStore<T> {
  getState(): T;
  subscribe(subscribeFn: (currentState: T) => void): void;
  dispatch(action: IStoreAction): void;
  registerAction(actionName: string, handler: (state: T, payload: {}) => T): void;
}

export interface IStoreAction {
  type: string;
  payload: {};
}
