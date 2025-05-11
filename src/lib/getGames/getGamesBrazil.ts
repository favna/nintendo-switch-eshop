import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { Result } from '@sapphire/result';
import {
	BR_AVAILABILITY_FILTER,
	BR_COMMON_GAME_FRANCHISES,
	BR_ESRB_RATINGS_FILTERS,
	BR_FACETS,
	BR_GAME_LIST_LIMIT,
	BR_INDEX_TITLE_ASC,
	BR_INDEX_TITLE_DESC,
	BR_PLATFORM_FACET_FILTER
} from '../utils/brazilian-constants.js';
import { BR_ALGOLIA_HEADERS, BR_GET_GAMES_URL } from '../utils/constants.js';
import type { AlgoliaResponse, GameUS } from '../utils/interfaces.js';
import { makeURLSearchParams } from '../utils/makeURLSearchParams.js';
import { arrayRemoveDuplicates, EshopError } from '../utils/utils.js';

/**
 * Fetches all games on brazilian e-shop
 *
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
				params: makeURLSearchParams({ ...baseParameters, facetFilters: `[["${rating}"],["${BR_PLATFORM_FACET_FILTER}"]]` }).toString()
			},
			{
				indexName: BR_INDEX_TITLE_DESC,
				params: makeURLSearchParams({ ...baseParameters, facetFilters: `[["${rating}"],["${BR_PLATFORM_FACET_FILTER}"]]` }).toString()
			}
		);
	}

	for (const rating of BR_AVAILABILITY_FILTER) {
		requests.push(
			{
				indexName: BR_INDEX_TITLE_ASC,
				params: makeURLSearchParams({ ...baseParameters, facetFilters: `[["${rating}"],["${BR_PLATFORM_FACET_FILTER}"]]` }).toString()
			},
			{
				indexName: BR_INDEX_TITLE_DESC,
				params: makeURLSearchParams({ ...baseParameters, facetFilters: `[["${rating}"],["${BR_PLATFORM_FACET_FILTER}"]]` }).toString()
			}
		);
	}

	for (const rating of BR_COMMON_GAME_FRANCHISES) {
		requests.push(
			{
				indexName: BR_INDEX_TITLE_ASC,
				params: makeURLSearchParams({ ...baseParameters, facetFilters: `[["${rating}"],["${BR_PLATFORM_FACET_FILTER}"]]` }).toString()
			},
			{
				indexName: BR_INDEX_TITLE_DESC,
				params: makeURLSearchParams({ ...baseParameters, facetFilters: `[["${rating}"],["${BR_PLATFORM_FACET_FILTER}"]]` }).toString()
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
	analytics: boolean;
	facetFilters: string;
	facets: string;
	hitsPerPage: number;
	page: number;
}
