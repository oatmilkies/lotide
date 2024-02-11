const tail = require('../tail');
const assert = require('chai').assert;

//Testing if the function correctly returns every element but the first element in the array
describe("#tail", () => {

  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['yellow', 'green'] for ['blue', 'yellow', 'green']", () => {
    assert.strictEqual(tail(['blue', 'yellow', 'green']), ['yellow', 'green']);
  });

  it("returns undefined for []", () => {
    assert.strictEqual(tail([]), undefined);
  });

});