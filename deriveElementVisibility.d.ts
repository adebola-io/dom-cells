/**
 * Tracks the visibility of the provided HTML element and returns a Cell that
 * represents the element's visibility state.
 *
 * @param {HTMLElement} element - The HTML element to track the visibility of.
 * @returns {Cell<boolean>} A Cell that represents the visibility state of the element.
 *
 * @example
 * // Create an element to track
 * const myElement = document.getElementById('myElement');
 *
 * // Use the function to track visibility
 * const visibilityCell = deriveElementVisibility(myElement);
 *
 * // React to visibility changes
 * visibilityCell.listen(isVisible => {
 *   if (isVisible) {
 *     console.log('Element is visible');
 *   } else {
 *     console.log('Element is not visible');
 *   }
 * });
 */
export function deriveElementVisibility(element: HTMLElement): Cell<boolean>;
import { Cell } from '@adbl/cells';
