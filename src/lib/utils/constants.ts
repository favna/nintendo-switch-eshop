/* eslint-disable prefer-named-capture-group */
/**
 * Algolia ID for getting US games
 */
export const US_ALGOLIA_ID = 'U3B6GR4UA3';

/**
 * Algolia Key for getting US games
 */
export const US_ALGOLIA_KEY = 'c4da8be7fd29f0f5bfa42920b0a99dc7';

/**
 * Algolia key for getting US games with a query
 */
export const QUERIED_US_ALGOLIA_KEY_NEW = 'a29c6927638bfd8cee23993e51e721c9';

/**
 * Algolia key for getting US games with a query
 */
export const QUERIED_US_ALGOLIA_KEY_OLD = '6efbfb0f8f80defc44895018caf77504';

/**
 * URL for getting US Games
 */
export const US_GET_GAMES_URL = `https://${US_ALGOLIA_ID}-dsn.algolia.net/1/indexes/*/queries`;

/**
 * New URL for getting Queried US Games
 */
export const QUERIED_US_GET_GAMES_URL_NEW = `https://${US_ALGOLIA_ID}-dsn.algolia.net/1/indexes/store_all_products_en_us/query`;

/**
 * Old URL for getting Queried US games, this still exists and has additional properties which get merged with those from the new URL
 */
export const QUERIED_US_GET_GAMES_URL_OLD = `https://${US_ALGOLIA_ID}-dsn.algolia.net/1/indexes/ncom_game_en_us/query`;

/**
 * Request headers for US games
 *
 *  @internal
 */
export const US_ALGOLIA_HEADERS = {
	'Content-Type': 'application/json',
	'X-Algolia-API-Key': US_ALGOLIA_KEY,
	'X-Algolia-Application-Id': US_ALGOLIA_ID
};

/**
 * Regex for EU game codes
 *
 * @internal
 */
export const EU_GAME_CODE_REGEX = /HAC\w(\w{4})/;

/**
 * Regex for JP game codes
 *
 * @internal
 */
export const JP_GAME_CODE_REGEX = /HAC(\w{4})/;

/**
 * Regex for JP NSUID
 *
 * @internal
 */
export const JP_NSUID_REGEX = /\d{14}/;

/**
 * Algolia ID for getting BR games
 */
export const BR_ALGOLIA_ID = 'U3B6GR4UA3';

/**
 * Algolia Key for getting US games
 */
export const BR_ALGOLIA_KEY = 'c4da8be7fd29f0f5bfa42920b0a99dc7';

/**
 * Algolia key for getting BR games with a query
 */
export const QUERIED_BR_ALGOLIA_KEY = 'c4da8be7fd29f0f5bfa42920b0a99dc7';

/**
 * URL for getting BR Games
 */
export const BR_GET_GAMES_URL = `https://${BR_ALGOLIA_ID}-dsn.algolia.net/1/indexes/*/queries`;

/**
 * URL for getting Queried BR Games
 */
export const QUERIED_BR_GET_GAMES_URL = `https://${BR_ALGOLIA_ID}-dsn.algolia.net/1/indexes/ncom_game_pt_br/query`;

/**
 * Request headers for BR games
 *
 * @internal
 */
export const BR_ALGOLIA_HEADERS = {
	'Content-Type': 'application/json',
	'X-Algolia-API-Key': BR_ALGOLIA_KEY,
	'X-Algolia-Application-Id': BR_ALGOLIA_ID
};

/**
 * Predefined options for the unit system
 */
export const enum Region {
	AMERICAS = 1,
	EUROPE = 2,
	ASIA = 3
}
