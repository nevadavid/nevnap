/**
 * Date part from index.
 *
 * @param {number} index
 * @returns {string}
 * @example
 * datePartFromIndex(1); // '01'
 * datePartFromIndex(11); // '11'
 */
export function datePartFromIndex(index: number): string {
	return `${index}`.padStart(2, '0');
}

/**
 * Get date.
 *
 * @param {number} month
 * @param {number} day
 * @returns {string}
 * @example
 * getDate(1, 1); // '01-01'
 * getDate(12, 21); // '12-21'
 */
export function getDate(month: number, day: number): string {
	const monthNumber = datePartFromIndex(month);
	const dayNumber = datePartFromIndex(day);

	return `${monthNumber}-${dayNumber}`;
}

/**
 * Is leap year?
 *
 * @param {number|string} year
 * @returns {boolean}
 * @example
 * isLeapYear('2020'); // true
 * isLeapYear('2021'); // false
 */
export function isLeapYear(year: number | string): boolean {
	return new Date(+year, 1, 29).getMonth() === 1;
}

/**
 * Insert new items to array (immutable).
 *
 * @param {any[]} arr
 * @param {number} index
 * @param {any[]} newItems
 * @returns {any[]}
 * @example
 * insert([], 0, [1]); // [1]
 */
export function insert(arr: any[], index: number, ...newItems: any[]): any[] {
	return [
		...arr.slice(0, index),
		...newItems,
		...arr.slice(index),
	];
}
