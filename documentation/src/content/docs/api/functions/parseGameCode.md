---
editUrl: false
next: true
prev: true
title: 'parseGameCode'
---

> **parseGameCode**(`game`, `region`): `string` \| `null`

Parses the game code to extract the cross-region portion.

## Parameters

• **game**: [`GameEU`](../interfaces/GameEU.md) \| [`GameUS`](../interfaces/GameUS.md) \| [`GameJP`](../interfaces/GameJP.md)

The game object returned from one of the other methods.

• **region**: [`Region`](../enumerations/Region.md)

Region code

## Returns

`string` \| `null`

The 4-digit resulting game code

## Source

[lib/other/parseGameCode.ts:12](https://github.com/favna/nintendo-switch-eshop/blob/7e1c1df147b1f9067aea692f9d4dd56664ae35c8/src/lib/other/parseGameCode.ts#L12)

---

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
