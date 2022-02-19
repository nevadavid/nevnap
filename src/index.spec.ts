import { on, to, today, tomorrow } from './index';

test('on', () => {
	expect(
		on('01-01'),
	)
	.toStrictEqual(['Alpár', 'Fruzsina', 'Bazil']);

	expect(
		on('1-1'),
	)
	.toStrictEqual(['Alpár', 'Fruzsina', 'Bazil']);

	expect(
		on('02-24'),
	)
	.toStrictEqual(['Mátyás', 'Jázmin']);

	expect(
		on('2022-02-24'),
	)
	.toStrictEqual(['Mátyás', 'Jázmin']);

	expect(
		on('2020-02-24'),
	)
	.toStrictEqual([]);

	expect(
		on('2020-02-25'),
	)
	.toStrictEqual(['Mátyás', 'Jázmin']);

	expect(
		on('2021-02-28'),
	)
	.toStrictEqual(['Elemér', 'Oszvald', 'Román']);

	expect(
		on('02-17'),
	)
	.toStrictEqual(['Donát']);

	expect(
		on(''),
	)
	.toStrictEqual([]);

	expect(
		on('a'),
	)
	.toStrictEqual([]);
});

test('to', () => {
	expect(
		to('Dávid'),
	)
	.toStrictEqual([
		'12-30',
	]);

	expect(
		to('Tamás'),
	)
	.toStrictEqual([
		'01-28',
		'03-07',
		'06-22',
		'07-03',
		'09-22',
		'12-21',
		'12-29',
	]);

	expect(
		to('Q'),
	)
	.toStrictEqual([]);

	expect(
		to(''),
	)
	.toStrictEqual([]);
});

test('today', () => {
	expect(
		today(),
	)
	.toStrictEqual(['Zsuzsanna', 'Eliza', 'Konrád']);
});

test('tomorrow', () => {
	expect(
		tomorrow(),
	)
	.toStrictEqual(['Aladár', 'Álmos', 'Leó']);
});
