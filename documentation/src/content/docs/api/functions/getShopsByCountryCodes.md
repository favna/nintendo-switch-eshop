---
editUrl: false
next: true
prev: true
title: 'getShopsByCountryCodes'
---

> **getShopsByCountryCodes**(`countryCodes`, `gameCode`, `region`): `Promise`\<[`EShop`](../interfaces/EShop.md)[]\>

Gets all active eShops given a list of countries.

## Parameters

• **countryCodes**: `string`[]

A list of 2 digit country codes for every country eShop to lookup. (ISO 3166-1 alpha-2 country codes)

• **gameCode**: `string`

A 14 digits game NSUID from the desired region.

• **region**: [`Region`](../enumerations/Region.md)

A region id that will be appended in the final shop object for filtering purposes.

## Returns

`Promise`\<[`EShop`](../interfaces/EShop.md)[]\>

A list of shop objects with country code, name and default currency.

## Source

[lib/other/getShopByCountryCode.ts:15](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/other/getShopByCountryCode.ts#L15)

---

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
