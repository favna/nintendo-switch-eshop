import sapphirePrettierConfig from '@sapphire/prettier-config';

export default {
	...sapphirePrettierConfig,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		...sapphirePrettierConfig.overrides,
		{
			files: ['README.md', 'documentation/docs/Guide/**/*.mdx', 'documentation/docs/Welcome.mdx'],
			options: {
				printWidth: 80,
				proseWrap: 'always'
			}
		},
		{
			files: ['*.astro'],
			options: {
				parser: 'astro'
			}
		}
	]
};
