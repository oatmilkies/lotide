//Compare 2 arrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Compares 2 objects
const eqObjects = function(obj1, obj2) {

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key in obj1) {
    //Check if the value is an array and compare them
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else {
      //Compare primitive data type values
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅ Objects are equal: ${inspect(actual)} = ${inspect(expected)}`);
    } else {
      console.log(`❌ Objects are not equal: ${inspect(actual)} = ${inspect(expected)}`);
    }
};

// Tests
assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});
assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 4});

assertEqual(eqObjects({a: 1, b: 2}, {a: 1, b: 2}), true);