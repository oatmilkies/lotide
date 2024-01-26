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

//Output to console if arrays are equal or not
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Arrays are equal");
  } else
    console.log("❌ Arrays are not equal");
};

//Return the middle elements in an array
const middle = function(array) {
  let midArr = [];
  let mid = Math.floor(array.length / 2);

  //Find the middle of the array
  if (array.length <= 2) {
    return midArr;
  }
  
  //Check if even or odd
  if (array.length % 2 === 0) {
    midArr.push(array[mid - 1]);
    midArr.push(array[mid]);
  } else
    midArr.push(array[mid]);

  return midArr;
};

//Test cases
middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]