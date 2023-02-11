import * as chai from "chai";
import { ArrayAssertionError } from "./Errors";
import { isArray, assertIsArray } from "./Array";

var expect = chai.expect;

describe("Array", function () {
  describe("Assertion", function () {
    describe("Valid Values", function () {
      describe("Empty Array", function () {
        it("should not throw error", function () {
          expect(assertIsArray([])).to.be.undefined;
        });
      });
      describe("Array With Content", function () {
        it("should not throw error", function () {
          expect(assertIsArray([123])).to.be.undefined;
        });
      });
    });
    describe("Invalid Values", function () {
      describe("Object", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArray({})).to.throw(ArrayAssertionError);
        });
      });
      describe("String", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArray("Hello")).to.throw(ArrayAssertionError);
        });
      });
      describe("Empty String", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArray("")).to.throw(ArrayAssertionError);
        });
      });
      describe("Number", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArray(3)).to.throw(ArrayAssertionError);
        });
      });
      describe("Null", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArray(null)).to.throw(ArrayAssertionError);
        });
      });
      describe("Boolean", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArray(true)).to.throw(ArrayAssertionError);
        });
      });
      describe("Undefined", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArray(undefined)).to.throw(ArrayAssertionError);
        });
      });
      describe("BigInt", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArray(BigInt("34237849237488234"))).to.throw(
            ArrayAssertionError
          );
        });
      });
      describe("Symbol", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArray(Symbol("foo"))).to.throw(
            ArrayAssertionError
          );
        });
      });
    });
  });
  describe("Predicate", function () {
    describe("Valid Values", function () {
      describe("Empty Array", function () {
        it("should be true", function () {
          expect(isArray([])).to.be.true;
        });
      });
      describe("Array With Content", function () {
        it("should be true", function () {
          expect(isArray([123])).to.be.true;
        });
      });
    });
    describe("Invalid Values", function () {
      describe("Object", function () {
        it("should be false", function () {
          expect(isArray({})).to.be.false;
        });
      });
      describe("String", function () {
        it("should be false", function () {
          expect(isArray("Hello")).to.be.false;
        });
      });
      describe("Empty String", function () {
        it("should be false", function () {
          expect(isArray("")).to.be.false;
        });
      });
      describe("Number", function () {
        it("should be false", function () {
          expect(isArray(3)).to.be.false;
        });
      });
      describe("Null", function () {
        it("should be false", function () {
          expect(isArray(null)).to.be.false;
        });
      });
      describe("Boolean", function () {
        it("should be false", function () {
          expect(isArray(true)).to.be.false;
        });
      });
      describe("Undefined", function () {
        it("should be false", function () {
          expect(isArray(undefined)).to.be.false;
        });
      });
      describe("BigInt", function () {
        it("should be false", function () {
          expect(isArray(BigInt("2348978920347239572"))).to.be.false;
        });
      });
      describe("Symbol", function () {
        it("should be false", function () {
          expect(isArray(Symbol("foo"))).to.be.false;
        });
      });
    });
  });
});
