/**
 * Tracks the value of the specified attribute on the provided HTML element and
 * returns a Cell that represents the attribute's value.
 *
 * @param {HTMLElement} element - The HTML element to track the attribute value of.
 * @param {string} attributeName - The name of the attribute to track.
 * @returns {Cell<string | null>} A Cell that represents the value of the specified attribute.
 *
 * @example
 * import { useElementAttribute } from '@adbl/dom-cells';
 *
 * // Track the 'class' attribute of a button element
 * const button = document.querySelector('button')
 * const classCell = useElementAttribute(button, 'class')
 *
 * // Log the current value of the 'class' attribute
 * console.log(classCell.value); // Output: 'btn btn-primary'
 *
 * // Update the 'class' attribute
 * button.setAttribute('class', 'btn btn-secondary')
 * console.log(classCell.value); // Output: 'btn btn-secondary'
 */
export function useElementAttribute(element: HTMLElement, attributeName: string): Cell<string | null>;
import { Cell } from '@adbl/cells';
