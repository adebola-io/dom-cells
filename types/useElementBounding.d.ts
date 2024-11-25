/**
 * Creates a reactive DOM rectangle object that tracks the bounding box of the provided HTML element.
 *
 * @param {HTMLElement} element - The HTML element to track.
 * @returns {ReactiveDOMRect} A reactive DOM rectangle object with properties for height, width, left, right, top, bottom, x, and y.
 *
 * @example
 * import { useElementBounding } from '@adbl/dom-cells';
 *
 * const myElement = document.getElementById('myElement')
 * const boundingRect = useElementBounding(myElement)
 *
 * // Access reactive properties
 * const elementWidth = boundingRect.width.value;
 * const elementHeight = boundingRect.height.value;
 *
 * // React to changes
 * boundingRect.left.listen((newLeft) => {
 *   console.log('Element left position changed:', newLeft)
 * })
 */
export function useElementBounding(element: HTMLElement): ReactiveDOMRect;
export type ReactiveDOMRect = {
    height: Cell<number>;
    width: Cell<number>;
    left: Cell<number>;
    right: Cell<number>;
    top: Cell<number>;
    bottom: Cell<number>;
    x: Cell<number>;
    y: Cell<number>;
};
import { Cell } from '@adbl/cells';
