---
editUrl: false
next: true
prev: true
title: 'getQueriedGamesAmerica'
---

> **getQueriedGamesAmerica**(`query`, `__namedParameters`): `Promise`\<[`QueriedGameUS`](../interfaces/QueriedGameUS.md)[]\>

Fetches a subset of games from the American e-shops as based on a given query

## Parameters

• **query**: `string`

The query to search for

• **\_\_namedParameters**: [`QueriedGamesAmericaOptions`](../interfaces/QueriedGamesAmericaOptions.md)= `undefined`

Additional options for the [[getQueriedGamesAmerica]] call. Defaults to `{ hitsPerPage: 200, page: 0 }`

## Returns

`Promise`\<[`QueriedGameUS`](../interfaces/QueriedGameUS.md)[]\>

Promise containing the first `hitsPerPage` games that match your query

## License

Apache-2.0 Jeroen Claassens & Aura Román

## Copyright

2021

## Source

[lib/getGames/getQueriedGamesAmerica.ts:21](https://github.com/favna/nintendo-switch-eshop/blob/7e1c1df147b1f9067aea692f9d4dd56664ae35c8/src/lib/getGames/getQueriedGamesAmerica.ts#L21)

---

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
