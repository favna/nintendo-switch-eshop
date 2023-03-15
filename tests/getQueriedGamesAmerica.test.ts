import { getQueriedGamesAmerica } from '../src';

describe('getQueriedGamesAmerica', () => {
  test('GIVEN Zelda THEN returns results with some known games', async () => {
    const data = await getQueriedGamesAmerica('Zelda');

    expect(data).toEqual(expect.any(Object));
    expect(data.length).toBeGreaterThanOrEqual(20);

    expect(data).toEqual(
      expect.arrayContaining([
        // Expect Link's Awakening to be in the data
        expect.objectContaining({
          title: expect.stringContaining("Link's Awakening")
        }),
        // Expect Breath of the Wild to be in the data
        expect.objectContaining({
          title: expect.stringContaining('Breath of the Wild')
        }),
        // Expect Skyward Sword to be in the data
        expect.objectContaining({
          title: expect.stringContaining('Skyward Sword HD')
        })
      ])
    );
  });
});
