import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { Result } from '@sapphire/result';
import { stringify } from 'querystring';
import { PRICE_GET_OPTIONS, PRICE_GET_URL, PRICE_LIST_LIMIT } from '../utils/constants';
import type { PriceResponse, TitleData } from '../utils/interfaces';
import { EshopError } from '../utils/utils';

/**
 * Gets pricing information for the requested games. Paginates every 50 games.
 *
 * @param country A two digit country code. (ISO 3166-1 alpha-2 country code)
 * @param gameIds One or more NSUID of the corresponding games.
 * @param offset _(Optional)_ The offset to start at
 * @param prices _(Optional)_ An array of {@link TitleData}
 * @returns A promise containing the pricing information.
 */
export async function getPrices(country: string, gameIds: string[] | string, offset = 0, prices: TitleData[] = []): Promise<PriceResponse> {
	const filteredIds = gameIds.slice(offset, offset + PRICE_LIST_LIMIT);
	const response = await Result.fromAsync(
		fetch<PriceResponse>(
			`${PRICE_GET_URL}?${stringify({
				country,
				ids: filteredIds,
				limit: PRICE_LIST_LIMIT,
				...PRICE_GET_OPTIONS
			})}`,
			FetchResultTypes.JSON
		)
	);

	if (response.isErr()) {
		throw new EshopError('Fetching of eShop prices failed');
	}

	const unwrappedResponse = response.unwrap();

	if (unwrappedResponse.prices && unwrappedResponse.prices.length + offset < gameIds.length) {
		const accumulatedPrices = prices.concat(unwrappedResponse.prices);

		return getPrices(country, gameIds, offset + PRICE_LIST_LIMIT, accumulatedPrices);
	} else if (unwrappedResponse.prices) {
		unwrappedResponse.prices = unwrappedResponse.prices.concat(prices);

		return unwrappedResponse;
	}

	return unwrappedResponse;
}
