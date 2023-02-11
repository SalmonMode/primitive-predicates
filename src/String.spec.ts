import { expect } from "chai";
import { StringAssertionError } from "./Errors";
import { assertIsString, isString } from "./String";

describe("String", function (): void {
  describe("Assertion", function (): void {
    describe("Valid Values", function (): void {
      describe("String", function (): void {
        it("should not throw error", function (): void {
          expect(assertIsString("")).to.be.undefined;
        });
      });
    });
    describe("Invalid Values", function (): void {
      describe("Empty Object", function (): void {
        it("should throw StringAssertionError", function (): void {
          expect(() => assertIsString({})).to.throw(StringAssertionError);
        });
      });
      describe("Number", function (): void {
        it("should throw StringAssertionError", function (): void {
          expect(() => assertIsString(0)).to.throw(StringAssertionError);
        });
      });
      describe("Null", function (): void {
        it("should throw StringAssertionError", function (): void {
          expect(() => assertIsString(null)).to.throw(StringAssertionError);
        });
      });
      describe("Boolean", function (): void {
        it("should throw StringAssertionError", function (): void {
          expect(() => assertIsString(true)).to.throw(StringAssertionError);
        });
      });
      describe("Array", function (): void {
        it("should throw StringAssertionError", function (): void {
          expect(() => assertIsString([])).to.throw(StringAssertionError);
        });
      });
      describe("Undefined", function (): void {
        it("should throw StringAssertionError", function (): void {
          expect(() => assertIsString(undefined)).to.throw(
            StringAssertionError
          );
        });
      });
    });
  });
  describe("Predicate", function () {
    describe("Valid Values", function () {
      describe("String", function () {
        it("should be true", function () {
          expect(isString("")).to.be.true;
        });
      });
    });
    describe("Invalid Values", function () {
      describe("Empty Object", function () {
        it("should be false", function () {
          expect(isString({})).to.be.false;
        });
      });
      describe("Number", function () {
        it("should be false", function () {
          expect(isString(3)).to.be.false;
        });
      });
      describe("Null", function () {
        it("should be false", function () {
          expect(isString(null)).to.be.false;
        });
      });
      describe("Boolean", function () {
        it("should be false", function () {
          expect(isString(true)).to.be.false;
        });
      });
      describe("Array", function () {
        it("should be false", function () {
          expect(isString([])).to.be.false;
        });
      });
      describe("Undefined", function () {
        it("should be false", function () {
          expect(isString(undefined)).to.be.false;
        });
      });
    });
  });
});
