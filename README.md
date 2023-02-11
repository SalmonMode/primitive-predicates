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

1. Type predicate functions
2. Type assertion functions

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
