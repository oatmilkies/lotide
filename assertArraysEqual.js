//Compare 2 arrays
const eqArrays = function(arr1, arr2) {
  //Check both arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  } else //Compare each element of the arrays
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Arrays are equal");
  } else
    console.log("❌ Arrays are not equal");
};

//Test cases
assertArraysEqual([1, 2, 3], [1, 2]);

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 5, 3], [1, 2, 3]);

assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]);
assertArraysEqual(["a", "b", "c"], ["a", "d", "c"]);