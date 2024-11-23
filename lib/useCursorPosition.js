import { Cell } from '@adbl/cells';

/**
 * @typedef {Object} MousePosition
 * @property {Cell<number>} x
 * @property {Cell<number>} y
 */

const x = Cell.source(0);
const y = Cell.source(0);

let mousePositionListenerAdded = false;

/**
 * Returns an object containing cells that track the current mouse position.
 *
 * @returns {MousePosition} An object with two properties:
 *   - x: A Cell containing the current mouse x position
 *   - y: A Cell containing the current mouse y position
 *
 * @example
 * import { useCursorPosition } from '@adbl/dom-cells';
 *
 * // Get the current mouse position
 * const { x, y } = useCursorPosition();
 *
 * // Access the current x and y values
 * console.log(`Mouse x: ${x.value}`);
 * console.log(`Mouse y: ${y.value}`);
 *
 * // React to changes in mouse position
 * x.listen(newX => {
 *   console.log(`Mouse x changed to: ${newX}`);
 * });
 */
export function useCursorPosition() {
  /** @param {MouseEvent} ev */
  const updatePosition = (ev) => {
    x.value = ev.clientX;
    y.value = ev.clientY;
  };

  if (!mousePositionListenerAdded) {
    window.addEventListener('mousemove', updatePosition);
    mousePositionListenerAdded = true;
  }

  return { x, y };
}
