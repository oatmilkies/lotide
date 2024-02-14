const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const food = {fruit: "banana", vegetable: "onion", meat: "chicken"};

//Testing if the function correctly searches for a given value in the object and return its key
describe("#findKeyByValue", () => {

  it("returns 'meat' for 'chicken' in {fruit: 'banana', vegetable: 'onion', meat: 'chicken'}", () => {
    assert.strictEqual(findKeyByValue(food, "chicken"), "meat");
  });

  it("returns 'vegetable' for 'onion' in {fruit: 'banana', vegetable: 'onion', meat: 'chicken'}", () => {
    assert.strictEqual(findKeyByValue(food, "onion"), "vegetable");
  });

  it("returns undefined for 'pineapple' in {fruit: 'banana', vegetable: 'onion', meat: 'chicken'}", () => {
    assert.strictEqual(findKeyByValue(food, "pineapple"), undefined);
  });

  it("returns undefined for 'banana' in {}", () => {
    assert.strictEqual(findKeyByValue({}, "banana"), undefined);
  });

});