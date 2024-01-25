//assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

//Compare 2 arrays
const eqArrays = function(arr1, arr2) {
  //Check both arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  } else //Compare each element of the arrays
    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
};

//Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2]), true);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 5, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 5, 3], [1, 2, 3]), false);

assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true);
assertEqual(eqArrays(["a", "b", "g"], ["a", "b", "c"]), true);
assertEqual(eqArrays(["a", "b", "g"], ["a", "b", "c"]), false);