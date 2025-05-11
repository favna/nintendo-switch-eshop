import { parseGameCode, Region } from '../src/index.js';
import { EUROPEAN_GAME, JAPANESE_GAME } from './testUtils.js';

describe('Success: parseGameCode', () => {
	test('Region == ASIA', () => {
		const data = parseGameCode(JAPANESE_GAME, Region.ASIA);
		expect(typeof data).toBe('string');
		expect(data).toBe('ATBC');
	});

	test('Region == Europe', () => {
		const data = parseGameCode(EUROPEAN_GAME, Region.EUROPE);
		expect(typeof data).toBe('string');
		expect(data).toHaveLength(4);
		expect(data).toBe('2345');
	});
});
