import { StringAssertionError } from "./Errors.js";

/**
 * Assert the value is a string.
 *
 * @throws {StringAssertionError} if value is not a string
 *
 * @param value an unknown value
 */
export function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new StringAssertionError("Value is not a string");
  }
}
/**
 * Check if a value is a string or not.
 *
 * @param value an unknown value
 * @returns true, if value is a string, false, if it is not
 */
export function isString(value: unknown): value is string {
  return typeof value === "string";
}
