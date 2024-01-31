import { ArrayAssertionError, ArrayMemberAssertionError } from "./Errors.js";

/**
 * Assert the value is an array, and that each of its members are a specific type.
 *
 * @param value an unknown value
 * @param memberPredicateOrAssertion A type predicate function (`value is T`) or assertion function
 *    (`asserts value is T`)
 *
 * @throws {ArrayAssertionError} if value is not an array
 * @throws {ArrayMemberAssertionError} if one of the members of the array is not of the expected type, and the
 *    `memberPredicateOrAssertion` does not throw its own error.
 *
 * @example
 * ```typescript
 * function isString(item: unknown): item is string {
 *   return typeof item === 'string';
 * }
 *
 * let stringArray: unknown = ["hello", "world"];
 * if (assertIsArrayOf(stringArray, isString)) {
 *   // We're guaranteed that stringArray is an array of strings here
 * }
 * ```
 */
export function assertIsArrayOf<T>(
  value: unknown,
  memberPredicateOrAssertion:
    | ((obj: unknown) => obj is T)
    | ((obj: unknown) => asserts obj is T)
): asserts value is Array<T> {
  if (!Array.isArray(value)) {
    throw new ArrayAssertionError("Value is not an array");
  }
  console.log(value.every(memberPredicateOrAssertion));
  for (const item of value) {
    if (memberPredicateOrAssertion(item) === false) {
      throw new ArrayMemberAssertionError(
        "Value is not an array of the expected type"
      );
    }
  }
}

/**
 * Check if the value is an array or not, and that each of its members are a specific type.
 *
 * @param value the value to check the type of to make sure it is an array
 * @param memberPredicate the predicate that will be used to check each member of the array
 * @returns `true` if `value` is an array and all its items pass the `typePredicate`, `false` otherwise.
 *
 * @example
 * ```typescript
 * function isString(item: unknown): item is string {
 *   return typeof item === 'string';
 * }
 *
 * let stringArray: unknown = ["hello", "world"];
 * if (isArrayOf(stringArray, isString)) {
 *   // We're guaranteed that stringArray is an array of strings here
 * }
 * ```
 */
export function isArrayOf<T>(
  value: unknown,
  memberPredicate: (obj: unknown) => obj is T
): value is Array<T> {
  return Array.isArray(value) && value.every(memberPredicate);
}
