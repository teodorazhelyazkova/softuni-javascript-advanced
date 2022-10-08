const { assert } = require("chai");
const { isOddOrEven } = require("../Exercise/Exercise Resources/02. evenOrOdd");

describe("test isOddOrEven with incorrect value", () => {
  it("Result should be undefined with empty array as argument", () => {
    assert.equal(isOddOrEven([]), undefined);
  });

  it("Result should be undefined with empty object as argument", () => {
    assert.equal(isOddOrEven({}), undefined);
  });

  it("Result should be undefined with object as argument", () => {
    assert.equal(isOddOrEven({ name: "Pesho" }), undefined);
  });

  it("Result should be undefined with number as argument", () => {
    assert.equal(isOddOrEven(1), undefined);
  });

  it("Result should be undefined with boolean as argument", () => {
    assert.equal(isOddOrEven(true), undefined);
  });
});

describe("test isOddOrEven with correct value", () => {
  it("Result should be even with `Love`", () => {
    assert.equal(isOddOrEven("Love"), "even");
  });

  it("Result should be odd with `Sad`", () => {
    assert.equal(isOddOrEven("Sad"), "odd");
  });
});
