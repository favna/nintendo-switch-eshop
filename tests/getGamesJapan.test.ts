import { getGamesJapan } from '../src';

test('getGamesJapan', async () => {
	const games = await getGamesJapan();

	expect(games).toEqual(expect.any(Object));
}, 60000);
