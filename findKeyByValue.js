const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

//Search for a given value in the object and return its key
const findKeyByValue = function(obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
};

// Tests
food = {fruit: "banana", vegetable: "onion", meat: "chicken"};
test = {};

assertEqual(findKeyByValue(food, "chicken"), "meat");
assertEqual(findKeyByValue(food, "onion"), "vegetable");
assertEqual(findKeyByValue(test, "banana"), undefined);
assertEqual(findKeyByValue(food, "yum"), undefined);