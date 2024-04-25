import { validateSaltRounds } from "@/helpers/genSalt";

describe("validateSaltRounds", () => {
  // Test 1: Valid salt rounds
  it("should not throw an error for valid positive integers", () => {
    expect(() => validateSaltRounds(10)).not.toThrow();
    expect(() => validateSaltRounds(1)).not.toThrow();
    expect(() => validateSaltRounds(999)).not.toThrow();
  });

  // Test 2: Non-numeric input
  it("should throw an error for non-numeric inputs", () => {
    expect(() => validateSaltRounds("10")).toThrow(
      "Invalid salt rounds: must be a positive integer."
    );
    expect(() => validateSaltRounds({})).toThrow(
      "Invalid salt rounds: must be a positive integer."
    );
    expect(() => validateSaltRounds([])).toThrow(
      "Invalid salt rounds: must be a positive integer."
    );
  });

  // Test 3: Zero and negative numbers
  it("should throw an error for zero and negative integers", () => {
    expect(() => validateSaltRounds(0)).toThrow(
      "Invalid salt rounds: must be a positive integer."
    );
    expect(() => validateSaltRounds(-1)).toThrow(
      "Invalid salt rounds: must be a positive integer."
    );
    expect(() => validateSaltRounds(-100)).toThrow(
      "Invalid salt rounds: must be a positive integer."
    );
  });

  // Test 4: Non-integer numbers
  it("should throw an error for non-integer numbers", () => {
    expect(() => validateSaltRounds(1.5)).toThrow(
      "Invalid salt rounds: must be a positive integer."
    );
    expect(() => validateSaltRounds(0.1)).toThrow(
      "Invalid salt rounds: must be a positive integer."
    );
  });

  // Test 5: Extremely large numbers
  it("should handle large integers without throwing an error", () => {
    expect(() => validateSaltRounds(1000000000)).not.toThrow();
  });
  // Test 6: Undefined input
  it("should throw an error when input is undefined", () => {
    expect(() => validateSaltRounds(undefined)).toThrow(
      "Invalid salt rounds: must be a positive integer."
    );
  });

  // Test 7: Null input
  it("should throw an error when input is null", () => {
    expect(() => validateSaltRounds(null)).toThrow(
      "Invalid salt rounds: must be a positive integer."
    );
  });
});
