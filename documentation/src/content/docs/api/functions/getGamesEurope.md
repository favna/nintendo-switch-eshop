---
editUrl: false
next: true
prev: true
title: 'getGamesEurope'
---

> **getGamesEurope**(`options`): `Promise`\<[`GameEU`](../interfaces/GameEU.md)[]\>

Fetches all games on the European, Australian or New Zealand eShops

## Parameters

• **options**: [`EURequestOptions`](../interfaces/EURequestOptions.md)= `undefined`

Request options to pass to the eShop request [See EURequestOptions for details](../interfaces/EURequestOptions.md)

## Returns

`Promise`\<[`GameEU`](../interfaces/GameEU.md)[]\>

Promise containing all requested EU/PAL games

## Remarks

Games from Australia / New Zealand can be limited. They are included only as much as that Nintendo assigns them properly to the PAL region

## Source

[lib/getGames/getGamesEurope.ts:17](https://github.com/favna/nintendo-switch-eshop/blob/7e1c1df147b1f9067aea692f9d4dd56664ae35c8/src/lib/getGames/getGamesEurope.ts#L17)

---

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
