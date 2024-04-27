---
editUrl: false
next: true
prev: true
title: 'getPrices'
---

> **getPrices**(`country`, `gameIds`, `offset`, `prices`): `Promise`\<[`PriceResponse`](../interfaces/PriceResponse.md)\>

Gets pricing information for the requested games. Paginates every 50 games.

## Parameters

• **country**: `string`

A two digit country code. (ISO 3166-1 alpha-2 country code)

• **gameIds**: `string` \| `string`[]

One or more NSUID of the corresponding games.

• **offset**: `number`= `0`

_(Optional)_ The offset to start at

• **prices**: [`TitleData`](../interfaces/TitleData.md)[]= `[]`

_(Optional)_ An array of [TitleData](../interfaces/TitleData.md)

## Returns

`Promise`\<[`PriceResponse`](../interfaces/PriceResponse.md)\>

A promise containing the pricing information.

## Source

[lib/other/getPrices.ts:17](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/other/getPrices.ts#L17)

---

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
