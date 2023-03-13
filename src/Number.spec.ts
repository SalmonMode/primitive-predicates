import { expect } from "chai";
import { NumberAssertionError } from "./Errors.js";
import { assertIsNumber, isNumber } from "./Number.js";

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
      describe("String", function (): void {
        it("should throw NumberAssertionError", function (): void {
          expect(() => assertIsNumber("0")).to.throw(NumberAssertionError);
        });
      });
      describe("Null", function (): void {
        it("should throw NumberAssertionError", function (): void {
          expect(() => assertIsNumber(null)).to.throw(NumberAssertionError);
        });
      });
      describe("Boolean", function (): void {
        it("should throw NumberAssertionError", function (): void {
          expect(() => assertIsNumber(true)).to.throw(NumberAssertionError);
        });
      });
      describe("Array", function (): void {
        it("should throw NumberAssertionError", function (): void {
          expect(() => assertIsNumber([])).to.throw(NumberAssertionError);
        });
      });
      describe("Undefined", function (): void {
        it("should throw NumberAssertionError", function (): void {
          expect(() => assertIsNumber(undefined)).to.throw(
            NumberAssertionError
          );
        });
      });
      describe("BigInt", function (): void {
        it("should throw NumberAssertionError", function (): void {
          expect(() =>
            assertIsNumber(BigInt("78234723947927492374923"))
          ).to.throw(NumberAssertionError);
        });
      });
      describe("Symbol", function (): void {
        it("should throw NumberAssertionError", function (): void {
          expect(() => assertIsNumber(Symbol("foo"))).to.throw(
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
      describe("String", function () {
        it("should be false", function () {
          expect(isNumber("3")).to.be.false;
        });
      });
      describe("Null", function () {
        it("should be false", function () {
          expect(isNumber(null)).to.be.false;
        });
      });
      describe("Boolean", function () {
        it("should be false", function () {
          expect(isNumber(true)).to.be.false;
        });
      });
      describe("Array", function () {
        it("should be false", function () {
          expect(isNumber([])).to.be.false;
        });
      });
      describe("Undefined", function () {
        it("should be false", function () {
          expect(isNumber(undefined)).to.be.false;
        });
      });
      describe("BigInt", function () {
        it("should be false", function () {
          expect(isNumber(BigInt("2342342389472794"))).to.be.false;
        });
      });
      describe("Symbol", function () {
        it("should be false", function () {
          expect(isNumber(Symbol("foo"))).to.be.false;
        });
      });
    });
  });
});
