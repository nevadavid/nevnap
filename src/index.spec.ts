import { on, to } from './index';

test('on', () => {
	expect(on('04-22')).toBe('Csilla, Noémi');
});

test('to', () => {
	expect(to('Csilla')).toBe('04-22');
});
