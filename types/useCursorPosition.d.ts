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
export function useCursorPosition(): MousePosition;
export type MousePosition = {
    x: Cell<number>;
    y: Cell<number>;
};
import { Cell } from '@adbl/cells';
