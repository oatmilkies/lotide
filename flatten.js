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

module.exports = flatten;