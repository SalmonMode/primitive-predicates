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
 * Thrown when a value is found to not be of type string.
 */
export class StringAssertionError extends AssertionError {
  constructor(message?: string) {
    super(message);

    Object.setPrototypeOf(this, StringAssertionError.prototype);
    this.name = new.target.name;
  }
}
/**
 * Thrown when a value is found to not be of type object.
 */
export class ObjectAssertionError extends AssertionError {
  constructor(message?: string) {
    super(message);

    Object.setPrototypeOf(this, ObjectAssertionError.prototype);
    this.name = new.target.name;
  }
}
