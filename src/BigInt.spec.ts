import { expect } from "chai";
import { BigIntAssertionError } from "./Errors";
import { assertIsBigInt, isBigInt } from "./BigInt";

describe("BigInt", function (): void {
  describe("Assertion", function (): void {
    describe("Valid Values", function (): void {
      describe("BigInt", function (): void {
        it("should not throw error", function (): void {
          expect(assertIsBigInt(BigInt("12342141431412414"))).to.be.undefined;
        });
      });
    });
    describe("Invalid Values", function (): void {
      describe("Empty Object", function (): void {
        it("should throw BigIntAssertionError", function (): void {
          expect(() => assertIsBigInt({})).to.throw(BigIntAssertionError);
        });
      });
      describe("Number", function (): void {
        it("should throw BigIntAssertionError", function (): void {
          expect(() => assertIsBigInt(0)).to.throw(BigIntAssertionError);
        });
      });
      describe("String", function (): void {
        it("should throw BigIntAssertionError", function (): void {
          expect(() => assertIsBigInt("BigInt")).to.throw(BigIntAssertionError);
        });
      });
      describe("Boolean", function (): void {
        it("should throw BigIntAssertionError", function (): void {
          expect(() => assertIsBigInt(true)).to.throw(BigIntAssertionError);
        });
      });
      describe("Array", function (): void {
        it("should throw BigIntAssertionError", function (): void {
          expect(() => assertIsBigInt([])).to.throw(BigIntAssertionError);
        });
      });
      describe("Null", function (): void {
        it("should throw BigIntAssertionError", function (): void {
          expect(() => assertIsBigInt(null)).to.throw(BigIntAssertionError);
        });
      });
      describe("Undefined", function (): void {
        it("should throw BigIntAssertionError", function (): void {
          expect(() => assertIsBigInt(undefined)).to.throw(
            BigIntAssertionError
          );
        });
      });
      describe("Symbol", function (): void {
        it("should throw BigIntAssertionError", function (): void {
          expect(() => assertIsBigInt(Symbol("foo"))).to.throw(
            BigIntAssertionError
          );
        });
      });
    });
  });
  describe("Predicate", function () {
    describe("Valid Values", function () {
      describe("BigInt", function () {
        it("should be true", function () {
          expect(isBigInt(BigInt("23458792943278423947"))).to.be.true;
        });
      });
    });
    describe("Invalid Values", function () {
      describe("Empty Object", function () {
        it("should be false", function () {
          expect(isBigInt({})).to.be.false;
        });
      });
      describe("Number", function () {
        it("should be false", function () {
          expect(isBigInt(3)).to.be.false;
        });
      });
      describe("String", function () {
        it("should be false", function () {
          expect(isBigInt("BigInt")).to.be.false;
        });
      });
      describe("Boolean", function () {
        it("should be false", function () {
          expect(isBigInt(true)).to.be.false;
        });
      });
      describe("Array", function () {
        it("should be false", function () {
          expect(isBigInt([])).to.be.false;
        });
      });
      describe("Null", function () {
        it("should be false", function () {
          expect(isBigInt(null)).to.be.false;
        });
      });
      describe("Undefined", function () {
        it("should be false", function () {
          expect(isBigInt(undefined)).to.be.false;
        });
      });
      describe("Symbol", function () {
        it("should be false", function () {
          expect(isBigInt(Symbol("foo"))).to.be.false;
        });
      });
    });
  });
});
