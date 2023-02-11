import { NullAssertionError } from "./Errors";

/**
 * Assert the value is null.
 *
 * @throws {NullAssertionError} if value is not null
 *
 * @param value an unknown value
 */
export function assertIsNull(value: unknown): asserts value is null {
  if (value !== null) {
    throw new NullAssertionError("Value is not null");
  }
}
/**
 * Check if a value is null or not.
 *
 * @param value an unknown value
 * @returns true, if value is null, false, if it is not
 */
export function isNull(value: unknown): value is null {
  return value === null;
}
