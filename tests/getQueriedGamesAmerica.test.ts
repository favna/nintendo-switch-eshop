import { getQueriedGamesAmerica } from '../src';

describe('getQueriedGamesAmerica', () => {
  test('GIVEN Zelda THEN returns results with some known games', async () => {
    const data = await getQueriedGamesAmerica('Zelda');

    expect(data).toEqual(expect.any(Object));
    expect(data.length).toBeGreaterThanOrEqual(20);

    const tearsOfTheKingdomEntry = data.find((dt) => dt.title.toLowerCase().includes('tears of the kingdom'));
    const breathOfTheWildEntry = data.find((dt) => dt.title.toLowerCase().includes('breath of the wild'));
    const skywardSwordHdEntry = data.find((dt) => dt.title.toLowerCase().includes('skyward sword hd'));

    expect(tearsOfTheKingdomEntry).toBeDefined();
    expect(breathOfTheWildEntry).toBeDefined();
    expect(skywardSwordHdEntry).toBeDefined();
  });
});
