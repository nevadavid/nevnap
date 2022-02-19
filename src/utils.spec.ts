import { datePartFromIndex, getDate, isLeapYear, insert } from './utils';

test('datePartFromIndex', () => {
	expect(
		datePartFromIndex(1),
	)
	.toBe('01');

	expect(
		datePartFromIndex(11),
	)
	.toBe('11');

	expect(
		datePartFromIndex(0),
	)
	.toBe('00');
});

test('getDate', () => {
	expect(
		getDate(1, 1),
	)
	.toBe('01-01');

	expect(
		getDate(11, 11),
	)
	.toBe('11-11');
});

test('isLeapYear', () => {
	expect(
		isLeapYear(2021),
	)
	.toBe(false);

	expect(
		isLeapYear(2020),
	)
	.toBe(true);

	expect(
		isLeapYear('2020'),
	)
	.toBe(true);
});

test('insert', () => {
	expect(
		insert([], 0, 1),
	)
	.toStrictEqual([1]);

	expect(
		insert([1, 2, 3], 2, 1),
	)
	.toStrictEqual([1, 2, 1, 3]);
});
