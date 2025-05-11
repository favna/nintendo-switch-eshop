import { regions } from 'country-data';
import { getShopsByCountryCodes } from '../other/getShopByCountryCode.js';
import { JP_GAME_CHECK_CODE, Region } from '../utils/constants.js';
import type { EShop } from '../utils/interfaces.js';

/**
 * Gets all active eShops on Asian countries
 *
 * @remarks
 * This method will launch several requests at nintendo web services, so don't abuse it.
 * @returns A list of shop objects with country code, name and default currency.
 */
export async function getShopsAsia(): Promise<EShop[]> {
	return getShopsByCountryCodes(
		regions.southernAsia.countries.concat(
			regions.southernAsia.countries,
			regions.southeastAsia.countries,
			regions.eastAsia.countries,
			regions.westernAsia.countries
		),
		JP_GAME_CHECK_CODE,
		Region.ASIA
	);
}
