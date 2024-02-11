// test/assertEqualTest.js & tail.js

const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CASES
const check = ["blue", "yellow", "green"];
tail(check);
assertEqual(check.length, 3); //original array shouldn't be modified

const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words.length, 2);
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");

const numbers = tail([1, 2, 3, 4]);
assertEqual(numbers.length, 3);
assertEqual(numbers[0], 2);
assertEqual(numbers[1], 3);
assertEqual(numbers[2], 4);
assertEqual(numbers[0], 5);