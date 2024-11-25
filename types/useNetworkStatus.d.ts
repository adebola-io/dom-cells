/**
 * Returns a Cell that tracks the current network status.
 *
 * @returns {Cell<boolean>} A Cell containing a boolean value representing the network status:
 *          - true when online
 *          - false when offline
 *
 * @example
 * import { useNetworkStatus } from '@adbl/dom-cells';
 *
 * // Use the function to get a Cell tracking network status
 * const networkStatus = useNetworkStatus();
 *
 * // Access the current network status
 * console.log('Is online:', networkStatus.value);
 *
 * // React to changes in network status
 * networkStatus.listen((isOnline) => {
 *   console.log('Network status changed. Is online:', isOnline);
 * });
 */
export function deriveNetworkStatus(): Cell<boolean>;
import { Cell } from '@adbl/cells';
