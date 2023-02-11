import { expect } from "chai";
import { UndefinedAssertionError } from "./Errors";
import { assertIsUndefined, isUndefined } from "./Undefined";

describe("Undefined", function (): void {
  describe("Assertion", function (): void {
    describe("Valid Values", function (): void {
      describe("Undefined", function (): void {
        it("should not throw error", function (): void {
          expect(assertIsUndefined(undefined)).to.be.undefined;
        });
      });
    });
    describe("Invalid Values", function (): void {
      describe("Empty Object", function (): void {
        it("should throw UndefinedAssertionError", function (): void {
          expect(() => assertIsUndefined({})).to.throw(UndefinedAssertionError);
        });
      });
      describe("Number", function (): void {
        it("should throw UndefinedAssertionError", function (): void {
          expect(() => assertIsUndefined(0)).to.throw(UndefinedAssertionError);
        });
      });
      describe("String", function (): void {
        it("should throw UndefinedAssertionError", function (): void {
          expect(() => assertIsUndefined("Undefined")).to.throw(
            UndefinedAssertionError
          );
        });
      });
      describe("Boolean", function (): void {
        it("should throw UndefinedAssertionError", function (): void {
          expect(() => assertIsUndefined(true)).to.throw(
            UndefinedAssertionError
          );
        });
      });
      describe("Array", function (): void {
        it("should throw UndefinedAssertionError", function (): void {
          expect(() => assertIsUndefined([])).to.throw(UndefinedAssertionError);
        });
      });
      describe("Null", function (): void {
        it("should throw UndefinedAssertionError", function (): void {
          expect(() => assertIsUndefined(null)).to.throw(
            UndefinedAssertionError
          );
        });
      });
      describe("BigInt", function (): void {
        it("should throw UndefinedAssertionError", function (): void {
          expect(() =>
            assertIsUndefined(BigInt("237847294723894237489"))
          ).to.throw(UndefinedAssertionError);
        });
      });
      describe("Symbol", function (): void {
        it("should throw UndefinedAssertionError", function (): void {
          expect(() => assertIsUndefined(Symbol("foo"))).to.throw(
            UndefinedAssertionError
          );
        });
      });
    });
  });
  describe("Predicate", function () {
    describe("Valid Values", function () {
      describe("Undefined", function () {
        it("should be true", function () {
          expect(isUndefined(undefined)).to.be.true;
        });
      });
    });
    describe("Invalid Values", function () {
      describe("Empty Object", function () {
        it("should be false", function () {
          expect(isUndefined({})).to.be.false;
        });
      });
      describe("Number", function () {
        it("should be false", function () {
          expect(isUndefined(3)).to.be.false;
        });
      });
      describe("String", function () {
        it("should be false", function () {
          expect(isUndefined("Undefined")).to.be.false;
        });
      });
      describe("Boolean", function () {
        it("should be false", function () {
          expect(isUndefined(true)).to.be.false;
        });
      });
      describe("Array", function () {
        it("should be false", function () {
          expect(isUndefined([])).to.be.false;
        });
      });
      describe("Null", function () {
        it("should be false", function () {
          expect(isUndefined(null)).to.be.false;
        });
      });
      describe("BigInt", function () {
        it("should be false", function () {
          expect(isUndefined(BigInt("237482749378472947932"))).to.be.false;
        });
      });
      describe("Symbol", function () {
        it("should be false", function () {
          expect(isUndefined(Symbol("foo"))).to.be.false;
        });
      });
    });
  });
});
