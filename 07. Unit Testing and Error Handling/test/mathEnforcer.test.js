const { assert } = require("chai");
const {
  mathEnforcer,
} = require("../Exercise/Exercise Resources/04. mathEnforcer");

describe("mathEnforcer functionality", () => {
  it("add should return undefined if is not a number", () => {
    assert.equal(mathEnforcer.addFive([]), undefined);
  });
  it("add should return correct data", () => {
    assert.equal(mathEnforcer.addFive(5), 10);
  });
  it("add should return correct data with negative number", () => {
    assert.equal(mathEnforcer.addFive(-5), 0);
  });
  it("add should return correct data with float number", () => {
    assert.equal(mathEnforcer.addFive(3.5), 8.5);
  });
  it("add should return correct data with float number to 0.01", () => {
    assert.equal(mathEnforcer.addFive(3.333), 8.333);
  });
  it("subtract should return undefined if is not a number", () => {
    assert.equal(mathEnforcer.subtractTen({}), undefined);
  });
  it("subtract should return correct data", () => {
    assert.equal(mathEnforcer.subtractTen(20), 10);
  });
  it("subtract should return correct data with negative number", () => {
    assert.equal(mathEnforcer.subtractTen(-20), -30);
  });
  it("subtract should return correct data with float number", () => {
    assert.equal(mathEnforcer.subtractTen(10.5), 0.5);
  });
  it("subtract should return correct data with float number to 0.01", () => {
    assert.equal(mathEnforcer.subtractTen(15.333), 5.333);
  });
  it("sum should return undefined if first is not a number", () => {
    assert.equal(mathEnforcer.sum({}, 2), undefined);
  });
  it("sum should return undefined if second is not a number", () => {
    assert.equal(mathEnforcer.sum(3, "3"), undefined);
  });
  it("sum should return correct data", () => {
    assert.equal(mathEnforcer.sum(3, 3), 6);
  });
  it("sum should return correct data with float number", () => {
    assert.equal(mathEnforcer.sum(3.4, 4.8), 8.2);
  });
  it("sum should return correct data with float number to 0.01", () => {
    assert.equal(mathEnforcer.sum(3.221, 3.332), 6.553);
  });
});
