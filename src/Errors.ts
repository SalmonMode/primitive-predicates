/**
 * Thrown when a value is found to not be the expected type.
 */
export class AssertionError extends TypeError {
  constructor(message?: string) {
    super(message);

    Object.setPrototypeOf(this, AssertionError.prototype);
    this.name = new.target.name;
  }
}
/**
 * Thrown when a value is found to not be a string.
 */
export class StringAssertionError extends AssertionError {
  constructor(message?: string) {
    super(message);

    Object.setPrototypeOf(this, StringAssertionError.prototype);
    this.name = new.target.name;
  }
}
/**
 * Thrown when a value is found to not be an object.
 */
export class ObjectAssertionError extends AssertionError {
  constructor(message?: string) {
    super(message);

    Object.setPrototypeOf(this, ObjectAssertionError.prototype);
    this.name = new.target.name;
  }
}
/**
 * Thrown when a value is found to not be an array.
 *
 * This inherits from `ObjectAssertionError` because arrays are also objects.
 */
export class ArrayAssertionError extends ObjectAssertionError {
  constructor(message?: string) {
    super(message);

    Object.setPrototypeOf(this, ArrayAssertionError.prototype);
    this.name = new.target.name;
  }
}
