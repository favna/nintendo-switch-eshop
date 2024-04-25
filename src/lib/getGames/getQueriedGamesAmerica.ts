import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { Result } from '@sapphire/result';
import {
	QUERIED_US_ALGOLIA_KEY_NEW,
	QUERIED_US_ALGOLIA_KEY_OLD,
	QUERIED_US_GET_GAMES_URL_NEW,
	QUERIED_US_GET_GAMES_URL_OLD,
	US_ALGOLIA_HEADERS
} from '../utils/constants';
import type { QueriedGameResult, QueriedGamesAmericaOptions, QueriedGameUS } from '../utils/interfaces';
import { EshopError } from '../utils/utils';

/**
 * Fetches a subset of games from the American e-shops as based on a given query
 * @param query The query to search for
 * @param __namedParameters Additional options for the [[getQueriedGamesAmerica]] call. Defaults to `{ hitsPerPage: 200, page: 0 }`
 * @returns Promise containing the first `hitsPerPage` games that match your query
 * @license Apache-2.0 Jeroen Claassens & Aura Román
 * @copyright 2021
 */
export async function getQueriedGamesAmerica(
	query: string,
	{ hitsPerPage = 200, page = 0 }: QueriedGamesAmericaOptions = { hitsPerPage: 200, page: 0 }
): Promise<QueriedGameUS[]> {
	const newGamesResult = await Result.fromAsync(
		fetch<QueriedGameResult>(
			QUERIED_US_GET_GAMES_URL_NEW,
			{
				method: 'POST',
				headers: {
					...US_ALGOLIA_HEADERS,
					'X-Algolia-API-Key': QUERIED_US_ALGOLIA_KEY_NEW
				},
				body: JSON.stringify({
					hitsPerPage,
					page,
					query
				})
			},
			FetchResultTypes.JSON
		)
	);

	if (newGamesResult.isErr() || newGamesResult.isOkAnd((v) => v.hits.length === 0)) {
		throw new EshopError(`No game results for the query "${query}"`);
	}

	const oldGamesResult = await Result.fromAsync(
		fetch<QueriedGameResult>(
			QUERIED_US_GET_GAMES_URL_OLD,
			{
				method: 'POST',
				headers: {
					...US_ALGOLIA_HEADERS,
					'X-Algolia-API-Key': QUERIED_US_ALGOLIA_KEY_OLD
				},
				body: JSON.stringify({
					hitsPerPage,
					page,
					query
				})
			},
			FetchResultTypes.JSON
		)
	);

	if (oldGamesResult.isErr() || oldGamesResult.isOkAnd((v) => v.hits.length === 0)) {
		throw new EshopError(`No game results for the query "${query}"`);
	}

	return enrichNewHitsWithOldHitData(newGamesResult.unwrap().hits, oldGamesResult.unwrap().hits);
}

function enrichNewHitsWithOldHitData(newHits: QueriedGameUS[], oldHits: QueriedGameUS[]) {
	for (const newHit of newHits) {
		const oldHitWithSameNsuid = oldHits.find((oldHit) => oldHit.nsuid === newHit.nsuid);

		if (!oldHitWithSameNsuid) continue;

		newHit.boxart = oldHitWithSameNsuid.boxart;
		newHit.developers = oldHitWithSameNsuid.developers;
		newHit.freeToStart = oldHitWithSameNsuid.freeToStart;
		newHit.generalFilters = oldHitWithSameNsuid.generalFilters;
		newHit.horizontalHeaderImage = oldHitWithSameNsuid.horizontalHeaderImage;
		newHit.howToShop = oldHitWithSameNsuid.howToShop;
		newHit.lowestPrice = oldHitWithSameNsuid.lowestPrice;
		newHit.msrp = oldHitWithSameNsuid.msrp ?? newHit.price?.regPrice;
		newHit.salePrice = oldHitWithSameNsuid.salePrice ?? newHit.price?.salePrice;
		newHit.featured = oldHitWithSameNsuid.featured ?? newHit.featuredProduct;
		newHit.lastModified = oldHitWithSameNsuid.lastModified ?? newHit.updatedAt;
		newHit.numOfPlayers = oldHitWithSameNsuid.numOfPlayers;
		newHit.playerFilters = oldHitWithSameNsuid.playerFilters;
		newHit._distinctSeqID = oldHitWithSameNsuid._distinctSeqID;
	}

	return newHits;
}
