import sapphirePrettierConfig from '@sapphire/prettier-config';

export default {
	...sapphirePrettierConfig,
	overrides: [
		...sapphirePrettierConfig.overrides,
		{
			files: ['README.md', 'documentation/docs/Guide/**/*.mdx', 'documentation/docs/Welcome.mdx'],
			options: {
				tabWidth: 2,
				useTabs: false,
				printWidth: 120,
				proseWrap: 'always'
			}
		}
	]
};
