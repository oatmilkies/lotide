const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
];

const letters = ["a", "b", "e", "e", "g", "a", "e"];

const numbers = [2, 3, 5, 16, 2, 5, 2];

//Testing if the function correctly returns an object containing counts of everything that the input object listed
describe("#countOnly", () => {

  it("returns { Fang: 2, Jason: 1 } for ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Jason', 'Salima', 'Fang']", () => {
    assert.deepEqual(countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { Fang: 2, Jason: 1 });
  });

  it("returns { a: 2, e: 3 } for ['a','b','e','e','g','a','e']", () => {
    assert.deepEqual(countOnly(letters, {"a": true, "e": true, "b": false}), 
    { a: 2, e: 3 });
  });

  it("returns { '5': 2, '16': 1 }  for [2, 3, 5, 16, 2, 5, 2]", () => {
    assert.deepEqual(countOnly(numbers, {"5": true, "16": true, "2": false}), 
    { "5": 2, "16": 1 });
  });

  it("returns {} for []", () => {
    assert.deepEqual(countOnly([]), {});
  });

});
