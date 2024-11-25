/**
 * Provides a way to interact with the browser's localStorage reactively.
 *
 * @example
 * import { useLocalStorage } from '@adbl/dom-cells';
 *
 * const items = useLocalStorage('items', []);
 *
 * // Access the current value
 * console.log(items.value); // Output: '[]'
 *
 * items.value.push('item1'); // also updates localStorage
 *
 * @template {string | number | boolean | object | null} T
 * @param {string} key - The key to use for storing and retrieving the value in localStorage.
 * @param {T} initialValue - The initial value to use if the key does not exist in localStorage.
 * @returns {SourceCell<T>} - An array containing the current value and a function to update the value.
 */
export function useLocalStorage<T extends string | number | boolean | object | null>(key: string, initialValue: T): SourceCell<T>;
import { SourceCell } from '@adbl/cells';
