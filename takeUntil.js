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

//Print out the elements of an array until the callback function requirements are true
const takeUntil = function(array, callback) {
  let result = [];
  //Loop through each element in the array until callback condition is met
  for (const element of array) {
    //Store the result of the callback in a variable and use that in conditions
    const callbackResult = callback(element);
    if (!callbackResult) {
      result.push(element);
    } else {
      return result;
    }
  }
  return result;
};

// Tests
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 =
  ["Ori", "Tunic", ".", "Death's Door", "Jusant", "Citizen Sleeper"];
const results2 = takeUntil(data2, x => x === ".");
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'Ori', 'Tunic']);