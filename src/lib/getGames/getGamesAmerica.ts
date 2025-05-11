import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { Result } from '@sapphire/result';
import { US_ALGOLIA_HEADERS, US_GET_GAMES_URL } from '../utils/constants.js';
import type { AlgoliaResponse, GameUS } from '../utils/interfaces.js';
import { makeURLSearchParams } from '../utils/makeURLSearchParams.js';
import {
	US_AVAILABILITY_FILTER,
	US_COMMON_GAME_FRANCHISES,
	US_ESRB_RATINGS_FILTERS,
	US_FACETS,
	US_GAME_LIST_LIMIT,
	US_INDEX_TITLE_ASC,
	US_INDEX_TITLE_DESC,
	US_PLATFORM_FACET_FILTER
} from '../utils/usa-constants.js';
import { arrayRemoveDuplicates, EshopError } from '../utils/utils.js';

/**
 * Fetches all games on american e-shops
 *
 * Currently ONLY returns all games in the e-shop
 *
 * @returns Promise containing all the games
 */
export async function getGamesAmerica(): Promise<GameUS[]> {
	const page = 0;

	const baseParameters: Omit<ParamsObject, 'facetFilters'> = {
		hitsPerPage: US_GAME_LIST_LIMIT,
		page,
		analytics: false,
		facets: US_FACETS
	};

	const requests: Request[] = [];

	for (const rating of US_ESRB_RATINGS_FILTERS) {
		requests.push(
			{
				indexName: US_INDEX_TITLE_ASC,
				params: makeURLSearchParams({ ...baseParameters, facetFilters: `[["${rating}"],["${US_PLATFORM_FACET_FILTER}"]]` }).toString()
			},
			{
				indexName: US_INDEX_TITLE_DESC,
				params: makeURLSearchParams({ ...baseParameters, facetFilters: `[["${rating}"],["${US_PLATFORM_FACET_FILTER}"]]` }).toString()
			}
		);
	}

	for (const rating of US_AVAILABILITY_FILTER) {
		requests.push(
			{
				indexName: US_INDEX_TITLE_ASC,
				params: makeURLSearchParams({ ...baseParameters, facetFilters: `[["${rating}"],["${US_PLATFORM_FACET_FILTER}"]]` }).toString()
			},
			{
				indexName: US_INDEX_TITLE_DESC,
				params: makeURLSearchParams({ ...baseParameters, facetFilters: `[["${rating}"],["${US_PLATFORM_FACET_FILTER}"]]` }).toString()
			}
		);
	}

	for (const rating of US_COMMON_GAME_FRANCHISES) {
		requests.push(
			{
				indexName: US_INDEX_TITLE_ASC,
				params: makeURLSearchParams({ ...baseParameters, facetFilters: `[["${rating}"],["${US_PLATFORM_FACET_FILTER}"]]` }).toString()
			},
			{
				indexName: US_INDEX_TITLE_DESC,
				params: makeURLSearchParams({ ...baseParameters, facetFilters: `[["${rating}"],["${US_PLATFORM_FACET_FILTER}"]]` }).toString()
			}
		);
	}

	const requestOptions = {
		body: JSON.stringify({
			requests
		}),
		method: 'POST',
		headers: US_ALGOLIA_HEADERS
	};

	const gamesResponse = await Result.fromAsync(fetch<AlgoliaResponse>(US_GET_GAMES_URL, requestOptions, FetchResultTypes.JSON));

	if (gamesResponse.isErr()) {
		throw new EshopError('Fetching of US Games failed');
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
