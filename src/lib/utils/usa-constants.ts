/**
 *  The maximum number of entries that Nintendo lets us get in 1 request for US games
 *
 *  @internal
 */
export const US_GAME_LIST_LIMIT = 1_000;

/**
 *  Index names for querying all games by ascending title
 *
 *  @internal
 */
export const US_INDEX_TITLE_ASC = 'ncom_game_en_us_title_asc';

/**
 *  Index names for querying all games by descending title
 *
 *  @internal
 */
export const US_INDEX_TITLE_DESC = 'ncom_game_en_us_title_des';

/**
 *  Static query parameters for facets/filters in US Algolia calls
 *
 *  @internal
 */
export const US_FACETS = JSON.stringify([
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
 *  @internal
 */
export const US_PLATFORM_FACET_FILTER = 'platform:Nintendo Switch';

/**
 *  ESRB options for querying all games in one request
 *
 *  @internal
 */
export const US_ESRB_RATINGS_FILTERS = ['esrbRating:Everyone', 'esrbRating:Everyone 10+', 'esrbRating:Teen', 'esrbRating:Mature'];

/**
 *  Availability filters for querying all games in one request
 *
 *  @internal
 */
export const US_AVAILABILITY_FILTER = ['availability:Pre-order', 'availability:Coming soon', 'availability:Available now'];

/**
 *  Common franchises for querying all games in one request
 *
 *  @internal
 */
export const US_COMMON_GAME_FRANCHISES = ['franchises:Mario', 'franchises:Zelda', 'franchises:Pokémon', 'franchises:Kirby'];
