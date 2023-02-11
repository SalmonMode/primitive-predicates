# primitive-predicates

[![codecov](https://codecov.io/gh/SalmonMode/primitive-predicates/branch/main/graph/badge.svg?token=E28MMT0TC6)](https://codecov.io/gh/SalmonMode/primitive-predicates)
[![Build](https://github.com/SalmonMode/primitive-predicates/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/SalmonMode/primitive-predicates/actions/workflows/npm-publish.yml)
[![Package status](https://img.shields.io/npm/v/primitive-predicates.svg)](https://www.npmjs.com/package/primitive-predicates)
[![License](https://img.shields.io/npm/l/primitive-predicates.svg)](https://opensource.org/licenses/MIT)

A simple TypeScript library providing type guards for the primitive types in JavaScript.

## What is it?

TypeScript will use [certain clues](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) to narrow the typing
information down as much as it can before runtime. To help the compiler do this, TypeScript provides two features that
this library uses to provide convenience functions:

1. [Type predicate functions](#predicates)
2. [Type assertion functions](#assertions)

## How to install

To install, just run:

```bash
npm install primitive-predicates
```

## Available functions

- `assertIsObject`
- `isObject`
- `assertIsArray`
- `isArray`
- `assertIsString`
- `isString`
- `assertIsNumber`
- `isNumber`

## How to import

Everything is available from the top level. Here's an example of how to import the functions:

```typescript
import { assertIsObject } from "primitive-predicates";
```

## Catching Assertion Errors

Each type assertion function throw their own type of error. Each of those errors, however, extends `AssertionError`
(defined and provided by this library), which itself extends `TypeError`. This should make it convenient for catching
thrown errors as desired while also allowing them to be easily distinguished from other types of errors.

To import the error classes to compare against during a `try`/`catch`, simply import them from the package like so:

```typescript
import { StringAssertionError } from "primitive-predicates";
```

These are the available error types, grouped according to their inheritance:

- `AssertionError`
  - `ObjectAssertionError`
    - `ArrayAssertionError`
  - `StringAssertionError`
  - `NumberAssertionError`

### Predicates

[Type predicate functions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) take in
an argument, and return a boolean that is `true` if the passed argument was the expected type, or `false` if it isn't.

For example:

```typescript
import { isString } from "primitive-predicates";

function doSomething(myArg: string): number;
function doSomething(myArg: number): string;
function doSomething(myArg: any): number | string {
  if (isString(myArg)) {
    return 42;
  }
  return "you gave me a number";
}

const aNumber = doSomething("definitely a string"); // The compiler will know 'aNumber' is a number.
const aString = doSomething(3); // The compiler will know 'aString' is a string.
```

### Assertions

[Type assertion functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions)
work much the same way as predicates, except they throw an error if the argument passed isn't of the expected type. This
is particularly useful when you're pretty sure something is a given type but you don't wanna have to mess around with
flow control. Simply plop an assertion down and everything after it assumes the value is that type.

For example:

```typescript
import { assertIsString } from "primitive-predicates";

function printUppercase(myArg: any) {
  assertIsString(myArg);
  console.log(myArg.toUppercase()); // compiler doesn't complain
}
```

## `object` and `null`

The `typeof` operator, as its name suggests, returns the name of the type of the value provided as a string. For
example, `typeof "hello"` would return `"string"`. But there's [a long existing "bug" in JavaScript](https://www.oreilly.com/library/view/you-dont-know/9781491905159/ch01.html#:~:text=It%20would%20have,of%20web%20software.)
that results in `typeof null` returning `"object"`. This manifests in TypeScript in many ways that can prove to be
frustrating.

TypeScript tries to help out by preventing us from passing `null` where things are explicitely typed as `object`, but
things can get messy and confusing. In order to properly check that something is _actually_ an `object` (and not `null`)
we have to do the following:

```typescript
const someVar: any = {};
if (someVar !== null && typeof someVar === "object") {
  // 'someVar' is still recognized as type 'any'
  someVar.thing(); // Compiler doesn't complain
}
```

The problem is that even after that check, the compiler will still see it as type `any`. This can be a real problem when
trying to be very strict with the typing, since the compiler won't be making sure you can only reference properties it
knows are there.

Luckily, this package provides that with convenience functions:

```typescript
const someVar: any = {};
if (isObject(someVar)) {
  // 'someVar' is now recognized as type 'object'
  someVar.thing(); // Compiler complains
}
```
