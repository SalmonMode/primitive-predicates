/**
 * Type assertion function to check if a value is of type object or not.
 * 
 * Warning: Arrays are also of type object.
 * 
 * Because the type of [`null` is technically `object`]{@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards},
 * checking `typeof X === 'object' is not enough to be certain something is of type `object`.
 * We must also check that it does not equal `null` itself to be certain. The return type is `value
 * is object` (instead of `value is NonNullable<object>`) because TypeScript enforces that `null`
 * is not assignable to type `object`.
 * 
 * This type predicate is provided as a shortcut to simplify checking this criteria as it will be a
 * common operation with this client.
 * 
 * The client does not check for this itself, because it can only assume at most that some JSON is
 * coming back, but `null` is perfectly valid and parsable JSON on its own, and the server may be 
 * intended to provide exactly that.
 * 
 * @throws {TypeError} if value is not of type object
 * 
 * @param value an unknown value
 */
export function assertIsObject(value: unknown): asserts value is object {
  if (typeof value !== 'object' || value === null) {
    throw new TypeError("Value is not of type object");
  }
}

/**
 * Type predicate function to check if a value is of type object or not.
 * 
 * Warning: Arrays are also of type object.
 * 
 * Because the type of [`null` is technically `object`]{@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards},
 * checking `typeof X === 'object' is not enough to be certain something is of type `object`.
 * We must also check that it does not equal `null` itself to be certain. The return type is `value
 * is object` (instead of `value is NonNullable<object>`) because TypeScript enforces that `null`
 * is not assignable to type `object`.
 * 
 * This type predicate is provided as a shortcut to simplify checking this criteria as it will be a
 * common operation with this client.
 * 
 * The client does not check for this itself, because it can only assume at most that some JSON is
 * coming back, but `null` is perfectly valid and parsable JSON on its own, and the server may be 
 * intended to provide exactly that.
 * 
 * @param value true, if value is of type object, false, if it is not
 */
export function isObject(value: unknown): value is object {
  try {
    assertIsObject(value);
    return true;
  } catch {
    return false;
  }
}
