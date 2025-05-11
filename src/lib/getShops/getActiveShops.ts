import type { EShop } from '../utils/interfaces.js';
import { getShopsAmerica } from './getShopsAmerica.js';
import { getShopsAsia } from './getShopsAsia.js';
import { getShopsEurope } from './getShopsEurope.js';

/**
 * Gets all active eShops.
 *
 * @remarks
 * This method will launch several requests at nintendo web services, so don't abuse it.
 * @returns A list of shop objects with country code, name and default currency.
 */
export async function getActiveShops(): Promise<EShop[]> {
	const shopsAmerica = await getShopsAmerica();
	const shopsAsia = await getShopsAsia();
	const shopsEurope = await getShopsEurope();

	return shopsAmerica.concat(shopsAsia, shopsEurope);
}
