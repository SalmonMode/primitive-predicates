import { NumberAssertionError } from "./Errors.js";

/**
 * Assert the value is a number.
 *
 * @throws {NumberAssertionError} if value is not a number
 *
 * @param value an unknown value
 */
export function assertIsNumber(value: unknown): asserts value is number {
  if (typeof value !== "number") {
    throw new NumberAssertionError("Value is not a number");
  }
}
/**
 * Check if a value is a number or not.
 *
 * @param value an unknown value
 * @returns true, if value is a number, false, if it is not
 */
export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}
