import { BigIntAssertionError } from "./Errors";

/**
 * Assert the value is a BigInt.
 *
 * @throws {BigIntAssertionError} if value is not a BigInt
 *
 * @param value an unknown value
 */
export function assertIsBigInt(value: unknown): asserts value is BigInt {
  if (typeof value !== "bigint") {
    throw new BigIntAssertionError("Value is not BigInt");
  }
}
/**
 * Check if a value is a BigInt or not.
 *
 * @param value an unknown value
 * @returns true, if value is a BigInt, false, if it is not
 */
export function isBigInt(value: unknown): value is BigInt {
  return typeof value === "bigint";
}
