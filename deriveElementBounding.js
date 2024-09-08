/**
 * @typedef {Object} ReactiveDOMRect
 * @property {import('@adbl/cells').Cell<number>} height
 * @property {import('@adbl/cells').Cell<number>} width
 * @property {import('@adbl/cells').Cell<number>} left
 * @property {import('@adbl/cells').Cell<number>} right
 * @property {import('@adbl/cells').Cell<number>} top
 * @property {import('@adbl/cells').Cell<number>} bottom
 * @property {import('@adbl/cells').Cell<number>} x
 * @property {import('@adbl/cells').Cell<number>} y
 */

import { Cell } from '@adbl/cells';

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
export function deriveElementBounding(element) {
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
