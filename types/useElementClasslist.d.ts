/**
 * Tracks the class list of the provided HTML element and returns a Cell
 * that represents the element's classes as an array of strings.
 *
 * @param {HTMLElement} element - The HTML element to track the class list of.
 * @returns {Cell<string[]>} A Cell containing an array of strings representing the element's classes.
 *
 * @example
 * import { useElementClasslist } from '@adbl/dom-cells';
 *
 * // Create a div element with classes
 * const div = document.createElement('div')
 * div.classList.add('foo', 'bar')
 *
 * // Use the function to track the element's classes
 * const classesCell = useElementClasslist(div)
 *
 * // Log the initial classes
 * console.log(classesCell.value); // Output: ['foo', 'bar']
 *
 * // Add a new class
 * div.classList.add('baz')
 *
 * // Log the updated classes
 * console.log(classesCell.value); // Output: ['foo', 'bar', 'baz']
 */
export function useElementClassList(element: HTMLElement): Cell<string[]>;
import { Cell } from '@adbl/cells';
