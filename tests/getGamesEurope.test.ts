import { getGamesEurope } from '../src';

test('getGamesEurope', async () => {
	const data = await getGamesEurope({ locale: 'en', limit: 1 });
	expect(data).toEqual(expect.any(Object));
	expect(data).toHaveLength(1);
});
