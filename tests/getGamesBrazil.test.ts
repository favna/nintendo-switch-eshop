import { getGamesBrazil } from '../src';

describe('getGamesBrazil', () => {
	test('should allow no options', async () => {
		const data = await getGamesBrazil();

		expect(data).toEqual(expect.any(Object));
		expect(data.length).toBeGreaterThanOrEqual(1500);
	}, 60000);
});
