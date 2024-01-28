//Compare 2 arrays
const eqArrays = function(arr1, arr2) {
  //Check both arrays are the same length
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

//Output to console if arrays are equal or not
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Arrays are equal");
  } else {
    console.log("❌ Arrays are not equal");
  }
};

//Flatten multidimensional array into single level. Use Array.isArray(value)
const flatten = function(multiArr) {
  let newArray = [];

  for (let i = 0; i < (multiArr.length); i++) {
    //Check if the array element is an array
    if (Array.isArray(multiArr[i])) {
      for (let j = 0; j < multiArr[i].length; j++) {
        newArray.push(multiArr[i][j]);
      }
      i++;
    }
    //Need this for when the last element is an array
    if (i < multiArr.length) {
      newArray.push(multiArr[i]);
    }
  }

  return newArray;
};

//Test cases
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
flatten(["a", 2, ["b", "c"], 5]);

assertArraysEqual(flatten(["a", 2, ["b", "c"], 5]), ["a", 2, "b", "c", 5]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);