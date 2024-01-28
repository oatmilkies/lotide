const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Returns the count of each letter in a given sentence
const countLetters = function(sentence) {
  const result = {};
  const alphabet = /[A-Za-z]/;
  //Check if input is a letter and add to the result object if it is
  for (const letter of sentence) {
    if (alphabet.test(letter)) {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }

  return result;
};

// Tests
const test1 = countLetters("lighthouse in the house 5");

console.log(test1);

assertEqual(test1["h"], 4);
assertEqual(test1["l"], 1);
assertEqual(test1["5"], undefined);