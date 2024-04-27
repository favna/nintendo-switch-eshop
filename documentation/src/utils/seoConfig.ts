import type { ManifestOptions } from 'vite-plugin-pwa';

const description = 'Unofficial API lib for Nintendo Switch eShop game listing and pricing information.';
const email = 'support@favware.tech';
const title = 'Nintendo Switch Eshop API';

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: 'https://nintendo-switch-eshop.pages.dev',
	description,
	email,
	type: 'website',
	image: {
		url: '/favicons/opengraph.png',
		alt: 'OpenGraph image',
		width: 1024,
		height: 512
	},
	siteName: title,
	twitter: {
		card: 'summary_large_image',
		handle: '@Favna_'
	}
};

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: title,
	short_name: title,
	description,
	theme_color: '#F89034',
	background_color: '#131516',
	display: 'minimal-ui',
	categories: ['eshop', 'switch', 'nintendo', 'crawler', 'lib', 'typescript'],
	dir: 'ltr',
	lang: 'en_US',
	orientation: 'portrait-primary',
	scope: '/',
	start_url: '/',
	icons: [
		{
			src: '/favicons/android-chrome-36x36.png',
			sizes: '36x36',
			type: 'image/png'
		},
		{
			src: '/favicons/android-chrome-48x48.png',
			sizes: '48x48',
			type: 'image/png'
		},
		{
			src: '/favicons/android-chrome-72x72.png',
			sizes: '72x72',
			type: 'image/png'
		},
		{
			src: '/favicons/android-chrome-96x96.png',
			sizes: '96x96',
			type: 'image/png'
		},
		{
			src: '/favicons/android-chrome-144x144.png',
			sizes: '144x144',
			type: 'image/png'
		},
		{
			src: '/favicons/android-chrome-192x192.png',
			sizes: '192x192',
			type: 'image/png'
		},
		{
			src: '/favicons/android-chrome-256x256.png',
			sizes: '256x256',
			type: 'image/png'
		},
		{
			src: '/favicons/android-chrome-384x384.png',
			sizes: '384x384',
			type: 'image/png'
		}
	],
	shortcuts: [
		{
			name: 'Nintendo Switch EShop API',
			short_name: 'Homepage',
			description: 'Go to Nintendo Switch EShop API website',
			url: '/',
			icons: [
				{
					src: '/favicons/android-chrome-96x96.png',
					sizes: '96x96',
					type: 'image/png'
				}
			]
		}
	],
	screenshots: [
		{
			src: '/screenshots/pwa-desktop.png',
			sizes: '1200x710',
			type: 'image/png',
			form_factor: 'wide',
			label: 'Nintendo Switch eShop API Wrapper'
		},
		{
			src: '/screenshots/pwa-mobile.png',
			sizes: '480x640',
			type: 'image/png',
			form_factor: 'narrow',
			label: 'Nintendo Switch eShop API Wrapper'
		}
	]
};
