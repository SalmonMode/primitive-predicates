import { expect } from "chai";
import { NullAssertionError } from "./Errors";
import { assertIsNull, isNull } from "./Null";

describe("Null", function (): void {
  describe("Assertion", function (): void {
    describe("Valid Values", function (): void {
      describe("Null", function (): void {
        it("should not throw error", function (): void {
          expect(assertIsNull(null)).to.be.undefined;
        });
      });
    });
    describe("Invalid Values", function (): void {
      describe("Empty Object", function (): void {
        it("should throw NullAssertionError", function (): void {
          expect(() => assertIsNull({})).to.throw(NullAssertionError);
        });
      });
      describe("Number", function (): void {
        it("should throw NullAssertionError", function (): void {
          expect(() => assertIsNull(0)).to.throw(NullAssertionError);
        });
      });
      describe("String", function (): void {
        it("should throw NullAssertionError", function (): void {
          expect(() => assertIsNull("null")).to.throw(NullAssertionError);
        });
      });
      describe("Boolean", function (): void {
        it("should throw NullAssertionError", function (): void {
          expect(() => assertIsNull(true)).to.throw(NullAssertionError);
        });
      });
      describe("Array", function (): void {
        it("should throw NullAssertionError", function (): void {
          expect(() => assertIsNull([])).to.throw(NullAssertionError);
        });
      });
      describe("BigInt", function (): void {
        it("should throw NullAssertionError", function (): void {
          expect(() => assertIsNull(BigInt("782345729472934947927"))).to.throw(
            NullAssertionError
          );
        });
      });
      describe("Symbol", function (): void {
        it("should throw NullAssertionError", function (): void {
          expect(() => assertIsNull(Symbol("foo"))).to.throw(
            NullAssertionError
          );
        });
      });
    });
  });
  describe("Predicate", function () {
    describe("Valid Values", function () {
      describe("Null", function () {
        it("should be true", function () {
          expect(isNull(null)).to.be.true;
        });
      });
    });
    describe("Invalid Values", function () {
      describe("Empty Object", function () {
        it("should be false", function () {
          expect(isNull({})).to.be.false;
        });
      });
      describe("Number", function () {
        it("should be false", function () {
          expect(isNull(3)).to.be.false;
        });
      });
      describe("String", function () {
        it("should be false", function () {
          expect(isNull("null")).to.be.false;
        });
      });
      describe("Boolean", function () {
        it("should be false", function () {
          expect(isNull(true)).to.be.false;
        });
      });
      describe("Array", function () {
        it("should be false", function () {
          expect(isNull([])).to.be.false;
        });
      });
      describe("Undefined", function () {
        it("should be false", function () {
          expect(isNull(undefined)).to.be.false;
        });
      });
      describe("BigInt", function () {
        it("should be false", function () {
          expect(isNull(BigInt("237849723942492342"))).to.be.false;
        });
      });
      describe("Symbol", function () {
        it("should be false", function () {
          expect(isNull(Symbol("foo"))).to.be.false;
        });
      });
    });
  });
});
