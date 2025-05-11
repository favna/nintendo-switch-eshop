import { getGamesJapan } from '../src/index.js';

test('getGamesJapan', async () => {
	const games = await getGamesJapan();

	expect(games).toEqual(expect.any(Object));
}, 60_000);
