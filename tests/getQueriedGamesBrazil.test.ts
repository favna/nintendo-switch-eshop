import { getQueriedGamesBrazil } from '../src/index.js';

describe('getQueriedGamesBrazil', () => {
	test('GIVEN Zelda THEN returns results with some known games', async () => {
		const data = await getQueriedGamesBrazil('Zelda');

		expect(data).toEqual(expect.any(Object));
		expect(data.length).toBeGreaterThanOrEqual(4);

		expect(data).toEqual(
			expect.arrayContaining([
				// Expect Breath of the Wild to be in the data
				expect.objectContaining({
					title: 'The Legend of Zelda™: Breath of the Wild'
				}),
				// Expect Link's Awakening to be in the data
				expect.objectContaining({
					title: 'The Legend of Zelda™: Link’s Awakening'
				}),
				// Expect Skyward Sword HD to be in the data
				expect.objectContaining({
					title: 'The Legend of Zelda™: Skyward Sword HD'
				}),
				// Expect Cadence of Hyrule to be in the data
				expect.objectContaining({
					title: 'Cadence of Hyrule: Crypt of the NecroDancer Featuring The Legend of Zelda'
				})
			])
		);
	});
});
