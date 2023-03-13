import { BigIntAssertionError } from "./Errors.js";

/**
 * Assert the value is a BigInt.
 *
 * @throws {BigIntAssertionError} if value is not a BigInt
 *
 * @param value an unknown value
 */
export function assertIsBigInt(value: unknown): asserts value is bigint {
  if (typeof value !== "bigint") {
    throw new BigIntAssertionError("Value is not a BigInt");
  }
}
/**
 * Check if a value is a BigInt or not.
 *
 * @param value an unknown value
 * @returns true, if value is a BigInt, false, if it is not
 */
export function isBigInt(value: unknown): value is bigint {
  return typeof value === "bigint";
}
