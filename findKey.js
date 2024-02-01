const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Returns the first key for which the callback returns truthy. If nothing, returns undefined
const findKey = function(object, callback) {
  for (const key in object) {
    const callbackResult = callback(object[key]);
    if (callbackResult) {
      return key;
    }
  }
};

const data1 = {
  monstera: { light: "medium light" },
  cactus: { light: "direct sun" },
  aglaonema: { light: "medium light" },
  calathea: { light: "low light" },
  croton: { light: "bright light" }
};

// Tests
const test1 = findKey(data1, x => x.light === "direct sun");
const test2 = findKey(data1, x => x.light === "medium light");
const test3 = findKey(data1, x => x.light === "no light");

assertEqual(test1, "cactus");
assertEqual(test2, "monstera");
assertEqual(test3, undefined);