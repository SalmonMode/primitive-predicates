import { SymbolAssertionError } from "./Errors.js";

/**
 * Assert the value is a Symbol.
 *
 * @throws {SymbolAssertionError} if value is not a Symbol
 *
 * @param value an unknown value
 */
export function assertIsSymbol(value: unknown): asserts value is symbol {
  if (typeof value !== "symbol") {
    throw new SymbolAssertionError("Value is not a Symbol");
  }
}
/**
 * Check if a value is a Symbol or not.
 *
 * @param value an unknown value
 * @returns true, if value is a Symbol, false, if it is not
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === "symbol";
}
