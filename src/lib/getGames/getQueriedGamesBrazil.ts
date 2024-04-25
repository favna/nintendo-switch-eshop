import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { Result } from '@sapphire/result';
import { stringify } from 'querystring';
import { BR_ALGOLIA_HEADERS, QUERIED_BR_ALGOLIA_KEY, QUERIED_BR_GET_GAMES_URL } from '../utils/constants';
import type { QueriedGameResult, QueriedGamesAmericaOptions, QueriedGameUS } from '../utils/interfaces';
import { EshopError } from '../utils/utils';

/**
 * Fetches a subset of games from the Brazilian e-shop as based on a given query
 * @param query The query to search for
 * @param __namedParameters Additional options for the [[getQueriedGamesBrazil]] call. Defaults to `{ hitsPerPage: 200, page: 0 }`
 * @returns Promise containing the first `hitsPerPage` games that match your query
 * @license Apache-2.0 Jeroen Claassens & Aura Román
 * @copyright 2021
 */
export async function getQueriedGamesBrazil(
	query: string,
	{ hitsPerPage = 200, page = 0 }: QueriedGamesAmericaOptions = { hitsPerPage: 200, page: 0 }
): Promise<QueriedGameUS[]> {
	const gamesResult = await Result.fromAsync(
		fetch<QueriedGameResult>(
			QUERIED_BR_GET_GAMES_URL,
			{
				method: 'POST',
				headers: {
					...BR_ALGOLIA_HEADERS,
					'X-Algolia-API-Key': QUERIED_BR_ALGOLIA_KEY
				},
				body: JSON.stringify({
					params: stringify({
						hitsPerPage,
						page,
						query
					})
				})
			},
			FetchResultTypes.JSON
		)
	);

	if (gamesResult.isErr() || gamesResult.isOkAnd((v) => v.hits.length === 0)) {
		throw new EshopError(`No game results for the query "${query}"`);
	}

	return gamesResult.unwrap().hits;
}
