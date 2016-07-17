export function code(s: string): number {
  return s.charCodeAt(0);
}

export const ALT = 1 << 8;
export const CTRL = 1 << 9;
export const SHIFT = 1 << 10;

export const Esc = 27;
export const Backspace = 8;

export const Left = 37;
export const Up = 38;
export const Right = 39;
export const Down = 40;
