import * as chai from "chai";
import { isObject, assertIsObject } from "./Object";

var expect = chai.expect;

describe("Object", function () {
  describe("Assertion", function () {
    describe("Valid Object", function () {
      describe("Empty Object", function () {
        it("should not throw error", function () {
          expect(assertIsObject({})).to.be.undefined;
        });
      });
      describe("Object With Content", function () {
        it("should not throw error", function () {
          expect(assertIsObject({ a: "apple" })).to.be.undefined;
        });
      });
      describe("Array", function () {
        it("should not throw error", function () {
          expect(assertIsObject([])).to.be.undefined;
        });
      });
    });
    describe("Invalid Object", function () {
      describe("String", function () {
        it("should throw TypeError", function () {
          expect(() => assertIsObject("Hello")).to.throw(TypeError);
        });
      });
      describe("Empty String", function () {
        it("should throw TypeError", function () {
          expect(() => assertIsObject("")).to.throw(TypeError);
        });
      });
      describe("Number", function () {
        it("should throw TypeError", function () {
          expect(() => assertIsObject(3)).to.throw(TypeError);
        });
      });
      describe("Null", function () {
        it("should throw TypeError", function () {
          expect(() => assertIsObject(null)).to.throw(TypeError);
        });
      });
      describe("Boolean", function () {
        it("should throw TypeError", function () {
          expect(() => assertIsObject(true)).to.throw(TypeError);
        });
      });
      describe("Undefined", function () {
        it("should throw TypeError", function () {
          expect(() => assertIsObject(undefined)).to.throw(TypeError);
        });
      });
    });
  });
  describe("Predicate", function () {
    describe("Valid Object", function () {
      describe("Empty Object", function () {
        it("should be true", function () {
          expect(isObject({})).to.be.true;
        });
      });
      describe("Object With Content", function () {
        it("should be true", function () {
          expect(isObject({ a: "apple" })).to.be.true;
        });
      });
      describe("Array", function () {
        it("should be true", function () {
          expect(isObject([])).to.be.true;
        });
      });
    });
    describe("Invalid Object", function () {
      describe("String", function () {
        it("should be false", function () {
          expect(isObject("Hello")).to.be.false;
        });
      });
      describe("Empty String", function () {
        it("should be false", function () {
          expect(isObject("")).to.be.false;
        });
      });
      describe("Number", function () {
        it("should be false", function () {
          expect(isObject(3)).to.be.false;
        });
      });
      describe("Null", function () {
        it("should be false", function () {
          expect(isObject(null)).to.be.false;
        });
      });
      describe("Boolean", function () {
        it("should be false", function () {
          expect(isObject(true)).to.be.false;
        });
      });
      describe("Undefined", function () {
        it("should be false", function () {
          expect(isObject(undefined)).to.be.false;
        });
      });
    });
  });
});
