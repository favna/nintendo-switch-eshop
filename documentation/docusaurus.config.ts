import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { convertNpmToPackageManagers } from '@sapphire/docusaurus-plugin-npm2yarn2pnpm';
import { themes } from 'prism-react-renderer';

const Description = 'Unofficial API lib for Nintendo Switch eShop game listing and pricing information.';
const Email = 'support@favware.tech';
const Title = 'Nintendo Switch Eshop API';
const BaseUrl = 'https://nintendo-switch-eshop.vercel.app';

const config: Config = {
	title: Title,
	url: BaseUrl,
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'throw',
	onDuplicateRoutes: 'throw',
	favicon: 'img/favicon.ico',
	tagline: Description,
	organizationName: 'favna',
	projectName: 'nintendo-switch-eshop',
	themes: [],
	plugins: [
		[
			'@docusaurus/plugin-pwa',
			{
				offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
				pwaHead: [
					{
						tagName: 'link',
						rel: 'icon',
						href: '/img/favicons/android-chrome-192x192.png'
					},
					{
						tagName: 'link',
						rel: 'manifest',
						href: '/pwa/manifest.webmanifest'
					},
					{
						tagName: 'meta',
						name: 'theme-color',
						content: '#F89034'
					}
				]
			}
		],
		[
			'docusaurus-plugin-typedoc',
			{
				entryPoints: ['../src/index.ts'],
				tsconfig: '../src/tsconfig.json',
				readme: 'none',
				out: 'Documentation',
				intentionallyNotExported: ['PriceError', 'PriceData'],
				excludeExternals: true,
				sidebar: {
					categoryLabel: 'Documentation',
					position: 1,
					fullNames: true
				}
			}
		]
	],

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/favna/nintendo-switch-eshop/edit/main/',
					remarkPlugins: [convertNpmToPackageManagers],
					showLastUpdateAuthor: true,
					showLastUpdateTime: true
				},
				blog: false,
				theme: {
					customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/tippy-discord.css')]
				}
			} satisfies Preset.Options
		]
	],

	themeConfig: {
		image: `${BaseUrl}/img/favicons/opengraph.png`,
		colorMode: {
			defaultMode: 'dark',
			respectPrefersColorScheme: true
		},
		metadata: [
			{ name: 'apple-mobile-web-app-capable', content: 'yes' },
			{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
			{ name: 'apple-mobile-web-app-title', content: Title },
			{ name: 'application-name', content: Title },
			{ name: 'audience', content: 'all' },
			{ name: 'author', content: `favna, ${Email}` },
			{ name: 'coverage', content: 'Worldwide' },
			{ name: 'description', content: Description },
			{ name: 'designer', content: `favna, ${Email}` },
			{ name: 'distribution', content: 'Global' },
			{ name: 'googlebot', content: 'index,follow' },
			{ name: 'HandheldFriendly', content: 'True' },
			{ name: 'identifier-URL', content: BaseUrl },
			{ name: 'keywords', content: 'eshop, switch, nintendo, crawler, lib, typescript' },
			{ name: 'msapplication-config', content: '/browserconfig.xml' },
			{ name: 'msapplication-TileColor', content: '#F89034' },
			{ name: 'msapplication-TileImage', content: '/img/favicons/mstile-144x144.png' },
			{ name: 'owner', content: `favna, ${Email}` },
			{ name: 'rating', content: 'safe for kids' },
			{ name: 'reply-to', content: Email },
			{ name: 'revisit-after', content: '7 days' },
			{ name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate' },
			{ name: 'shortlink', content: BaseUrl },
			{ name: 'subject', content: 'Documentation website for Nintendo Switch EShop' },
			{ name: 'summary', content: Description },
			{ name: 'target', content: 'all' },
			{ name: 'theme-color', content: '#F89034' },
			{ name: 'twitter:card', content: 'summary' },
			{ name: 'twitter:creator', content: '@favna_' },
			{ name: 'twitter:site', content: '@favna_' },
			{ name: 'url', content: BaseUrl },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ property: 'og:description', content: Description },
			{ property: 'og:email', content: Email },
			{ property: 'og:image:alt', content: 'OpenGraphImage' },
			{ property: 'og:image:height', content: '512' },
			{ property: 'og:image:width', content: '1024' },
			{ property: 'og:locale', content: 'en_US' },
			{ property: 'og:site_name', content: Title },
			{ property: 'og:title', content: Title },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:url', content: BaseUrl }
		],
		navbar: {
			title: 'Nintendo Switch EShop',
			logo: {
				alt: 'Nintendo Switch EShop Logo',
				src: 'img/nintendoeshop.png'
			},
			items: [
				{
					to: '/',
					label: 'Home',
					position: 'left',
					activeBaseRegex: '^/$'
				},
				{
					type: 'doc',
					docId: 'Welcome',
					label: 'Documentation',
					activeBaseRegex: '^/docs/Documentation/.+$'
				},
				{
					href: 'https://join.favware.tech',
					label: 'Discord',
					position: 'right'
				},
				{
					href: 'https://github.com/favna/nintendo-switch-eshop',
					label: 'GitHub',
					position: 'right'
				}
			]
		},
		footer: {
			style: 'dark',
			links: [],
			copyright: `Copyright © ${new Date().getFullYear()} favna & lmmfranco.`
		},
		prism: {
			defaultLanguage: 'javascript',
			additionalLanguages: ['powershell', 'batch'],
			theme: themes.github,
			darkTheme: themes.vsDark
		}
	} satisfies Preset.ThemeConfig
};

export default config;
