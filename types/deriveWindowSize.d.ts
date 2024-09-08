/**
 * @typedef {Object} ReactiveWindowSize
 * @property {Cell<number>} width
 * @property {Cell<number>} height
 */
/**
 * Returns an object containing cells that track the current window size.
 *
 * @returns {ReactiveWindowSize} An object with two properties:
 *   - width: A Cell containing the current window width
 *   - height: A Cell containing the current window height
 *
 * @example
 * // Get the current window size
 * const { width, height } = deriveWindowSize();
 *
 * // Access the current width and height values
 * console.log(`Window width: ${width.value}px`);
 * console.log(`Window height: ${height.value}px`);
 *
 * // React to changes in window size
 * width.listen(newWidth => {
 *   console.log(`Window width changed to: ${newWidth}px`);
 * });
 */
export function deriveWindowSize(): ReactiveWindowSize;
export type ReactiveWindowSize = {
    width: Cell<number>;
    height: Cell<number>;
};
import { Cell } from '@adbl/cells';
