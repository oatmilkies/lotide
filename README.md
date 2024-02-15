# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @oatmilkies/lotide`

**Require it:**

`const _ = require('@oatmilkies/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head([1, 2, 3])`: Returns the fist item in an array
* `tail([1, 2, 3])`: Returns every element but the first element in an array
* `middle([1, 2, 3, 4])`: Return the middle elements in an array
* `assertArraysEqual(["a, "b""], ["a", "b"])`: Displays output for eqArrays()
* `assertEqual("a", "a")`: Checks if 2 parameters are equal or not
* `assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2})`: Displays output for eqObjects()
* `countLetters("hello there")`: Returns the count of each letter in a given sentence
* `countOnly([2, 3, 5, 2, 5)`: Returns an object containing counts of everything that the input object listed
* `eqArrays([1, 2], [1, 2])`: Returns if 2 arrays are equal or not
* `eqObjects({a: 1, b: 2}, {a: 1, b: 2})`: Returns if 2 objects are equal or not
* `findKey({object}, x => x.key === "something")`: Returns the first key for which the callback returns truthy
* `findKeyByValue({a: 1, b: 2}, 2)`: Search for a given value in the object and return its key
* `flatten(['a, 2, ['b, 'c], 5])`: Flattens a multidimensional array into single level
* `letterPositions("hello there")`: Return the position of each letter in a sentence
* `takeUntil([array], x => x === "something")`: Print out the elements of an array until the callback function requirements are true
* `without([1, 2, 3], [1])`: Given and array with elements to remove, creates a new array without those elements