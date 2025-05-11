import { Result } from '@sapphire/result';
import { countries, type Country } from 'country-data';
import type { Region } from '../utils/constants.js';
import type { EShop, PriceResponse } from '../utils/interfaces.js';
import { getPrices } from './getPrices.js';

/**
 * Gets all active eShops given a list of countries.
 *
 * @param countryCodes - A list of 2 digit country codes for every country eShop to lookup. (ISO 3166-1 alpha-2 country codes)
 * @param gameCode - A 14 digits game NSUID from the desired region.
 * @param region - A region id that will be appended in the final shop object for filtering purposes.
 * @returns A list of shop objects with country code, name and default currency.
 */
export async function getShopsByCountryCodes(countryCodes: string[], gameCode: string, region: Region): Promise<EShop[]> {
	const countryList: (Country | undefined)[] = countryCodes.map((code: string) =>
		countries.all.find((country: Country) => country.alpha2 === code)
	);
	const shops: PriceResponse[] = [];

	for (const country of countryList) {
		if (!country) {
			continue;
		}

		const response = await Result.fromAsync(getPrices(country.alpha2, gameCode));

		if (response.isErr()) {
			continue;
		}

		const unwrappedResponse = response.unwrap();
		unwrappedResponse.country = country;
		shops.push(unwrappedResponse);
	}

	const activeShops = shops.filter((shop: PriceResponse) => shop?.prices?.length && shop.prices[0].regular_price);
	const eShops = activeShops.map((shop: PriceResponse) => ({
		code: shop.country.alpha2,
		country: shop.country.name,
		currency: shop.prices[0].regular_price.currency,
		region
	}));

	if (!eShops.length) throw new Error('ACTIVE_SHOPS_Rate_Limit');

	return eShops;
}
