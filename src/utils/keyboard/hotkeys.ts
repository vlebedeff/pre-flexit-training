import {CTRL, SHIFT, ALT, COMMAND} from "./keys";

type KeyboardHandler = (e: KeyboardEvent) => void;

export class HotkeysManager {
  private _backspaceIsPressed: boolean;
  private _hotKeys: { [key: number]:  KeyboardHandler };
  private _disabled: boolean;

  constructor() {
    this._hotKeys = {};
    this._disabled = false;

    window.addEventListener("keydown", (e: KeyboardEvent) => {
      if (this._disabled) return;

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

  enable() {
    this._disabled = false;
  }

  disable() {
    this._disabled = true;
  }

  register(code: number, handler: KeyboardHandler): this {
    this._hotKeys[code] = handler;
    return this;
  }
}
