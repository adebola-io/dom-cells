/**
 * Creates a reactive DOM rectangle object that tracks the bounding box of the provided HTML element.
 *
 * @param {HTMLElement} element - The HTML element to track.
 * @returns {ReactiveDOMRect} A reactive DOM rectangle object with properties for height, width, left, right, top, bottom, x, and y.
 *
 * @example
 * const myElement = document.getElementById('myElement')
 * const boundingRect = deriveElementBounding(myElement)
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
export function deriveElementBounding(element: HTMLElement): ReactiveDOMRect;
export type ReactiveDOMRect = {
    height: import("@adbl/cells").Cell<number>;
    width: import("@adbl/cells").Cell<number>;
    left: import("@adbl/cells").Cell<number>;
    right: import("@adbl/cells").Cell<number>;
    top: import("@adbl/cells").Cell<number>;
    bottom: import("@adbl/cells").Cell<number>;
    x: import("@adbl/cells").Cell<number>;
    y: import("@adbl/cells").Cell<number>;
};
