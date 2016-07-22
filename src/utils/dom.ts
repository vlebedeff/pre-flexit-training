const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

interface Stylable {
  style: CSSStyleDeclaration
}

export interface SVGBaseRectElement extends Stylable {
  x: SVGAnimatedLength;
  y: SVGAnimatedLength;
  width: SVGAnimatedLength;
  height: SVGAnimatedLength;
}

export function nodeListToArray<T>(nodeList: NodeList): T[] {
  return <T[]>Array.prototype.slice.call(nodeList);
}

export function querySelectorAll<T>(selector: string, context: Element = null): T[] {
  return nodeListToArray<T>((context || document).querySelectorAll(selector));
}

export function childElements<T>(element: Element): T[] {
  return nodeListToArray<T>(element.childNodes);
}

export function createSVGElement<T extends Element>(tagName: string): T {
  return document.createElementNS(SVG_NAMESPACE, tagName) as T;
}

export function hide(element: Stylable) {
  element.style.display = "none";
}

export function show(element: Stylable) {
  //TODO: Don't use block value for all elements
  element.style.display = "block";
}

export function toggleVisibility(element: Stylable, visible: boolean) {
  (visible ? show : hide)(element);
}

export function getSVGRectBounds(rect: SVGBaseRectElement): number[] {
  return [
    rect.x.baseVal.value,
    rect.y.baseVal.value,
    rect.width.baseVal.value,
    rect.height.baseVal.value
  ]
}

export function setSVGRectBounds(rect: SVGBaseRectElement, x: number, y: number, width: number, height: number) {
  rect.x.baseVal.value = x;
  rect.y.baseVal.value = y;
  rect.width.baseVal.value = width;
  rect.height.baseVal.value = height;
}

export function redraw(element: Stylable) {
  // TODO: Find better way to force redraw
  hide(element);
  setTimeout(() => show(element), 1);
}
