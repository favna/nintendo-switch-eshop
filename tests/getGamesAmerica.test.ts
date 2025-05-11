import { getGamesAmerica } from '../src/index.js';

describe('getGamesAmerica', () => {
	test('should allow no options', async () => {
		const data = await getGamesAmerica();

		expect(data).toEqual(expect.any(Object));
		expect(data.length).toBeGreaterThanOrEqual(1_500);
	}, 60_000);
});
