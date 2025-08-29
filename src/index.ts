export { getGamesAmerica } from './lib/getGames/getGamesAmerica.js';
export { getGamesBrazil } from './lib/getGames/getGamesBrazil.js';
export { getQueriedGamesAmerica } from './lib/getGames/getQueriedGamesAmerica.js';
export { getQueriedGamesBrazil } from './lib/getGames/getQueriedGamesBrazil.js';
export { parseGameCode } from './lib/other/parseGameCode.js';
export { parseNSUID } from './lib/other/parseNSUID.js';
export {
	BR_ALGOLIA_HEADERS,
	BR_ALGOLIA_ID,
	BR_ALGOLIA_KEY,
	BR_GET_GAMES_URL,
	QUERIED_BR_ALGOLIA_KEY,
	QUERIED_BR_GET_GAMES_URL,
	QUERIED_US_ALGOLIA_KEY_NEW,
	QUERIED_US_ALGOLIA_KEY_OLD,
	QUERIED_US_GET_GAMES_URL_NEW,
	QUERIED_US_GET_GAMES_URL_OLD,
	Region,
	US_ALGOLIA_HEADERS,
	US_ALGOLIA_ID,
	US_ALGOLIA_KEY,
	US_GET_GAMES_URL
} from './lib/utils/constants.js';
export type {
	GameEU,
	GameJP,
	GameUS,
	HighlightResult,
	Nsuid,
	QueriedGameResult,
	QueriedGamesAmericaOptions,
	QueriedGameUS
} from './lib/utils/interfaces.js';
export { EshopError } from './lib/utils/utils.js';
