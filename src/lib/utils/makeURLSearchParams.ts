/**
 * Serializes a value to a string, or returns null if it cannot be serialized.
 *
 * @param value - The value to serialize
 * @returns The serialized value, or null if it cannot be serialized
 * Retrieved on 2024-04-27 from https://github.com/discordjs/discord.js/blob/4ad285804bfd72b157139dde61c3fd8ac2544322/packages/rest/src/lib/utils/utils.ts#L8-L47
 */
function serializeSearchParam(value: unknown): string | null {
	// eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
	switch (typeof value) {
		case 'string':
			return value;
		case 'number':
		case 'bigint':
		case 'boolean':
			return value.toString();
		case 'object':
			if (value === null) return null;
			if (value instanceof Date) {
				return Number.isNaN(value.getTime()) ? null : value.toISOString();
			}

			// eslint-disable-next-line @typescript-eslint/no-base-to-string
			if (typeof value.toString === 'function' && value.toString !== Object.prototype.toString) return value.toString();
			return null;
		default:
			return null;
	}
}

/**
 * Creates and populates an URLSearchParams instance from an object, stripping
 * out null and undefined values, while also coercing non-strings to strings.
 *
 * @param options - The options to use
 * @returns A populated URLSearchParams instance
 * Retrieved on 2024-04-27 from https://github.com/discordjs/discord.js/blob/4ad285804bfd72b157139dde61c3fd8ac2544322/packages/rest/src/lib/utils/utils.ts#L8-L47
 */
export function makeURLSearchParams<OptionsType extends object>(options?: Readonly<OptionsType>) {
	const params = new URLSearchParams();
	if (!options) return params;

	for (const [key, value] of Object.entries(options)) {
		const serialized = serializeSearchParam(value);
		if (serialized !== null) params.append(key, serialized);
	}

	return params;
}
