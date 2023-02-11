import { expect } from "chai";
import { NumberAssertionError } from "./Errors";
import { assertIsNumber, isNumber } from "./Number";

describe("Number", function (): void {
  describe("Assertion", function (): void {
    describe("Valid Values", function (): void {
      describe("Number", function (): void {
        it("should not throw error", function (): void {
          expect(assertIsNumber(0)).to.be.undefined;
        });
      });
      describe("NaN", function (): void {
        it("should not throw error", function (): void {
          expect(assertIsNumber(NaN)).to.be.undefined;
        });
      });
      describe("Infinity", function (): void {
        it("should not throw error", function (): void {
          expect(assertIsNumber(Infinity)).to.be.undefined;
        });
      });
    });
    describe("Invalid Values", function (): void {
      describe("Empty Object", function (): void {
        it("should throw NumberAssertionError", function (): void {
          expect(() => assertIsNumber({})).to.throw(NumberAssertionError);
        });
      });
      describe("Object is string", function (): void {
        it("should throw NumberAssertionError", function (): void {
          expect(() => assertIsNumber("0")).to.throw(NumberAssertionError);
        });
      });
      describe("Object is null", function (): void {
        it("should throw NumberAssertionError", function (): void {
          expect(() => assertIsNumber(null)).to.throw(NumberAssertionError);
        });
      });
      describe("Object is boolean", function (): void {
        it("should throw NumberAssertionError", function (): void {
          expect(() => assertIsNumber(true)).to.throw(NumberAssertionError);
        });
      });
      describe("Object is array", function (): void {
        it("should throw NumberAssertionError", function (): void {
          expect(() => assertIsNumber([])).to.throw(NumberAssertionError);
        });
      });
      describe("Object is undefined", function (): void {
        it("should throw NumberAssertionError", function (): void {
          expect(() => assertIsNumber(undefined)).to.throw(
            NumberAssertionError
          );
        });
      });
    });
  });
  describe("Predicate", function () {
    describe("Valid Values", function (): void {
      describe("Number", function (): void {
        it("should be true", function (): void {
          expect(isNumber(0)).to.be.true;
        });
      });
      describe("NaN", function (): void {
        it("should be true", function (): void {
          expect(isNumber(NaN)).to.be.true;
        });
      });
      describe("Infinity", function (): void {
        it("should be true", function (): void {
          expect(isNumber(Infinity)).to.be.true;
        });
      });
    });
    describe("Invalid Values", function () {
      describe("Empty Object", function () {
        it("should be false", function () {
          expect(isNumber({})).to.be.false;
        });
      });
      describe("Object is string", function () {
        it("should be false", function () {
          expect(isNumber("3")).to.be.false;
        });
      });
      describe("Object is null", function () {
        it("should be false", function () {
          expect(isNumber(null)).to.be.false;
        });
      });
      describe("Object is boolean", function () {
        it("should be false", function () {
          expect(isNumber(true)).to.be.false;
        });
      });
      describe("Object is array", function () {
        it("should be false", function () {
          expect(isNumber([])).to.be.false;
        });
      });
      describe("Object is undefined", function () {
        it("should be false", function () {
          expect(isNumber(undefined)).to.be.false;
        });
      });
    });
  });
});
