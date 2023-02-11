import * as chai from "chai";
import { isObject } from "./Object";

var expect = chai.expect;

describe("Object type predicate", function () {
  describe("Valid Object", function () {
    describe("Empty Object", function () {
      it("should be true", function () {
        expect(isObject({})).to.be.true;
      });
    });
    describe("Object With Content", function () {
      it("should be true", function () {
        expect(isObject({a: "apple"})).to.be.true;
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
