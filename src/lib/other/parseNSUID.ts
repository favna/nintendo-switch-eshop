import { JP_NSUID_REGEX, Region } from '../utils/constants.js';
import type { GameEU, GameJP, GameUS } from '../utils/interfaces.js';

/**
 * Extracts NSUID information from the game object.
 *
 * @param game - The game object returned from one of the other methods.
 * @param region - Region code
 * @returns The 14-digits NSUID
 */
export function parseNSUID(game: GameEU | GameJP | GameUS, region: Region): string | null {
	// eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
	switch (region) {
		case Region.EUROPE:
			return (game as GameEU).nsuid_txt ? (game as GameEU).nsuid_txt[0] : null;
		case Region.ASIA:
			// eslint-disable-next-line no-case-declarations
			const nsuidParse = JP_NSUID_REGEX.exec((game as GameJP).LinkURL);

			return nsuidParse && nsuidParse.length > 0 ? nsuidParse[0] : null;
		default:
			return (game as GameUS).nsuid;
	}
}
