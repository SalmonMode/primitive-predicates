import { UndefinedAssertionError } from "./Errors.js";

/**
 * Assert the value is undefined.
 *
 * @throws {UndefinedAssertionError} if value is not undefined
 *
 * @param value an unknown value
 */
export function assertIsUndefined(value: unknown): asserts value is undefined {
  if (value !== undefined) {
    throw new UndefinedAssertionError("Value is not undefined");
  }
}
/**
 * Check if a value is undefined or not.
 *
 * @param value an unknown value
 * @returns true, if value is undefined, false, if it is not
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}
