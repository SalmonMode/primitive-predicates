import { BooleanAssertionError } from "./Errors.js";

/**
 * Assert the value is a boolean.
 *
 * @throws {BooleanAssertionError} if value is not a boolean
 *
 * @param value an unknown value
 */
export function assertIsBoolean(value: unknown): asserts value is boolean {
  if (typeof value !== "boolean") {
    throw new BooleanAssertionError("Value is not a boolean");
  }
}
/**
 * Check if a value is a boolean or not.
 *
 * @param value an unknown value
 * @returns true, if value is a boolean, false, if it is not
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}
