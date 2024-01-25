// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Returns the fist item in an array
const head = function(arrayHead) {
  return arrayHead[0];
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([3,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head([3]), 3);
assertEqual(head([]), 5);