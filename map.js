//Compare 2 arrays
const eqArrays = function(arr1, arr2) {
  //Check both arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  //Compare each element
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
  } else {
    console.log("❌ Arrays are not equal");
  }
};

const words = ["Ori", "Tunic", "Death's Door", "Jusant", "Citizen Sleeper"];

//Return the first letter of each word in an array
const map = function(array, callback) {
  const results = [];

  //Add each first letter to the new array
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

//Call map function and pass in function that gets the first letter in a word
const results1 = map(words, word => word[0]);

// Tests
console.log(results1);
assertArraysEqual(results1, [ 'O', 'T', 'D', 'J', 'C' ]);
assertArraysEqual([results1[0]], ["O"]);
assertArraysEqual([results1[2]], ["D"]);