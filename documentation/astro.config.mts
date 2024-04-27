import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import AstroPWA from '@vite-pwa/astro';
import { defineConfig, passthroughImageService } from 'astro/config';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';

import { manifest, seoConfig } from './src/utils/seoConfig';

export default defineConfig({
	site: seoConfig.baseURL,
	integrations: [
		AstroPWA({
			mode: 'production',
			registerType: 'autoUpdate',
			manifest,
			workbox: {
				globDirectory: 'dist',
				globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'],
				navigateFallback: '/'
			},
			experimental: {
				directoryAndTrailingSlashHandler: true
			}
		}),
		starlight({
			favicon: '/favicons/favicon.ico',
			components: {
				ThemeProvider: './src/components/starlight/ThemeProvider.astro'
			},
			head: [
				{
					tag: 'meta',
					attrs: {
						httpEquiv: 'Expires',
						content: '1y'
					}
				},
				{
					tag: 'meta',
					attrs: {
						httpEquiv: 'Pragma',
						content: '1y'
					}
				},
				{
					tag: 'meta',
					attrs: {
						httpEquiv: 'Content-Type',
						content: 'text/html; charset=UTF-8'
					}
				},
				{
					tag: 'meta',
					attrs: {
						httpEquiv: 'Cache-Control',
						content: '1y'
					}
				},
				{
					tag: 'meta',
					attrs: {
						httpEquiv: 'Page-Enter',
						content: 'RevealTrans(Duration=2.0,Transition=2)'
					}
				},
				{
					tag: 'meta',
					attrs: {
						httpEquiv: 'Page-Exit',
						content: 'RevealTrans(Duration=3.0,Transition=12)'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'apple-mobile-web-app-capable',
						content: 'yes'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'apple-mobile-web-app-capable',
						content: 'yes'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'apple-mobile-web-app-status-bar-style',
						content: 'black'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'apple-mobile-web-app-title',
						content: seoConfig.siteName
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'application-name',
						content: seoConfig.siteName
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'audience',
						content: 'all'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'author',
						content: `favna, $attrs: {Email}`
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'coverage',
						content: 'Worldwide'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'description',
						content: seoConfig.description
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'designer',
						content: `favna, $attrs: {Email}`
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'distribution',
						content: 'Global'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'googlebot',
						content: 'index,follow'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'HandheldFriendly',
						content: 'True'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'identifier-URL',
						content: seoConfig.baseURL
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'keywords',
						content: 'eshop, switch, nintendo, crawler, lib, typescript'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'msapplication-config',
						content: '/browserconfig.xml'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'msapplication-TileColor',
						content: '#F89034'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'msapplication-TileImage',
						content: '/favicons/mstile-144x144.png'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'owner',
						content: `favna, $attrs: {Email}`
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'rating',
						content: 'safe for kids'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'reply-to',
						content: seoConfig.email
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'revisit-after',
						content: '7 days'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'robots',
						content: 'archive,follow,imageindex,index,odp,snippet,translate'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'shortlink',
						content: seoConfig.baseURL
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'subject',
						content: 'Documentation website for Nintendo Switch EShop'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'summary',
						content: seoConfig.description
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'target',
						content: 'all'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'theme-color',
						content: '#F89034'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: 'summary'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:creator',
						content: '@favna_'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:site',
						content: '@favna_'
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'url',
						content: seoConfig.baseURL
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'viewport',
						content: 'width=device-width, initial-scale=1'
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:description',
						content: seoConfig.description
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:email',
						content: seoConfig.email
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image:alt',
						content: 'OpenGraphImage'
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image:height',
						content: '512'
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image:width',
						content: '1024'
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:locale',
						content: 'en_US'
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:site_name',
						content: seoConfig.siteName
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:title',
						content: seoConfig.siteName
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website'
					}
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:url',
						content: seoConfig.baseURL
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'canonical',
						href: seoConfig.baseURL
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-icon',
						type: 'image/png',
						sizes: '180x180',
						href: '/favicons/apple-touch-icon.png'
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '16x16',
						href: '/favicons/favicon-16x16.png'
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '32x32',
						href: '/favicons/favicon-32x32.png'
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '192x192',
						href: '/favicons/android-chrome-192x192.png'
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '194x194',
						href: '/favicons/favicon-194x194.png'
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'mask-icon',
						type: 'image/svg',
						href: '/favicons/safari-pinned-tab.svg',
						color: '#F89034'
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'shortcut icon',
						type: 'image/ico',
						href: '/favicons/favicon.ico'
					}
				},
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-startup-image',
						type: 'image/png',
						href: '/favicons/apple-startup.png'
					}
				}
			],
			pagination: true,
			logo: {
				src: './src/assets/nintendoeshop.png',
				light: './src/assets/nintendoeshop.png',
				dark: './src/assets/nintendoeshop.png',
				alt: 'logo'
			},
			title: 'Switch eShop API Wrapper',
			social: {
				github: 'https://github.com/favna/nintendo-switch-eshop',
				twitter: 'https://twitter.com/favna_'
			},
			sidebar: [typeDocSidebarGroup],
			plugins: [
				// Generate the documentation.
				starlightTypeDoc({
					entryPoints: ['../src/index.ts'],
					tsconfig: '../src/tsconfig.json',
					pagination: true,
					sidebar: {
						label: 'Documenation'
					},
					typeDoc: {
						readme: './src/assets/readme.md',
						intentionallyNotExported: ['PriceError', 'PriceData'],
						excludeExternals: true
					}
				})
			]
		}),
		sitemap()
	],
	image: { service: passthroughImageService() }
});
