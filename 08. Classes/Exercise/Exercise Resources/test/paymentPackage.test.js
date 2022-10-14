const PaymentPackage = require("./12. paymentPackage");
const { assert } = require("chai");

describe("PaymentPackage", () => {
  describe("create instance", () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage("Teodora", 10);
    });

    it("name should be correct", () => {
      assert.equal(
        paymentPackage._name,
        "Teodora",
        "name is correctly set to Teodora"
      );
    });

    it("value should be correct", () => {
      assert.equal(paymentPackage._value, 10, "value is correctly set to 10");
    });

    it("vat should be correct", () => {
      assert.equal(paymentPackage._VAT, 20, "default value is set correctly");
      assert.equal(
        typeof paymentPackage._VAT,
        "number",
        "vat is the correct data type"
      );
    });

    it("active should be correct", () => {
      assert.equal(
        paymentPackage._active,
        true,
        "active has correct initial value"
      );
      assert.equal(
        typeof paymentPackage._active,
        "boolean",
        "active has correct type"
      );
    });
  });

  describe("test setters", () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage("Teodora", 10);
    });

    it("set incorrect type of name", () => {
      assert.throws(() => {
        new PaymentPackage(10, 10);
      }, "Name must be a non-empty string");
    });

    it("set empty name", () => {
      assert.throws(() => {
        new PaymentPackage("", 10);
      }, "Name must be a non-empty string");
    });

    it("set correct name", () => {
      assert.equal(paymentPackage.name, "Teodora");
      paymentPackage.name = "Galinka";
      assert.equal(paymentPackage.name, "Galinka");
    });

    it("set incorrect value type", () => {
      assert.throws(() => {
        new PaymentPackage("Teodora", "10");
      }, "Value must be a non-negative number");
    });

    it("set negative value", () => {
      assert.throws(() => {
        new PaymentPackage("Teodora", -50);
      }, "Value must be a non-negative number");
    });

    it("set correct value", () => {
      assert.equal(paymentPackage.value, 10);
      paymentPackage.value = 50;
      assert.equal(paymentPackage.value, 50);
      paymentPackage.value = 0;
      assert.equal(paymentPackage.value, 0);
    });

    it("set incorrect VAT type", () => {
      assert.throws(() => {
        paymentPackage.VAT = "George";
      }, "VAT must be a non-negative number");
    });

    it("set incorrect VAT value", () => {
      assert.throws(() => {
        paymentPackage.VAT = -100;
      }, "VAT must be a non-negative number");
    });

    it("set correct VAT value", () => {
      assert.equal(paymentPackage.VAT, 20);
      paymentPackage.VAT = 30;
      assert.equal(paymentPackage.VAT, 30);
    });

    it("set incorrect active value", () => {
      assert.throws(() => {
        paymentPackage.active = "Peter";
      }, "Active status must be a boolean");
    });

    it("set correct active value", () => {
      assert.equal(paymentPackage.active, true);
      paymentPackage.active = false;
      assert.equal(paymentPackage.active, false);
    });
  });

  describe("toString", () => {
    let paymentPackage;
    beforeEach(() => {
      paymentPackage = new PaymentPackage("Teodora", 10);
    });

    it("test active state", () => {
      const output = [
        `Package: Teodora`,
        `- Value (excl. VAT): 10`,
        `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`,
      ].join("\n");
      assert.equal(paymentPackage.toString(), output);
    });

    it("test not active state", () => {
      const output = [
        `Package: Teodora (inactive)`,
        `- Value (excl. VAT): 10`,
        `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`,
      ].join("\n");
      paymentPackage.active = false;
      assert.equal(paymentPackage.toString(), output);
    });
  });
});
