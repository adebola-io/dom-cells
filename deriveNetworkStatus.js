import { Cell } from '@adbl/cells';

const networkStatus = Cell.source(navigator.onLine);
let networkListenerAdded = false;

/**
 * Returns a Cell that tracks the current network status.
 *
 * @returns {Cell<boolean>} A Cell containing a boolean value representing the network status:
 *          - true when online
 *          - false when offline
 *
 * @example
 * // Use the function to get a Cell tracking network status
 * const networkStatus = deriveNetworkStatus();
 *
 * // Access the current network status
 * console.log('Is online:', networkStatus.value);
 *
 * // React to changes in network status
 * networkStatus.listen((isOnline) => {
 *   console.log('Network status changed. Is online:', isOnline);
 * });
 */
export function deriveNetworkStatus() {
  if (!networkListenerAdded) {
    window.addEventListener('online', () => {
      networkStatus.value = true;
    });
    window.addEventListener('offline', () => {
      networkStatus.value = false;
    });
    networkListenerAdded = true;
  }
  return networkStatus;
}
