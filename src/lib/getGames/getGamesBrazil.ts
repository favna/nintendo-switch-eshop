import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { Result } from '@sapphire/result';
import { stringify } from 'querystring';
import { BR_ALGOLIA_HEADERS, BR_GET_GAMES_URL } from '../utils/constants';
import type { AlgoliaResponse, GameUS } from '../utils/interfaces';
import { arrayRemoveDuplicates, EshopError } from '../utils/utils';

/**
 * Fetches all games on brazilian e-shop
 *
 * @remarks
 * Currently ONLY returns all games in the e-shop
 *
 * @returns Promise containing all the games
 */
export async function getGamesBrazil(): Promise<GameUS[]> {
	const page = 0;

	const baseParameters: Omit<ParamsObject, 'facetFilters'> = {
		hitsPerPage: BR_GAME_LIST_LIMIT,
		page,
		analytics: false,
		facets: BR_FACETS
	};

	const requests: Request[] = [];

	for (const rating of BR_ESRB_RATINGS_FILTERS) {
		requests.push(
			{
				indexName: BR_INDEX_TITLE_ASC,
				params: stringify({ ...baseParameters, facetFilters: `[["${rating}"],["${BR_PLATFORM_FACET_FILTER}"]]` })
			},
			{
				indexName: BR_INDEX_TITLE_DESC,
				params: stringify({ ...baseParameters, facetFilters: `[["${rating}"],["${BR_PLATFORM_FACET_FILTER}"]]` })
			}
		);
	}

	for (const rating of BR_AVAILABILITY_FILTER) {
		requests.push(
			{
				indexName: BR_INDEX_TITLE_ASC,
				params: stringify({ ...baseParameters, facetFilters: `[["${rating}"],["${BR_PLATFORM_FACET_FILTER}"]]` })
			},
			{
				indexName: BR_INDEX_TITLE_DESC,
				params: stringify({ ...baseParameters, facetFilters: `[["${rating}"],["${BR_PLATFORM_FACET_FILTER}"]]` })
			}
		);
	}

	for (const rating of BR_COMMON_GAME_FRANCHISES) {
		requests.push(
			{
				indexName: BR_INDEX_TITLE_ASC,
				params: stringify({ ...baseParameters, facetFilters: `[["${rating}"],["${BR_PLATFORM_FACET_FILTER}"]]` })
			},
			{
				indexName: BR_INDEX_TITLE_DESC,
				params: stringify({ ...baseParameters, facetFilters: `[["${rating}"],["${BR_PLATFORM_FACET_FILTER}"]]` })
			}
		);
	}

	const requestOptions = {
		body: JSON.stringify({
			requests
		}),
		method: 'POST',
		headers: BR_ALGOLIA_HEADERS
	};

	const gamesResponse = await Result.fromAsync(fetch<AlgoliaResponse>(BR_GET_GAMES_URL, requestOptions, FetchResultTypes.JSON));

	if (gamesResponse.isErr()) {
		throw new EshopError('Fetching of BR Games failed');
	}

	let allGames: any[] | PromiseLike<GameUS[]> = [];
	for (const results of gamesResponse.unwrap().results) {
		allGames = allGames.concat(results.hits);
	}

	allGames = arrayRemoveDuplicates(allGames, 'slug');
	return allGames;
}

interface Request {
	indexName: string;
	params: string;
}

interface ParamsObject {
	hitsPerPage: number;
	page: number;
	analytics: boolean;
	facets: string;
	facetFilters: string;
}

/** @internal The maximum number of entries that Nintendo lets us get in 1 request for US games */
const BR_GAME_LIST_LIMIT = 499;

/** @internal Index names for querying all games by ascending title */
const BR_INDEX_TITLE_ASC = 'ncom_game_pt_br_title_asc';

/** @internal Index names for querying all games by descending title */
const BR_INDEX_TITLE_DESC = 'ncom_game_pt_br_title_des';

/** @internal Static query parameters for facets/filters in US Algolia calls */
const BR_FACETS = JSON.stringify([
	'generalFilters',
	'platform',
	'availability',
	'genres',
	'howToShop',
	'virtualConsole',
	'franchises',
	'priceRange',
	'esrbRating',
	'playerFilters'
]);

/** @internal */
const BR_PLATFORM_FACET_FILTER = 'platform:Nintendo Switch';

/** @internal ESRB options for querying all games in one request */
const BR_ESRB_RATINGS_FILTERS = [
	'esrbRating:Livre',
	'esrbRating:10',
	'esrbRating:12',
	'esrbRating:14',
	'esrbRating:16',
	'esrbRating:18',
	'esrbRating:Check the rating',
	'esrbRating:L'
];

/** @internal Availability filters for querying all games in one request */
const BR_AVAILABILITY_FILTER = ['availability:Pre-order', 'availability:Coming soon', 'availability:Available now', 'availability:New releases'];

/** @internal Common franchises for querying all games in one request */
const BR_COMMON_GAME_FRANCHISES = ['franchises:Mario', 'franchises:Zelda', 'franchises:Pokémon', 'franchises:Kirby'];
