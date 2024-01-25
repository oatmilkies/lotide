//Compare 2 arrays
const eqArrays = function(arr1, arr2) {
  //Check both arrays are the same length
  if (arr1.length !== arr2.length) {
    return console.log("Arrays are not equal");
  } else //Compare each element of the arrays
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return console.log("Arrays are not equal");
      }
    }
  return console.log("Arrays are equal");
};

//Test cases
eqArrays([1, 2, 3], [1, 2]), true;

eqArrays([1, 2, 3], [1, 2, 3]), true;
eqArrays([1, 5, 3], [1, 2, 3]), true;

eqArrays(["a", "b", "c"], ["a", "b", "c"]), true;
eqArrays(["a", "b", "g"], ["a", "b", "c"]), true;