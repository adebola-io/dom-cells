import { Cell, SourceCell } from '@adbl/cells';

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
export function useStorage(key, storage, initialValue) {
  let storedValueString = storage.getItem(key);
  let storedValue = null;
  try {
    if (storedValueString) {
      storedValue = JSON.parse(storedValueString);
    } else {
      storedValue = initialValue;
      storedValueString = JSON.stringify(storedValue);
      storage.setItem(key, storedValueString);
    }
  } catch (error) {
    console.error(error);
    storedValue = initialValue || null;
  }

  const cell = Cell.source(storedValue, { deep: true });

  cell.listen((value) => {
    storedValueString = JSON.stringify(value);
    storage.setItem(key, storedValueString);
  });

  window.addEventListener('storage', (event) => {
    if (event.key !== key) {
      return;
    }
    const newValue = event.newValue;
    if (storedValueString === newValue) {
      return;
    }
    if (newValue !== null) {
      try {
        cell.value = JSON.parse(newValue);
      } catch (error) {
        console.error(error);
      }
    } else {
      storage.setItem(key, JSON.stringify(initialValue));
      cell.value = initialValue;
    }
  });

  return cell;
}
