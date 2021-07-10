import namedays from './namedays.json';

function getNumberFromIndex(index: number) {
	return `${index + 1}`.padStart(2, '0');
}

/**
 * Getting namedays on a specific date.
 *
 * @param {string} date
 * @returns {string}
 */
export function on(date: string): string {
	const [month, day] = date.split('-');
	const monthIndex = parseInt(month, 10) - 1;
	const dayIndex = parseInt(day, 10) - 1;

	return namedays[monthIndex][dayIndex];
}

/**
 * Getting date on a specific name.
 *
 * @param {string} name
 * @returns {string}
 */
export function to(name: string): string | undefined {
	for (const [monthIndex, month] of namedays.entries()) {
		for (const [dayIndex, day] of month.entries()) {
			const names = day.split(',');

			if (names.includes(name)) {
				const monthNumber = getNumberFromIndex(monthIndex);
				const dayNumber = getNumberFromIndex(dayIndex);

				return `${monthNumber}-${dayNumber}`;
			}
		}
	}
}

/**
 * Getting namedays on the current day.
 *
 * @returns {string}
 */
export function today(): string {
	const now = new Date();
	const month = now.getMonth();
	const day = now.getDate();

	return namedays[month][day - 1];
}
