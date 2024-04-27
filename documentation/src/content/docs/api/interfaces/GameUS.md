---
editUrl: false
next: true
prev: true
title: 'GameUS'
---

## Properties

### availability

> **availability**: `string`[]

Identifiers about the availability of this game.

#### Source

[lib/utils/interfaces.ts:439](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L439)

---

### boxart

> **boxart**: `string`

The boxart of this title, if this is an eShop game then it is the homescreen icon

#### Source

[lib/utils/interfaces.ts:442](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L442)

---

### description

> **description**: `string`

A longer description about this title

#### Source

[lib/utils/interfaces.ts:445](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L445)

---

### developers

> **developers**: `string`[]

The studios that developed this gamme

#### Source

[lib/utils/interfaces.ts:448](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L448)

---

### esrbDescriptors

> **esrbDescriptors**: `string`[]

An array of ESRB descriptions such as `"Alcohol Reference"` and `"Violence"`

#### Source

[lib/utils/interfaces.ts:451](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L451)

---

### esrbRating

> **esrbRating**: `string`

The [ESRB](https://www.esrb.org) rating this game was given

#### Source

[lib/utils/interfaces.ts:454](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L454)

---

### featured

> **featured**: `boolean`

Whether this game is featured on [https://nintendo.com](https://nintendo.com)'s homepage

#### Source

[lib/utils/interfaces.ts:457](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L457)

---

### franchises

> **franchises**: `string`[]

The franches this game is part of

#### Source

[lib/utils/interfaces.ts:460](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L460)

---

### freeToStart

> **freeToStart**: `boolean`

Whether this game is free to start and only needs payment later

#### Source

[lib/utils/interfaces.ts:463](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L463)

---

### generalFilters

> **generalFilters**: `string`[]

Qualifiers that could be used to find this game when applying filters on [https://nintendo.com](https://nintendo.com)

#### Source

[lib/utils/interfaces.ts:466](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L466)

---

### genres

> **genres**: `string`[]

The genres this this game is part of

#### Source

[lib/utils/interfaces.ts:469](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L469)

---

### horizontalHeaderImage

> **horizontalHeaderImage**: `string`

A larger header image

#### Source

[lib/utils/interfaces.ts:472](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L472)

---

### howToShop

> **howToShop**: `string`[]

A list of ways this game can be purchased

#### Source

[lib/utils/interfaces.ts:475](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L475)

---

### lastModified

> **lastModified**: `number`

Unix timestamp when this entry was last edited on the API

#### Source

[lib/utils/interfaces.ts:478](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L478)

---

### lowestPrice

> **lowestPrice**: `number`

The lowest price this game was ever available for.

#### Source

[lib/utils/interfaces.ts:481](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L481)

---

### msrp

> **msrp**: `number`

The [Manufacturer's Suggested Retail Price](https://en.wikipedia.org/wiki/List_price) for this game (in United States Dollars).

#### Source

[lib/utils/interfaces.ts:484](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L484)

---

### nsuid

> **nsuid**: `string`

14-digit game unique identifier

#### Source

[lib/utils/interfaces.ts:487](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L487)

---

### numOfPlayers

> **numOfPlayers**: `string`

The amount of players this game supports. This is a string because Nintendo is more verbose than just a number.

#### Source

[lib/utils/interfaces.ts:490](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L490)

---

### objectID

> **objectID**: `string`

The internal ID that Nintendo has assigned to this game in their API. This doesn't really serve any use.

#### Source

[lib/utils/interfaces.ts:493](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L493)

---

### platform

> **platform**: `string`

The platform on which this game was released

#### Source

[lib/utils/interfaces.ts:496](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L496)

---

### playerFilters

> **playerFilters**: `string`[]

Qualifiers that could be used to find this game when applying player filters on [https://nintendo.com](https://nintendo.com)

#### Source

[lib/utils/interfaces.ts:499](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L499)

---

### priceRange

> **priceRange**: `string`

The predefined price range in which this game falls, can be used when applying filters on [https://nintendo.com](https://nintendo.com)

#### Source

[lib/utils/interfaces.ts:502](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L502)

---

### publishers

> **publishers**: `string`[]

The studios that published this game

#### Source

[lib/utils/interfaces.ts:505](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L505)

---

### releaseDateDisplay

> **releaseDateDisplay**: `string`

The date this game was released in the [ISO 8601 Extended Format](https://en.wikipedia.org/wiki/ISO_8601)

#### Source

[lib/utils/interfaces.ts:508](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L508)

---

### salePrice

> **salePrice**: `null` \| `number`

The price for this game when it is on sale. This is `null` when the game is _not_ on sale.

#### Source

[lib/utils/interfaces.ts:511](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L511)

---

### slug

> **slug**: `string`

Game URL name

#### Source

[lib/utils/interfaces.ts:514](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L514)

---

### title

> **title**: `string`

The title of the game

#### Source

[lib/utils/interfaces.ts:517](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L517)

---

### url

> **url**: `string`

The URL to the game on [https://nintendo.com](https://nintendo.com). Prepend `https://nintend.com` to this URL to get a fully qualified URL to the game.

#### Source

[lib/utils/interfaces.ts:520](https://github.com/favna/nintendo-switch-eshop/blob/27355e779102b48fc082af549592453043b2ac6e/src/lib/utils/interfaces.ts#L520)

---

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
