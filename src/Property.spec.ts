import { expect } from "chai";
import { PropertyAssertionError } from "./Errors.js";
import { assertHasProperty, hasProperty } from "./Property.js";

describe("Property", function () {
  describe("Assertion", function () {
    describe("Valid Property", function () {
      it("should be true", function () {
        const value = { a: "apple" };
        expect(assertHasProperty(value, "a")).to.be.undefined;
      });
    });
    describe("Invalid Property", function () {
      it("should throw PropertyAssertionError", function () {
        const value = { a: "apple" };
        expect(() => assertHasProperty(value, "b")).to.throw(
          PropertyAssertionError
        );
      });
    });
  });
  describe("Predicate", function () {
    describe("Valid Property", function () {
      it("should be true", function () {
        const value = { a: "apple" };
        expect(hasProperty(value, "a")).to.be.true;
      });
    });
    describe("Invalid Property", function () {
      it("should be false", function () {
        const value = { a: "apple" };
        expect(hasProperty(value, "b")).to.be.false;
      });
    });
  });
});
