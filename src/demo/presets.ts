export const demoPreset = [
  {"type":"spread.element.add.sticker","payload":{"shape":"mixbook","x":281.5,"y":100}},
  {"type":"spread.selection.move","payload":{"x":15,"y":18}},
  {"type":"spread.element.add.text","payload":{"x":308.5,"y":219,"text":""}},
  {"type":"spread.element.edit.text","payload":{"elementId":1469016171117,"text":"Mixbook","x":276.296875,"y":207,"width":64.40625,"height":24}},
  {"type":"spread.selection.clear","payload":null},
  {"type":"spread.elements.select","payload":{"elements":[1469016171117],"exclusive":true}},
  {"type":"spread.selection.move","payload":{"x":-12,"y":-20}},
];

export function playPreset(dispatchFn: (action: {}) => void,  speed: number = 100): number {
  let preset = demoPreset.slice(0);

  return setInterval(() => {
    dispatchFn(preset.shift());
  }, speed);
}
