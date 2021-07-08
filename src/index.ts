import namedays from './namedays.json';

function getNumberFromIndex(index: number) {
	return `${index + 1}`.padStart(2, '0');
}

export function on(date: string) {
	const [month, day] = date.split('-');
	const monthIndex = parseInt(month, 10) - 1;
	const dayIndex = parseInt(day, 10) - 1;

	return namedays[monthIndex][dayIndex];
}

export function to(name: string) {
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
