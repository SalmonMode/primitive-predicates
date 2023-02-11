import { expect } from "chai";
import { assertIsString, isString } from "./String";

describe("String", function (): void {
  describe("Assertion", function (): void {
    describe("Valid String", function (): void {
      it("should not throw error", function (): void {
        expect(assertIsString("")).to.be.undefined;
      });
    });
    describe("Invalid Values", function (): void {
      describe("Empty Object", function (): void {
        it("should be false", function (): void {
          expect(() => assertIsString({})).to.throw(TypeError);
        });
      });
      describe("Object is number", function (): void {
        it("should be false", function (): void {
          expect(() => assertIsString(0)).to.throw(TypeError);
        });
      });
      describe("Object is null", function (): void {
        it("should be false", function (): void {
          expect(() => assertIsString(null)).to.throw(TypeError);
        });
      });
      describe("Object is boolean", function (): void {
        it("should be false", function (): void {
          expect(() => assertIsString(true)).to.throw(TypeError);
        });
      });
      describe("Object is array", function (): void {
        it("should be false", function (): void {
          expect(() => assertIsString([])).to.throw(TypeError);
        });
      });
      describe("Object is undefined", function (): void {
        it("should be false", function (): void {
          expect(() => assertIsString(undefined)).to.throw(TypeError);
        });
      });
    });
  });
  describe("Predicate", function () {
    describe("Valid String", function () {
      it("should be true", function () {
        expect(isString("")).to.be.true;
      });
    });
    describe("Invalid Values", function () {
      describe("Empty Object", function () {
        it("should be false", function () {
          expect(isString({})).to.be.false;
        });
      });
      describe("Object is number", function () {
        it("should be false", function () {
          expect(isString(3)).to.be.false;
        });
      });
      describe("Object is null", function () {
        it("should be false", function () {
          expect(isString(null)).to.be.false;
        });
      });
      describe("Object is boolean", function () {
        it("should be false", function () {
          expect(isString(true)).to.be.false;
        });
      });
      describe("Object is array", function () {
        it("should be false", function () {
          expect(isString([])).to.be.false;
        });
      });
      describe("Object is undefined", function () {
        it("should be false", function () {
          expect(isString(undefined)).to.be.false;
        });
      });
    });
  });
});
