const { assert } = require("chai");
const { lookupChar } = require("../Exercise/Exercise Resources/03. lookupChar");

describe("Test with incorrect data types", () => {
  it("Result should be undefined when the first parameter is incorrect", () => {
    assert.equal(lookupChar(5, 5), undefined);
  });

  it("Result should be undefined when the first parameter is array", () => {
    assert.equal(lookupChar([], 0), undefined);
  });

  it("Result should be undefined when the second parameter is incorrect", () => {
    assert.equal(lookupChar("5", "5"), undefined);
  });

  it("Result should be undefined when second parameter is decimal number", () => {
    assert.equal(lookupChar("Pesho", 0.99), undefined);
  });
});

describe("Test with wrong value of the index", () => {
  it("Result should be Incorrect index when the index is bigger than the string length", () => {
    assert.equal(lookupChar("Simon", 100), "Incorrect index");
  });

  it("Result should be Incorrect index when the index is equal to the string length", () => {
    assert.equal(lookupChar("Life", 4), "Incorrect index");
  });

  it("Result should be Incorrect index when the index is negative number", () => {
    assert.equal(lookupChar("Waffle", -1), "Incorrect index");
  });
});

describe("Test with correct type and value", () => {
  it("Result should be G with zero index (George)", () => {
    assert.equal(lookupChar("George", 0), "G");
  });

  it("Result should be e with zero index (George)", () => {
    assert.equal(lookupChar("George", 5), "e");
  });
});
