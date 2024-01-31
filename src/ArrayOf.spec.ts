import { assertIsArrayOf, isArrayOf } from "./ArrayOf.js";
import { assertIsString, isString } from "./String.js";
import { expect } from "chai";
import {
  ArrayAssertionError,
  ArrayMemberAssertionError,
  StringAssertionError,
} from "./Errors.js";

describe("Array Of", function () {
  describe("Assertion", function () {
    describe("Valid Values", function () {
      describe("Empty Array", function () {
        it("should not throw error", function () {
          expect(assertIsArrayOf<string>([], isString)).to.be.undefined;
        });
      });
      describe("Array With Content and Type Predicate", function () {
        it("should not throw error", function () {
          expect(assertIsArrayOf<string>(["hello"], isString)).to.be.undefined;
        });
      });
      describe("Array With Content and Type Assertion", function () {
        it("should not throw error", function () {
          expect(assertIsArrayOf<string>(["hello"], assertIsString)).to.be
            .undefined;
        });
      });
    });
    describe("Invalid Values", function () {
      describe("Object and Type Predicate", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArrayOf<string>({}, isString)).to.throw(
            ArrayAssertionError
          );
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() => assertIsArrayOf<string>({}, isString)).to.not.throw(
            ArrayMemberAssertionError
          );
        });
      });
      describe("Object and Type Assertion", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArrayOf<string>({}, assertIsString)).to.throw(
            ArrayAssertionError
          );
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() =>
            assertIsArrayOf<string>({}, assertIsString)
          ).to.not.throw(ArrayMemberAssertionError);
        });
      });
      describe("String and Type Predicate", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArrayOf("Hello", isString)).to.throw(
            ArrayAssertionError
          );
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() => assertIsArrayOf("Hello", isString)).to.not.throw(
            ArrayMemberAssertionError
          );
        });
      });
      describe("String and Type Assertion", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArrayOf("Hello", assertIsString)).to.throw(
            ArrayAssertionError
          );
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() => assertIsArrayOf("Hello", assertIsString)).to.not.throw(
            ArrayMemberAssertionError
          );
        });
      });
      describe("Empty  and Type PredicateString", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArrayOf("", isString)).to.throw(
            ArrayAssertionError
          );
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() => assertIsArrayOf("", isString)).to.not.throw(
            ArrayMemberAssertionError
          );
        });
      });
      describe("Empty String and Type Assertion", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArrayOf("", assertIsString)).to.throw(
            ArrayAssertionError
          );
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() => assertIsArrayOf("", assertIsString)).to.not.throw(
            ArrayMemberAssertionError
          );
        });
      });
      describe("Number and Type Predicate", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArrayOf(3, isString)).to.throw(
            ArrayAssertionError
          );
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() => assertIsArrayOf(3, isString)).to.not.throw(
            ArrayMemberAssertionError
          );
        });
      });
      describe("Number and Type Assertion", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArrayOf(3, assertIsString)).to.throw(
            ArrayAssertionError
          );
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() => assertIsArrayOf(3, assertIsString)).to.not.throw(
            ArrayMemberAssertionError
          );
        });
      });
      describe("Null and Type Predicate", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArrayOf(null, isString)).to.throw(
            ArrayAssertionError
          );
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() => assertIsArrayOf(null, isString)).to.not.throw(
            ArrayMemberAssertionError
          );
        });
      });
      describe("Null and Type Assertion", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArrayOf(null, assertIsString)).to.throw(
            ArrayAssertionError
          );
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() => assertIsArrayOf(null, assertIsString)).to.not.throw(
            ArrayMemberAssertionError
          );
        });
      });
      describe("Boolean and Type Predicate", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArrayOf(true, isString)).to.throw(
            ArrayAssertionError
          );
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() => assertIsArrayOf(true, isString)).to.not.throw(
            ArrayMemberAssertionError
          );
        });
      });
      describe("Boolean and Type Assertion", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArrayOf(true, assertIsString)).to.throw(
            ArrayAssertionError
          );
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() => assertIsArrayOf(true, assertIsString)).to.not.throw(
            ArrayMemberAssertionError
          );
        });
      });
      describe("Undefined and Type Predicate", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArrayOf(undefined, isString)).to.throw(
            ArrayAssertionError
          );
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() => assertIsArrayOf(undefined, isString)).to.not.throw(
            ArrayMemberAssertionError
          );
        });
      });
      describe("Undefined and Type Assertion", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArrayOf(undefined, assertIsString)).to.throw(
            ArrayAssertionError
          );
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() => assertIsArrayOf(undefined, assertIsString)).to.not.throw(
            ArrayMemberAssertionError
          );
        });
      });
      describe("BigInt and Type Predicate", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() =>
            assertIsArrayOf(BigInt("34237849237488234"), isString)
          ).to.throw(ArrayAssertionError);
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() =>
            assertIsArrayOf(BigInt("34237849237488234"), isString)
          ).to.throw(ArrayMemberAssertionError);
        });
      });
      describe("BigInt and Type Assertion", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() =>
            assertIsArrayOf(BigInt("34237849237488234"), assertIsString)
          ).to.throw(ArrayAssertionError);
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() =>
            assertIsArrayOf(BigInt("34237849237488234"), assertIsString)
          ).to.throw(ArrayMemberAssertionError);
        });
      });
      describe("Symbol and Type Predicate", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArrayOf(Symbol("foo"), isString)).to.throw(
            ArrayAssertionError
          );
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() => assertIsArrayOf(Symbol("foo"), isString)).to.throw(
            ArrayMemberAssertionError
          );
        });
      });
      describe("Symbol and Type Assertion", function () {
        it("should throw ArrayAssertionError", function () {
          expect(() => assertIsArrayOf(Symbol("foo"), assertIsString)).to.throw(
            ArrayAssertionError
          );
        });
        it("should not throw ArrayMemberAssertionError", function () {
          expect(() => assertIsArrayOf(Symbol("foo"), assertIsString)).to.throw(
            ArrayMemberAssertionError
          );
        });
      });
      describe("Invalid Member Type Predicate", function () {
        it("should throw ArrayMemberAssertionError", function () {
          expect(() => assertIsArrayOf([1], isString)).to.throw(
            ArrayMemberAssertionError
          );
        });
      });
      describe("Invalid Member Type Assertion", function () {
        it("should throw StringAssertionError", function () {
          expect(() => assertIsArrayOf([1], assertIsString)).to.throw(
            StringAssertionError
          );
        });
      });
    });
  });
  describe("Predicate", function () {
    describe("Valid Values", function () {
      describe("Empty Array", function () {
        it("should be true", function () {
          expect(isArrayOf<string>([], isString)).to.be.true;
        });
      });
      describe("Array With Content", function () {
        it("should be true", function () {
          expect(isArrayOf<string>(["123"], isString)).to.be.true;
        });
      });
    });
    describe("Invalid Values", function () {
      describe("Array with Invalid Member", function () {
        it("should be false", function () {
          expect(isArrayOf<string>([123], isString)).to.be.false;
        });
      });
      describe("Object", function () {
        it("should be false", function () {
          expect(isArrayOf<string>({}, isString)).to.be.false;
        });
      });
      describe("String", function () {
        it("should be false", function () {
          expect(isArrayOf<string>("Hello", isString)).to.be.false;
        });
      });
      describe("Empty String", function () {
        it("should be false", function () {
          expect(isArrayOf<string>("", isString)).to.be.false;
        });
      });
      describe("Number", function () {
        it("should be false", function () {
          expect(isArrayOf<string>(3, isString)).to.be.false;
        });
      });
      describe("Null", function () {
        it("should be false", function () {
          expect(isArrayOf<string>(null, isString)).to.be.false;
        });
      });
      describe("Boolean", function () {
        it("should be false", function () {
          expect(isArrayOf<string>(true, isString)).to.be.false;
        });
      });
      describe("Undefined", function () {
        it("should be false", function () {
          expect(isArrayOf<string>(undefined, isString)).to.be.false;
        });
      });
      describe("BigInt", function () {
        it("should be false", function () {
          expect(isArrayOf<string>(BigInt("2348978920347239572"), isString)).to
            .be.false;
        });
      });
      describe("Symbol", function () {
        it("should be false", function () {
          expect(isArrayOf<string>(Symbol("foo"), isString)).to.be.false;
        });
      });
    });
  });
});
