const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

//Check both arrays are the same length
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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Arrays are equal");
  } else
    console.log("❌ Arrays are not equal");
};

//Return the position of each letter in a sentence
const letterPositions = function(sentence) {
  const results = {};
  const alphabet = /[A-Za-z]/;

  for (let i = 0; i < sentence.length; i++) {
    if (alphabet.test(sentence[i])) {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
console.log(results);
  return results;
};

// Tests
const test = letterPositions("a big blue bear");
const test2 = letterPositions("");

assertEqual(test["g"][0], 4);
assertEqual(test["a"][1], 13);
assertEqual(Object.keys(test2).length, 0);

assertArraysEqual(test["b"], [2, 6, 11]);
assertArraysEqual(test["r"], [14]);