/* eslint-disable jsdoc/check-param-names */
import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { Result } from '@sapphire/result';
import { BR_ALGOLIA_HEADERS, QUERIED_BR_ALGOLIA_KEY, QUERIED_BR_GET_GAMES_URL } from '../utils/constants.js';
import type { QueriedGameResult, QueriedGamesAmericaOptions, QueriedGameUS } from '../utils/interfaces.js';
import { makeURLSearchParams } from '../utils/makeURLSearchParams.js';
import { EshopError } from '../utils/utils.js';

/**
 * Fetches a subset of games from the Brazilian e-shop as based on a given query
 *
 * @param query - The query to search for
 * @param options - Additional options for the {@link getQueriedGamesBrazil} call. Defaults to `{ hitsPerPage: 200, page: 0 }`
 * @returns Promise containing the first `hitsPerPage` games that match your query
 */
export async function getQueriedGamesBrazil(
	query: string,
	// eslint-disable-next-line unicorn/no-object-as-default-parameter
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
					params: makeURLSearchParams({
						hitsPerPage,
						page,
						query
					}).toString()
				})
			},
			FetchResultTypes.JSON
		)
	);

	if (gamesResult.isErr() || gamesResult.isOkAnd((gameQueryResult) => gameQueryResult.hits.length === 0)) {
		throw new EshopError(`No game results for the query "${query}"`);
	}

	return gamesResult.unwrap().hits;
}
