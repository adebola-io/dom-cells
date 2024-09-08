/**
 * Returns an object containing cells that track the current mouse position.
 *
 * @returns {MousePosition} An object with two properties:
 *   - x: A Cell containing the current mouse x position
 *   - y: A Cell containing the current mouse y position
 *
 * @example
 * // Get the current mouse position
 * const { x, y } = deriveCursorPosition();
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
export function deriveCursorPosition(): MousePosition;
export type MousePosition = {
    x: import("@adbl/cells").Cell<number>;
    y: import("@adbl/cells").Cell<number>;
};
