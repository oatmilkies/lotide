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
        //Increment count for existing letters
        result[letter] += 1;
      } else {
        //Add new letters with a count of 1
        result[letter] = 1;
      }
    }
  }

  return result;
};

module.exports = countLetters;

// Tests
const test1 = countLetters("lighthouse in the house 5");
const test2 = countLetters("ABCBAa");
const test3 = countLetters("");

console.log(test1);

assertEqual(test1["h"], 4);
assertEqual(test1["l"], 1);
assertEqual(test1["5"], undefined);
assertEqual(test2["a"], 1);
assertEqual(test2["A"], 2);
assertEqual(Object.keys(test3).length, 0);