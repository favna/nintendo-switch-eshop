# Changelog

All notable changes to this project will be documented in this file.

# [8.0.1](https://github.com/favna/nintendo-switch-eshop/compare/v8.0.0...v8.0.1) - (2025-05-11)

## 🏠 Refactor

- Update linting and formatting of repo ([977c038](https://github.com/favna/nintendo-switch-eshop/commit/977c038fb9374bc80b613873350fecd8b6474e12))

## 🐛 Bug Fixes

- Resolve issues with EU api ([a8b3c79](https://github.com/favna/nintendo-switch-eshop/commit/a8b3c79890840cff20b8b8e5a2761002e6422442))

## 📝 Documentation

- Fix astro base url ([89931ed](https://github.com/favna/nintendo-switch-eshop/commit/89931ed8aaf288110e30fb13668bed1d9b20330d))
- Fix astro base url ([dfe2e37](https://github.com/favna/nintendo-switch-eshop/commit/dfe2e3724d395847a8c343b5a2bbdb825f101681))
- Update url to new page ([03e4a00](https://github.com/favna/nintendo-switch-eshop/commit/03e4a00567d4de3ba74a1663de2428d5c9a93276))
- Add workflow to publish the docs ([1d938c1](https://github.com/favna/nintendo-switch-eshop/commit/1d938c1dd1377d5b90d87e8af89606bd6b2ff534))
- Resolve issues with astro docs ([d84c97e](https://github.com/favna/nintendo-switch-eshop/commit/d84c97e25736afd3c0f56f09eee61eb9fe056259))

# [8.0.0](https://github.com/favna/nintendo-switch-eshop/compare/v7.1.3...v8.0.0) - (2024-04-29)

## 🏠 Refactor

- Do not use `querystring` node internal for better browser bundle ([0d01ac0](https://github.com/favna/nintendo-switch-eshop/commit/0d01ac01036330a469286e55f3f59fadafbd6a26))
- Rework repository, update whole stack ([a26b37b](https://github.com/favna/nintendo-switch-eshop/commit/a26b37b9f24b4889dab47623883a6686955bff75))

## 🐛 Bug Fixes

- Configure package for proper bundle exports ([7e1c1df](https://github.com/favna/nintendo-switch-eshop/commit/7e1c1df147b1f9067aea692f9d4dd56664ae35c8))

## 📝 Documentation

- Migrate to astro (#33) ([0f5d2c8](https://github.com/favna/nintendo-switch-eshop/commit/0f5d2c8b1fe949a8fc2ca5d21e2db46ffc61a2a1))

## 🚀 Features

- Ensure proper CJS and ESM bundles and add IIFE bundle ([3d009bc](https://github.com/favna/nintendo-switch-eshop/commit/3d009bc807d142a482be3d21ff79bc156dcebac9))
- Drop default export of `getGamesAmerica` ([9b93ed9](https://github.com/favna/nintendo-switch-eshop/commit/9b93ed9a8f7738294f37438420868e9f49c62418))
  - 💥 **BREAKING CHANGE:** `getGamesAmerica` is no longer default exported. Use a named import instead.

# [7.1.3](https://github.com/favna/nintendo-switch-eshop/compare/v7.1.2...v7.1.3) - (2023-04-13)

## 🏠 Refactor

- Use named functions for exported functions ([8ca9ba8](https://github.com/favna/nintendo-switch-eshop/commit/8ca9ba83eec51f901129f2ee02ed7e92983b5f13))

## 🐛 Bug Fixes

- Throw an error when `parseGameCode` is called for American games ([f36900d](https://github.com/favna/nintendo-switch-eshop/commit/f36900dad8da52c7d740bcba725fbb61f9b04f76))
- Update build stack (#13) ([12816d1](https://github.com/favna/nintendo-switch-eshop/commit/12816d10e7d7e1e842f01ccdad804f7550a75016))

## 📝 Documentation

- **readme:** Update contributing ([1d02690](https://github.com/favna/nintendo-switch-eshop/commit/1d0269014ec6a850376db7ae05a3a0a64ec6378b))

# [7.1.2](https://github.com/favna/nintendo-switch-eshop/compare/v7.1.1...v7.1.2) - (2022-08-21)

## 🏠 Refactor

- Optimize `getGamesJapan` ([70c61cd](https://github.com/favna/nintendo-switch-eshop/commit/70c61cd3594643f379e49385b079942af50e81fa))
- Switch to @sapphire/result for error handling ([2a1f845](https://github.com/favna/nintendo-switch-eshop/commit/2a1f845411700d07f53fb0f5620b2da3cc9ecab0))

## 🐛 Bug Fixes

- Fixed `getQueriedGamesAmerica` not returning sale prices ([a428502](https://github.com/favna/nintendo-switch-eshop/commit/a42850208cb401918cf6752ba6014a8f5375f6d5))

## 🧪 Testing

- Use `expect.any` for Object checks ([b782ea7](https://github.com/favna/nintendo-switch-eshop/commit/b782ea73525368ecaa230ea64b9fb199cc0141fd))

# [7.1.1](https://github.com/favna/nintendo-switch-eshop/compare/v7.1.0...v7.1.1) - (2022-08-15)

## 🐛 Bug Fixes

- **getQueriesGamesAmerica:** Fetch both the old and new Algolia indices and merge data to ensure all available data is returned ([df1a806](https://github.com/favna/nintendo-switch-eshop/commit/df1a8069db4c3144dc0d9e1b9af85dd9b0629e3b))

## 📝 Documentation

- Update docusaurus setup ([ef3d13a](https://github.com/favna/nintendo-switch-eshop/commit/ef3d13ab4f52c559f5d3ccd56b7e70ccc32fa527))
- Fix welcome install command ([22ff98d](https://github.com/favna/nintendo-switch-eshop/commit/22ff98d669735d689278bb2fa78c0226a413a988))
- Update license header for `getQueriedGamesBrazil` and `getQueriedGamesAmerica` ([0746f6d](https://github.com/favna/nintendo-switch-eshop/commit/0746f6d0976a54835171980e26f3d1e055aac555))

## 🧪 Testing

- Migrate to vitest ([4ceb03a](https://github.com/favna/nintendo-switch-eshop/commit/4ceb03a8dcad2927cec01ec38eaa697fd87e5b6e))

# [7.1.0](https://github.com/favna/nintendo-switch-eshop/compare/v7.0.2...v7.1.0) - (2022-04-16)

## Bug Fixes

- Fixed package config for yarn npm publish ([c816444](https://github.com/favna/nintendo-switch-eshop/commit/c816444f32c82ad209c51469244a8273103fbd59))
- Add `module` to package.json and add `types` to export maps for `NodeNext` support ([68021b2](https://github.com/favna/nintendo-switch-eshop/commit/68021b2756877561ee26dd4efcb1a66bdd52a172))

## Documentation

- Fix docusaurus config ([893de09](https://github.com/favna/nintendo-switch-eshop/commit/893de098a2053f8786fe897221c719e67633c305))

## Features

- Add `getQueriedGamesBrazil` and `getGamesBrazil` (#4) ([dcf9d50](https://github.com/favna/nintendo-switch-eshop/commit/dcf9d50b3a2e81f842ebb84a21a027776917ddc0))

### [7.0.2](https://github.com/favna/nintendo-switch-eshop/compare/v7.0.1...v7.0.2) (2022-02-07)

### Bug Fixes

- bump dependencies (`@sapphire/fetch` and `fast-xml-parser`) ([10256fe](https://github.com/favna/nintendo-switch-eshop/commit/10256fe95e27f5f5ade4eed888c2faf03ab446e8))
- update `GameEU` interface ([65931cb](https://github.com/favna/nintendo-switch-eshop/commit/65931cb59e05a30759ac48e975866f5193507dc7)), closes [#2](https://github.com/favna/nintendo-switch-eshop/issues/2)

### [7.0.1](https://github.com/favna/nintendo-switch-eshop/compare/v7.0.0...v7.0.1) (2021-11-17)

### Bug Fixes

- fixed home page url and links to api docs ([b876ead](https://github.com/favna/nintendo-switch-eshop/commit/b876ead753a5ed08e56a90e80c1ae56325cb3fd8))

## [7.0.0](https://github.com/favna/nintendo-switch-eshop/compare/v6.0.2...v7.0.0) (2021-11-05)

### ⚠ BREAKING CHANGES

- The ownership of this package has officially been transferred to https://github.com/favna.
  While Favna has been maintaining this package for a few years already and this won't affect you in any major ways,
  package ownership transfers have often been an icky topic in the NPM ecosystem. For this reason the choice was made
  to make this a new major versions so a change of ownership would not land in your caret scoped dependencies.

### Bug Fixes

- update all the URLs ahead of full transfer ([5231eaf](https://github.com/favna/nintendo-switch-eshop/commit/5231eaf9ced61c7d710bba9a6c31c5deb1909904))

### [6.0.2](https://github.com/favna/nintendo-switch-eshop/compare/v6.0.1...v6.0.2) (2021-10-25)

### Bug Fixes

- rework some internals ([08c5d52](https://github.com/favna/nintendo-switch-eshop/commit/08c5d52a870306d1b561b9fdc25f18d3f96e4df6))

### [6.0.1](https://github.com/favna/nintendo-switch-eshop/compare/v6.0.0...v6.0.1) (2021-06-20)

### Bug Fixes

- **getGamesAmerica:** improve requests being made for better api data ([881174d](https://github.com/favna/nintendo-switch-eshop/commit/881174de2b86b632f44f082aadbc97d9853917b0)), closes [#473](https://github.com/favna/nintendo-switch-eshop/issues/473)

## [6.0.0](https://github.com/favna/nintendo-switch-eshop/compare/v5.1.0...v6.0.0) (2021-06-18)

### ⚠ BREAKING CHANGES

- `parseGameCode` has no longer been able to parse
  American games due to API changes. Until now you would get an empty
  string back and a deprecation warning.
  Starting this version you will instead get `null`
  back and the deprecation warning has been removed.

### Features

- update typings for `getGamesAmerica` ([5b162b4](https://github.com/favna/nintendo-switch-eshop/commit/5b162b4e7e3aaf9a2ab828f0e48ed14917667695))

### Bug Fixes

- **esm:** delete `__esModule` key ([523e2a5](https://github.com/favna/nintendo-switch-eshop/commit/523e2a5325033e303a2ea774545ba58ce6cd4b2d)), closes [#471](https://github.com/favna/nintendo-switch-eshop/issues/471)

## [5.1.0](https://github.com/favna/nintendo-switch-eshop/compare/v5.0.0...v5.1.0) (2021-03-05)

### Features

- bundle ESM compatible exports ([b58a3aa](https://github.com/favna/nintendo-switch-eshop/commit/b58a3aa61c34a7ba2dbf8ac65379090f8a483cfa))

### Bug Fixes

- **getqueriedgamesamerica:** fixed type exports and TSDoc ([103f028](https://github.com/favna/nintendo-switch-eshop/commit/103f0283ab69e142238a881b7450c1587fcab39e))

## [5.0.0](https://github.com/favna/nintendo-switch-eshop/compare/v4.0.0...v5.0.0) (2021-03-05)

### ⚠ BREAKING CHANGES

- **getqueriedgamesamerica:** The return structure has changed. Please refer to updated documentation or
  TypeScript information.

### Bug Fixes

- **getqueriedgamesamerica:** fixed getQueriedGamesAmerica which was broken as per API changes ([5c32023](https://github.com/favna/nintendo-switch-eshop/commit/5c32023c89db2be01753b2f27c7b9c3e68c9694b)), closes [#374](https://github.com/favna/nintendo-switch-eshop/issues/374)

## [4.0.0](https://github.com/favna/nintendo-switch-eshop/compare/v3.0.3...v4.0.0) (2020-10-31)

### ⚠ BREAKING CHANGES

- use getQueriedGamesAmerica to get games based on a given query. For example when
  your users can perform a search (just like on the nintendo.com website) you can use this to severly
  limit the results to go through.
- The repo files have been moved around a lot. This probably won't impact
  you too much, but if you were importing from a specific path (not the root of
  require('nintendo-switch-eshop')) then you'll have to change your imports.
- **api:** getGamesAmerica no longer takes any parameters and
  should always return all games.

Co-authored-by: Jeroen Claassens <support@favware.tech>

### Features

- add getQueriedGamesAmerica ([bfc1830](https://github.com/favna/nintendo-switch-eshop/commit/bfc18301af2325286810ae8342d708a6771c3132))
- restructure repo ([59ead46](https://github.com/favna/nintendo-switch-eshop/commit/59ead46ba2c2cbdfe7f3ffcddc53a144dbf7391f))

### Bug Fixes

- **api:** updated getgamesamerica algolia request to retrieve all games ([#281](https://github.com/favna/nintendo-switch-eshop/issues/281)) ([2ace2cc](https://github.com/favna/nintendo-switch-eshop/commit/2ace2ccfd6f90894b327861f344aa3217d85a5f7))

### [3.0.3](https://github.com/favna/nintendo-switch-eshop/compare/v3.0.2...v3.0.3) (2020-09-10)

### [3.0.2](https://github.com/favna/nintendo-switch-eshop/compare/v3.0.1...v3.0.2) (2020-07-08)

### [3.0.1](https://github.com/favna/nintendo-switch-eshop/compare/v3.0.0...v3.0.1) (2020-02-04)

## [3.0.0](https://github.com/favna/nintendo-switch-eshop/compare/v2.2.8...v3.0.0) (2020-02-04)

### ⚠ BREAKING CHANGES

- getGamesAmerica's options no longer takes a "shop" property

- remove the "shop" property from getGamesAmerica ([15a8a3c](https://github.com/favna/nintendo-switch-eshop/commit/15a8a3c58c94d6e0e3180458da0c8dc526a4bea2)), closes [#124](https://github.com/favna/nintendo-switch-eshop/issues/124)

### [2.2.8](https://github.com/favna/nintendo-switch-eshop/compare/v2.2.7...v2.2.8) (2019-12-20)

### [2.2.7](https://github.com/favna/nintendo-switch-eshop/compare/v2.2.6...v2.2.7) (2019-12-10)

### Bug Fixes

- update getGamesJapan ([#97](https://github.com/favna/nintendo-switch-eshop/issues/97)) ([c351038](https://github.com/favna/nintendo-switch-eshop/commit/c3510381e340821842c85bf257a83851f414329e))

### [2.2.6](https://github.com/favna/nintendo-switch-eshop/compare/v2.2.5...v2.2.6) (2019-11-27)

### Bug Fixes

- jp nsuid parsing & tslib dep ([2bf5629](https://github.com/favna/nintendo-switch-eshop/commit/2bf56291fdd762b1dced28c11be23f3e7e1763aa)), closes [#90](https://github.com/favna/nintendo-switch-eshop/issues/90) [#91](https://github.com/favna/nintendo-switch-eshop/issues/91)

### [2.2.5](https://github.com/favna/nintendo-switch-eshop/compare/v2.2.4...v2.2.5) (2019-11-22)

### Bug Fixes

- fixed getGamesAmerica ([83d8934](https://github.com/favna/nintendo-switch-eshop/commit/83d89348cdec76483f7839f798289e6780b64c82))

## [2.2.4](https://github.com/favna/nintendo-switch-eshop/compare/v2.2.3...v2.2.4) (2019-10-30)

**Note:** Version bump only for package nintendo-switch-eshop

## [2.2.3](https://github.com/favna/nintendo-switch-eshop/compare/v2.2.2...v2.2.3) (2019-09-11)

### Bug Fixes

- typing get games america ([2d756b9](https://github.com/favna/nintendo-switch-eshop/commit/2d756b9))

## [2.2.2](https://github.com/favna/nintendo-switch-eshop/compare/2.2.1...2.2.2) (2019-08-24)

**Note:** Version bump only for package nintendo-switch-eshop

## [2.2.1](https://github.com/favna/nintendo-switch-eshop/compare/2.2.0...2.2.1) - 2019-08-05

### Fixes

- Fixed `getShopsByCountryCodes` by building with rollup-plugin-json included

## [2.2.0](https://github.com/favna/nintendo-switch-eshop/compare/2.1.1...2.2.0) - 2019-08-01

### Fixes

- Fixed `getGamesAmerica` to use the new Algolia based API. At last! Many thanks to @endy124 for their work on this!

### Changed

- Restructured project
  - Now produces optimal bundles with Rollup
  - Proper JSDoc generation
  - Keeping a changelog
  - Cleaner editorconfig and thus coding style
  - GitHub issue and pull request and a contributing guide
  - Better CircleCI configuration

## [2.1.1](https://github.com/favna/nintendo-switch-eshop/compare/2.1.0...2.1.1) - 2019-02-26

### Fixes

- Moved `@types/country-data` to devDependencies thinking that would be okay but apparently it is not as it breaks TypeScript builds. So sorry! This should fix these kind of errors that were present in v2.1.0:

## [2.1.0](https://github.com/favna/nintendo-switch-eshop/compare/2.0.1...2.1.0) - 2019-02-26

### Fixes

- Get rid of Gulp for development environment => NPM Scripts suffice just fine
- Move `@types` to devDependencies where they belong => No more installed along with the package
- Change to terser-folder => Better ES6 support
- Fixed looping in `getGamesAmerica` => The lib loops for you again now, sorry for breaking that!
- Fixed looping in `getPrices` => Related to the other looping issue, now fixed again!

### Added

- Expose `GameUS`, `GameEU` and `GameJP` interface for TypeScript users
- Allow for the `getGamesAmerica` `shop` property to be `'unfiltered'`. This will remove the property from the API request and return everything possible

### Changed

- We now also test that looping of `getGamesAmerica` works properly

## [2.0.1](https://github.com/favna/nintendo-switch-eshop/compare/1.1.2...2.0.1) - 2019-01-19

### Changed

- BREAKING: Completely rewritten from the ground up!! Not compatible with v1.x!
- Reworked in TypeScript
- Now uses async/await rather than promises
- Minified production builds
- Importing syntax changed

## [1.1.2](https://github.com/favna/nintendo-switch-eshop/compare/1.1.1...1.1.2) - 2018-07-20

### Fixed

- Fixed critical issue on getGamesAmerica request

## [1.1.1](https://github.com/favna/nintendo-switch-eshop/compare/1.1.0...1.1.1) - 2018-07-13

### Added

- Optional shop request params

## [1.1.0](https://github.com/favna/nintendo-switch-eshop/compare/1.0.7...1.1.0) - 2018-02-23

### Added

- Request options

## [1.0.7](https://github.com/favna/nintendo-switch-eshop/compare/1.0.6...1.0.7) - 2017-08-01

### Changed

- getGamesJP to comply with new API

## [1.0.6](https://github.com/favna/nintendo-switch-eshop/compare/1.0.3...1.0.6) - 2017-06-23

### Changed

- Further improvements to overall system stability and other minor adjustments have been made to enhance the user experience

## [1.0.3](https://github.com/favna/nintendo-switch-eshop/releases/tag/1.0.3) - 2017-06-05

### Added

- Lib files
