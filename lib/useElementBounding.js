/**
 * @typedef {Object} ReactiveDOMRect
 * @property {Cell<number>} height
 * @property {Cell<number>} width
 * @property {Cell<number>} left
 * @property {Cell<number>} right
 * @property {Cell<number>} top
 * @property {Cell<number>} bottom
 * @property {Cell<number>} x
 * @property {Cell<number>} y
 */

import { Cell } from '@adbl/cells';

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
export function useElementBounding(element) {
  const height = Cell.source(0);
  const bottom = Cell.source(0);
  const left = Cell.source(0);
  const right = Cell.source(0);
  const top = Cell.source(0);
  const width = Cell.source(0);
  const x = Cell.source(0);
  const y = Cell.source(0);

  const recalculate = () => {
    const rect = element.getBoundingClientRect();
    height.value = rect.height;
    width.value = rect.width;
    top.value = rect.top;
    bottom.value = rect.bottom;
    left.value = rect.left;
    right.value = rect.top;
    x.value = rect.x;
    y.value = rect.y;
  };

  const update = () => {
    if (!element.isConnected) {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      resizeObserver.disconnect();
      return;
    }
    window.requestAnimationFrame(() => recalculate());
  };

  update();

  const resizeObserver = new ResizeObserver(update);
  setTimeout(() => {
    resizeObserver.observe(element);
    window.addEventListener('scroll', update, { passive: true, capture: true });
    window.addEventListener('resize', update, { passive: true });
  }, 0);

  return {
    height,
    width,
    left,
    right,
    top,
    bottom,
    x,
    y,
  };
}
