const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

//Testing if the function correctly compares 2 objects
describe("#eqObjects", () => {

  it("returns true for { colour: 'yellow', type: 'banana' } and { type: 'banana', colour: 'yellow' }", () => {
    assert.deepEqual(eqObjects({ colour: "yellow", type: "banana" }, 
    { type: "banana", colour: "yellow" }), true);
  });

  it("returns false for { colour: 'yellow', type: 'banana' } and { type: 'banana', colour: 'brown' }", () => {
    assert.deepEqual(eqObjects({ colour: "yellow", type: "banana" }, 
    { type: "banana", colour: "brown" }), false);
  });

  it("returns true for { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it("returns false for { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });

});