import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { Result } from '@sapphire/result';
import { XMLParser } from 'fast-xml-parser';
import { JP_GET_GAMES_URL } from '../utils/constants.js';
import type { GameJP } from '../utils/interfaces.js';
import { EshopError } from '../utils/utils.js';

const parser = new XMLParser();

/**
 * Fetches all games on japanese eShops
 *
 * @returns Promise containing all the games
 */
export async function getGamesJapan(): Promise<GameJP[]> {
	const response = await Result.fromAsync(fetch(JP_GET_GAMES_URL, FetchResultTypes.Text));

	if (response.isErr()) {
		throw new EshopError('Fetching of JP Games failed');
	}

	const gamesJP = Result.from(() => parser.parse(response.unwrap()));

	if (gamesJP.isErr()) {
		throw new EshopError('Parsing of JP Games failed');
	}

	return gamesJP.unwrap().TitleInfoList.TitleInfo as GameJP[];
}
