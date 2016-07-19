import {CTRL, SHIFT, ALT, COMMAND} from "./keys";

type KeyboardHandler = (e: KeyboardEvent) => void;

export class HotkeysManager {
  private _backspaceIsPressed: boolean;
  private _hotKeys: { [key: number]:  KeyboardHandler };

  constructor() {
    this._hotKeys = {};

    window.addEventListener("keydown", (e: KeyboardEvent) => {
      let code = e.which || e.keyCode;
      
      if (e.ctrlKey) code |= CTRL;
      if (e.shiftKey) code |= SHIFT;
      if (e.altKey) code |= ALT;
      if (e.metaKey) code |= COMMAND;

      let handler = this._hotKeys[code];

      if (!handler) return;

      e.preventDefault();

      handler.apply(this, e);
    });
  }

  register(code: number, handler: KeyboardHandler): this {
    this._hotKeys[code] = handler;
    return this;
  }
}
