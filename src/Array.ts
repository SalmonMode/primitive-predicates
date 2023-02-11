import { ArrayAssertionError } from "./Errors";

/**
 * Assert the value is an array.
 *
 * Warning: This does not verify that the items in the array are of any given type, so they will remain recognized as
 * unknown if the value is found to be an array.
 *
 * @throws {ArrayAssertionError} if value is not an array
 *
 * @param value an unknown value
 */
export function assertIsArray(value: unknown): asserts value is Array<unknown> {
  if (!Array.isArray(value)) {
    throw new ArrayAssertionError("Value is not an array");
  }
}

/**
 * Check if the value is an array or not.
 *
 * Warning: This does not verify that the items in the array are of any given type, so they will remain recognized as
 * unknown if the value is found to be an array.
 *
 * @param value true, if value is an object, false, if it is not
 */
export function isArray(value: unknown): value is Array<unknown> {
  return Array.isArray(value);
}
