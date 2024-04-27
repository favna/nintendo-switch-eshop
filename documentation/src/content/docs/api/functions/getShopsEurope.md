---
editUrl: false
next: true
prev: true
title: 'getShopsEurope'
---

> **getShopsEurope**(): `Promise`\<[`EShop`](../interfaces/EShop.md)[]\>

Gets all active eShops on European countries.

## Returns

`Promise`\<[`EShop`](../interfaces/EShop.md)[]\>

A list of shop objects with country code, name and default currency.

## Remarks

This method will launch several requests at nintendo web services, so don't abuse it.

## Source

[lib/getShops/getShopsEurope.ts:14](https://github.com/favna/nintendo-switch-eshop/blob/7e1c1df147b1f9067aea692f9d4dd56664ae35c8/src/lib/getShops/getShopsEurope.ts#L14)

---

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).