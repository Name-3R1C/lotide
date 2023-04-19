# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eric-yhf/lotide`

**Require it:**

`const _ = require('@eric-yhf/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: return first item for a given array
* `tail(arr)`: return all item in except the head for a given array
* `middle`: return item in the middle for a given array
* `assertArraysEqual(firstArr, secArr)`:
* `assertEqual(actual, expected)`:
* `assertObjectsEqualfunction(object1, object2)`:
* `countLetters(str)`:
* `countOnly(allItems, itemsToCount)`:
* `eqArrays(arr1, arr2)`:
* `eqObjects(object1, object2)`:
* `findKey(object, callback)`:
* `findKeyByValue(object, value)`:
* `flatten(arr)`:
* `letterPositions(sentence)`:
* `map(array, callback)`:
* `takeUntil(array, callback)`:
* `without(source, itemsToRemove)`: