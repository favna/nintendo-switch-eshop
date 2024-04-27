---
editUrl: false
next: true
prev: true
title: 'getShopsAsia'
---

> **getShopsAsia**(): `Promise`\<[`EShop`](../interfaces/EShop.md)[]\>

Gets all active eShops on Asian countries

## Returns

`Promise`\<[`EShop`](../interfaces/EShop.md)[]\>

A list of shop objects with country code, name and default currency.

## Remarks

This method will launch several requests at nintendo web services, so don't abuse it.

## Source

[lib/getShops/getShopsAsia.ts:14](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/getShops/getShopsAsia.ts#L14)

---

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
