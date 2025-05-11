import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { Result } from '@sapphire/result';
import { EU_DEFAULT_LOCALE, EU_GAME_LIST_LIMIT, EU_GET_GAMES_OPTIONS, EU_GET_GAMES_URL } from '../utils/constants.js';
import type { EURequestOptions, GameEU } from '../utils/interfaces.js';
import { makeURLSearchParams } from '../utils/makeURLSearchParams.js';
import { EshopError } from '../utils/utils.js';

/**
 * Fetches all games on the European, Australian or New Zealand eShops
 *
 * @remarks
 * Games from Australia / New Zealand can be limited. They are included only as much as that Nintendo assigns them properly to the PAL region
 * @param options - Request options to pass to the eShop request {@link EURequestOptions | See EURequestOptions for details}
 * @returns Promise containing all requested EU/PAL games
 */
// eslint-disable-next-line unicorn/no-object-as-default-parameter
export async function getGamesEurope(options: EURequestOptions = { limit: EU_GAME_LIST_LIMIT, locale: EU_DEFAULT_LOCALE }): Promise<GameEU[]> {
	options.limit ??= EU_GAME_LIST_LIMIT;
	options.locale ??= EU_DEFAULT_LOCALE;

	const url = new URL(EU_GET_GAMES_URL.replace('{locale}', options.locale));
	url.search = makeURLSearchParams({
		rows: options.limit,
		...EU_GET_GAMES_OPTIONS
	}).toString();

	const gamesData = await Result.fromAsync(fetch<{ response: { docs: GameEU[] } }>(url, FetchResultTypes.JSON));

	if (gamesData.isErr()) {
		throw new EshopError('Fetching of EU Games failed');
	}

	return gamesData.unwrap().response.docs;
}
