import { isLeapYear, insert, getDate } from './utils';

import namedays from './namedays.json';

/**
 * Getting nameday(s) on a specific date.
 *
 * @param {string} date The specific date.
 * @returns {string[]|undefined} The given nameday.
 * @example
 * on('02-17'); // ['Donát']
 * on('1-1'); // ['Alpár', 'Fruzsina', 'Bazil']
 * on('2020-02-17'); // ['Donát']
 * on('2020-02-24'); // [], because leap year
 * on('2022-02-24'); // ['Mátyás', 'Jázmin']
 * on('2020-02-25'); // ['Mátyás', 'Jázmin'], because leap year
 * on('2021-02-28'); // ['Elemér', 'Oszvald', 'Román']
 */
export function on(date: string): string[] {
	if (!date) {
		return [];
	}

	const dateParts = date.split('-');
	const firstPart = dateParts[0];
	const monthIndex = parseInt(firstPart.length === 2 ? firstPart : dateParts[1], 10) - 1;

	if (
		isNaN(monthIndex)
		|| monthIndex < 0
		|| monthIndex > 11
	) {
		return [];
	}

	const namedaysCopy = [...namedays];
	const lastPart = dateParts[dateParts.length - 1];
	const dayIndex = parseInt(lastPart, 10) - 1;

	if (
		firstPart.length === 4
		&& isLeapYear(firstPart)
	) {
		namedaysCopy[1] = insert(namedaysCopy[1], 23, []);
	}

	return (namedaysCopy as string[][][])[monthIndex][dayIndex];
}

/**
 * Getting date(s) to a specific name.
 *
 * @param {string} name
 * @returns {string[]} The given date.
 * @example
 * to('Dávid'); // ['12-30']
 * to('Tamás'); // ['01-28', '03-07', '06-22', '07-03', '09-22', '12-21', '12-29']
 */
export function to(name: string): string[] {
	let result: string[] = [];

	for (const [monthIndex, month] of namedays.entries()) {
		for (const [dayIndex, names] of month.entries()) {
			if (names.includes(name)) {
				result = [
					...result,
					getDate(monthIndex + 1, dayIndex + 1)
				];
			}
		}
	}

	return result;
}

/**
 * Getting today's nameday(s).
 *
 * @returns {string[]}
 * @example
 * today(); // ['Tivadar']
 */
export function today(): string[] {
	const now = new Date();
	const month = now.getMonth();
	const day = now.getDate() - 1;

	return namedays[month][day];
}

/**
 * Getting tomorrow's nameday(s).
 *
 * @returns {string[]}
 * @example
 * tomorrow(); // ['Réka', 'András', 'Leó']
 */
export function tomorrow(): string[] {
	const date = new Date();

	date.setDate(date.getDate() + 1);

	const month = date.getMonth();
	const day = date.getDate() - 1;

	return namedays[month][day];
}
