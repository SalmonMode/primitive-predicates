import { expect } from "chai";
import { BooleanAssertionError } from "./Errors.js";
import { assertIsBoolean, isBoolean } from "./Boolean.js";

describe("Boolean", function (): void {
  describe("Assertion", function (): void {
    describe("Valid Values", function (): void {
      describe("True", function (): void {
        it("should not throw error", function (): void {
          expect(assertIsBoolean(true)).to.be.undefined;
        });
      });
      describe("False", function (): void {
        it("should not throw error", function (): void {
          expect(assertIsBoolean(false)).to.be.undefined;
        });
      });
    });
    describe("Invalid Values", function (): void {
      describe("Empty Object", function (): void {
        it("should throw BooleanAssertionError", function (): void {
          expect(() => assertIsBoolean({})).to.throw(BooleanAssertionError);
        });
      });
      describe("Number", function (): void {
        it("should throw BooleanAssertionError", function (): void {
          expect(() => assertIsBoolean(0)).to.throw(BooleanAssertionError);
        });
      });
      describe("Null", function (): void {
        it("should throw BooleanAssertionError", function (): void {
          expect(() => assertIsBoolean(null)).to.throw(BooleanAssertionError);
        });
      });
      describe("String", function (): void {
        it("should throw BooleanAssertionError", function (): void {
          expect(() => assertIsBoolean("true")).to.throw(BooleanAssertionError);
        });
      });
      describe("Array", function (): void {
        it("should throw BooleanAssertionError", function (): void {
          expect(() => assertIsBoolean([])).to.throw(BooleanAssertionError);
        });
      });
      describe("Undefined", function (): void {
        it("should throw BooleanAssertionError", function (): void {
          expect(() => assertIsBoolean(undefined)).to.throw(
            BooleanAssertionError
          );
        });
      });
      describe("BigInt", function (): void {
        it("should throw BooleanAssertionError", function (): void {
          expect(() =>
            assertIsBoolean(BigInt("2347824737274923794279"))
          ).to.throw(BooleanAssertionError);
        });
      });
      describe("Symbol", function (): void {
        it("should throw BooleanAssertionError", function (): void {
          expect(() => assertIsBoolean(Symbol("foo"))).to.throw(
            BooleanAssertionError
          );
        });
      });
    });
  });
  describe("Predicate", function () {
    describe("Valid Values", function () {
      describe("True", function (): void {
        it("should be true", function (): void {
          expect(isBoolean(true)).to.be.true;
        });
      });
      describe("False", function (): void {
        it("should be true", function (): void {
          expect(isBoolean(false)).to.be.true;
        });
      });
    });
    describe("Invalid Values", function () {
      describe("Empty Object", function () {
        it("should be false", function () {
          expect(isBoolean({})).to.be.false;
        });
      });
      describe("Number", function () {
        it("should be false", function () {
          expect(isBoolean(3)).to.be.false;
        });
      });
      describe("Null", function () {
        it("should be false", function () {
          expect(isBoolean(null)).to.be.false;
        });
      });
      describe("String", function () {
        it("should be false", function () {
          expect(isBoolean("true")).to.be.false;
        });
      });
      describe("Array", function () {
        it("should be false", function () {
          expect(isBoolean([])).to.be.false;
        });
      });
      describe("Undefined", function () {
        it("should be false", function () {
          expect(isBoolean(undefined)).to.be.false;
        });
      });
      describe("BigInt", function () {
        it("should be false", function () {
          expect(isBoolean(BigInt("236784592678423899798"))).to.be.false;
        });
      });
      describe("Symbol", function () {
        it("should be false", function () {
          expect(isBoolean(Symbol("foo"))).to.be.false;
        });
      });
    });
  });
});
