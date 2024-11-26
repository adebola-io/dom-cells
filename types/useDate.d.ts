/**
 * Provides a reactive date value that updates at the specified interval.
 * @param {number} interval - The interval in milliseconds at which the date should be updated.
 * @returns {Cell<Date>} The interval value passed to the function.
 * @example
 * // Update date every second (1000ms)
 * const date = useLiveDate(1000);
 *
 * @example
 * // Update date every minute (60000ms)
 * const minuteUpdater = useLiveDate(60000);
 *
 * @example
 * // Access the current date value
 * console.log(date.value.toISOString());
 */
export function useLiveDate(interval: number): Cell<Date>;
import { Cell } from '@adbl/cells';
