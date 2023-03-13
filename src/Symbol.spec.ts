import { expect } from "chai";
import { SymbolAssertionError } from "./Errors.js";
import { assertIsSymbol, isSymbol } from "./Symbol.js";

describe("Symbol", function (): void {
  describe("Assertion", function (): void {
    describe("Valid Values", function (): void {
      describe("Symbol", function (): void {
        it("should not throw error", function (): void {
          expect(assertIsSymbol(Symbol("foo"))).to.be.undefined;
        });
      });
    });
    describe("Invalid Values", function (): void {
      describe("Empty Object", function (): void {
        it("should throw SymbolAssertionError", function (): void {
          expect(() => assertIsSymbol({})).to.throw(SymbolAssertionError);
        });
      });
      describe("Number", function (): void {
        it("should throw SymbolAssertionError", function (): void {
          expect(() => assertIsSymbol(0)).to.throw(SymbolAssertionError);
        });
      });
      describe("String", function (): void {
        it("should throw SymbolAssertionError", function (): void {
          expect(() => assertIsSymbol("Symbol")).to.throw(SymbolAssertionError);
        });
      });
      describe("Boolean", function (): void {
        it("should throw SymbolAssertionError", function (): void {
          expect(() => assertIsSymbol(true)).to.throw(SymbolAssertionError);
        });
      });
      describe("Array", function (): void {
        it("should throw SymbolAssertionError", function (): void {
          expect(() => assertIsSymbol([])).to.throw(SymbolAssertionError);
        });
      });
      describe("Null", function (): void {
        it("should throw SymbolAssertionError", function (): void {
          expect(() => assertIsSymbol(null)).to.throw(SymbolAssertionError);
        });
      });
      describe("Undefined", function (): void {
        it("should throw SymbolAssertionError", function (): void {
          expect(() => assertIsSymbol(undefined)).to.throw(
            SymbolAssertionError
          );
        });
      });
      describe("BigInt", function (): void {
        it("should throw SymbolAssertionError", function (): void {
          expect(() => assertIsSymbol(BigInt("234789238402385"))).to.throw(
            SymbolAssertionError
          );
        });
      });
    });
  });
  describe("Predicate", function () {
    describe("Valid Values", function () {
      describe("Symbol", function () {
        it("should be true", function () {
          expect(isSymbol(Symbol("foo"))).to.be.true;
        });
      });
    });
    describe("Invalid Values", function () {
      describe("Empty Object", function () {
        it("should be false", function () {
          expect(isSymbol({})).to.be.false;
        });
      });
      describe("Number", function () {
        it("should be false", function () {
          expect(isSymbol(3)).to.be.false;
        });
      });
      describe("String", function () {
        it("should be false", function () {
          expect(isSymbol("Symbol")).to.be.false;
        });
      });
      describe("Boolean", function () {
        it("should be false", function () {
          expect(isSymbol(true)).to.be.false;
        });
      });
      describe("Array", function () {
        it("should be false", function () {
          expect(isSymbol([])).to.be.false;
        });
      });
      describe("Null", function () {
        it("should be false", function () {
          expect(isSymbol(null)).to.be.false;
        });
      });
      describe("Undefined", function () {
        it("should be false", function () {
          expect(isSymbol(undefined)).to.be.false;
        });
      });
      describe("BigInt", function () {
        it("should be false", function () {
          expect(isSymbol(BigInt("23784297497493"))).to.be.false;
        });
      });
    });
  });
});
