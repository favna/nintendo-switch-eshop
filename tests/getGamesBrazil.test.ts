import { getGamesBrazil } from '../src/index.js';

describe('getGamesBrazil', () => {
	test('should allow no options', async () => {
		const data = await getGamesBrazil();

		expect(data).toEqual(expect.any(Object));
		expect(data.length).toBeGreaterThanOrEqual(1_500);
	}, 60_000);
});
