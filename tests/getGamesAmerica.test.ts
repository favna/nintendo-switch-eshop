import { getGamesAmerica } from '../src';

describe('getGamesAmerica', () => {
	test('should allow no options', async () => {
		const data = await getGamesAmerica();

		expect(data).toEqual(expect.any(Object));
		expect(data.length).toBeGreaterThanOrEqual(1500);
	}, 60000);
});
