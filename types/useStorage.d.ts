/**
 * Retrieves a value from storage, or initializes it with a default value if it doesn't exist.
 * The retrieved value is wrapped in a `Cell` object, which can be used to listen for changes and update the storage.
 *
 * @template {string | number | boolean | object | null} T
 * @param {string} key - The key to use for storing and retrieving the value.
 * @param {Storage} storage - The storage implementation to use (e.g. `localStorage`, `sessionStorage`).
 * @param {T} initialValue - The default value to use if the key doesn't exist in storage.
 * @returns {SourceCell<T>} - A `Cell` object containing the retrieved or initialized value.
 */
export function useStorage<T extends string | number | boolean | object | null>(key: string, storage: Storage, initialValue: T): SourceCell<T>;
import { SourceCell } from '@adbl/cells';
