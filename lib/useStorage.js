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
  const storedValueString = storage.getItem(key);
  let storedValue = null;
  try {
    if (storedValueString) {
      storedValue = JSON.parse(storedValueString);
    } else {
      storedValue = initialValue;
      storage.setItem(key, JSON.stringify(storedValue));
    }
  } catch (error) {
    console.error(error);
    storedValue = initialValue || null;
  }

  const cell = Cell.source(storedValue, { deep: true });

  cell.listen((value) => {
    storage.setItem(key, JSON.stringify(value));
  });

  window.addEventListener('storage', (event) => {
    if (event.key !== key) {
      return;
    }
    const newValue = event.newValue;
    if (newValue) {
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
