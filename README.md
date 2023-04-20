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

* `head(arr)`: Return first item of a given array
* `tail(arr)`: Return all item in except the head of a given array
* `middle`: Return the middle-most item of a given array
* `assertArraysEqual(firstArr, secArr)`: Write message to console if assertion (array) pass or fail
* `assertEqual(actual, expected)`: Write message to console if assertion (primitive type) pass or fail
* `assertObjectsEqualfunction(object1, object2)`: Write message to console if assertion (Object) pass or fail
* `countLetters(str)`: Count occurance of each letter in a given string
* `countOnly(allItems, itemsToCount)`: Given a list of item, return counts for a specific subset of those items
* `eqArrays(arr1, arr2)`: Compare two arrays, return true if equal else false
* `eqObjects(object1, object2)`: Compare two objects, return true if equal, else false
* `findKey(object, callback)`: Scan given object and return the first key for which the callback returns a truthy value. Return undefined if no key is found
* `findKeyByValue(object, value)`: Given an object, return the first key which contains the given value, return undefined if not found
* `flatten(arr)`: Flatten nested arrays
* `letterPositions(sentence)`: Return all the indices in the string where each character is found
* `map(array, callback)`: Take in an array and a callback function,return a new array based on the results of the callback function
* `takeUntil(array, callback)`: Return a slice of the array, with elements taken from the beginning, until callback condition meets
* `without(source, itemsToRemove)`: Remove target(s) from a given array