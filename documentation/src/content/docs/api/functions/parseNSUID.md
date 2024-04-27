---
editUrl: false
next: true
prev: true
title: 'parseNSUID'
---

> **parseNSUID**(`game`, `region`): `string` \| `null`

Extracts NSUID information from the game object.

## Parameters

• **game**: [`GameEU`](../interfaces/GameEU.md) \| [`GameUS`](../interfaces/GameUS.md) \| [`GameJP`](../interfaces/GameJP.md)

The game object returned from one of the other methods.

• **region**: [`Region`](../enumerations/Region.md)

Region code

## Returns

`string` \| `null`

The 14-digits NSUID

## Source

[lib/other/parseNSUID.ts:11](https://github.com/favna/nintendo-switch-eshop/blob/7e1c1df147b1f9067aea692f9d4dd56664ae35c8/src/lib/other/parseNSUID.ts#L11)

---

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
