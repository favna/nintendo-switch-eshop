import { getPrices } from '../src/index.js';
import { PRICE_LIST_LIMIT, US_GAME_CHECK_CODE } from '../src/lib/utils/constants.js';

describe('getPrices', () => {
	test('getPrices', async () => {
		const expectedReturn = {
			country: 'US',
			personalized: false,
			prices: [
				{
					regular_price: { amount: '$39.99', currency: 'USD', raw_value: '39.99' },
					sales_status: 'onsale',
					title_id: 70_010_000_000_185
				}
			]
		};
		const data = await getPrices('US', US_GAME_CHECK_CODE);
		expect(data).toEqual(expect.any(Object));
		expect(data).toMatchObject(expectedReturn);
	});

	test('getPrices with offset', async () => {
		const expectedReturn = {
			country: 'US',
			personalized: false,
			prices: []
		};
		const data = await getPrices('US', US_GAME_CHECK_CODE, PRICE_LIST_LIMIT);
		expect(data).toEqual(expect.any(Object));
		expect(data).toMatchObject(expectedReturn);
	});
});
