const companyAdministration = require("./companyAdministration");
const { assert } = require("chai");

describe("Tests companyAdministration", function () {
  describe("Test hiringEmployees", function () {
    it("Test different position", function () {
      assert.throw(
        () => companyAdministration.hiringEmployee("Teodora", "Different", 1),
        `We are not looking for workers for this position.`
      );
    });

    it("Test yearsExperience to be greater than or equal to 3", () => {
      assert.equal(
        companyAdministration.hiringEmployee("Teodora", "Programmer", 3),
        `Teodora was successfully hired for the position Programmer.`
      );
    });

    it("Test with incorrect yearsExperience", () => {
      assert.equal(
        companyAdministration.hiringEmployee("Teodora", "Programmer", 1),
        `Teodora is not approved for this position.`
      );
    });
  });

  describe("Test calculateSalary", () => {
    it("test calculateSalary with wrong value", () => {
      assert.throw(
        () => companyAdministration.calculateSalary(-10),
        "Invalid hours"
      );
      assert.throw(
        () => companyAdministration.calculateSalary("age"),
        "Invalid hours"
      );
    });

    it("test calculateSalary with correct value", () => {
      assert.equal(companyAdministration.calculateSalary(0), 0);
      assert.equal(companyAdministration.calculateSalary(1), 15);
      assert.equal(companyAdministration.calculateSalary(160), 160 * 15);
    });

    it("test calculateSalary bonus", () => {
      assert.equal(companyAdministration.calculateSalary(161), 161 * 15 + 1000);
      assert.equal(companyAdministration.calculateSalary(200), 200 * 15 + 1000);
    });
  });

  describe("Test firedEmployee", () => {
    it("test firedEmployee with invalid input", () => {
      assert.throw(
        () => companyAdministration.firedEmployee("employee", 0),
        "Invalid input"
      );
      assert.throw(
        () => companyAdministration.firedEmployee("{}", 1),
        "Invalid input"
      );
      assert.throw(
        () => companyAdministration.firedEmployee(1, []),
        "Invalid input"
      );
      assert.throw(
        () => companyAdministration.firedEmployee(["Teodora"], 2),
        "Invalid input"
      );
      assert.throw(
        () => companyAdministration.firedEmployee(["Teodora"], -1),
        "Invalid input"
      );
      assert.throw(
        () => companyAdministration.firedEmployee(["Teodora"], "one"),
        "Invalid input"
      );
    });

    it("test firedEmployee with correct input", () => {
      assert.equal(companyAdministration.firedEmployee(["Teodora"], 0), "");
      assert.equal(
        companyAdministration.firedEmployee(["Teodora", "George"], 0),
        "George"
      );
      assert.equal(
        companyAdministration.firedEmployee(["Teodora", "George", "Peter"], 0),
        "George, Peter"
      );
      assert.equal(
        companyAdministration.firedEmployee(["Teodora", "George", "Peter"], 1),
        "Teodora, Peter"
      );
      assert.equal(
        companyAdministration.firedEmployee(["Teodora", "George", "Peter"], 2),
        "Teodora, George"
      );
    });
  });
});
