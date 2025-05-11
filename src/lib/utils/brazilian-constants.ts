/**
 * The maximum number of entries that Nintendo lets us get in 1 request for US games
 *
 * @internal
 */
export const BR_GAME_LIST_LIMIT = 499;

/**
 * Index names for querying all games by ascending title
 *
 * @internal
 */
export const BR_INDEX_TITLE_ASC = 'ncom_game_pt_br_title_asc';

/**
 * Index names for querying all games by descending title
 *
 * @internal
 */
export const BR_INDEX_TITLE_DESC = 'ncom_game_pt_br_title_des';

/**
 * Static query parameters for facets/filters in US Algolia calls
 *
 * @internal
 */
export const BR_FACETS = JSON.stringify([
	'generalFilters',
	'platform',
	'availability',
	'genres',
	'howToShop',
	'virtualConsole',
	'franchises',
	'priceRange',
	'esrbRating',
	'playerFilters'
]);

/**
 * @internal
 */
export const BR_PLATFORM_FACET_FILTER = 'platform:Nintendo Switch';

/**
 * ESRB options for querying all games in one request
 *
 * @internal
 */
export const BR_ESRB_RATINGS_FILTERS = [
	'esrbRating:Livre',
	'esrbRating:10',
	'esrbRating:12',
	'esrbRating:14',
	'esrbRating:16',
	'esrbRating:18',
	'esrbRating:Check the rating',
	'esrbRating:L'
];

/**
 * Availability filters for querying all games in one request
 *
 *  @internal
 */
export const BR_AVAILABILITY_FILTER = [
	'availability:Pre-order',
	'availability:Coming soon',
	'availability:Available now',
	'availability:New releases'
];

/**
 * Common franchises for querying all games in one request
 *
 * @internal
 */
export const BR_COMMON_GAME_FRANCHISES = ['franchises:Mario', 'franchises:Zelda', 'franchises:Pokémon', 'franchises:Kirby'];
