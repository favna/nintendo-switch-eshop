import { getQueriedGamesAmerica } from '../../src';

describe('Sale price for The Wardrobe Even Better Edition', () => {
  test('GIVEN query THEN returns results with a sale price', async () => {
    const data = await getQueriedGamesAmerica('The Wardrobe: Even Better Edition');

    expect(data).toEqual(expect.any(Object));
    expect(data.length).toBeGreaterThanOrEqual(1);

    const zerothEntry = data.at(0);
    expect(zerothEntry).toBeDefined();

    expect(zerothEntry!.price).toEqual(expect.any(Object));
  });
});
