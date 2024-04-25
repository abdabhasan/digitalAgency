import { hashPassword } from "@/helpers/hashPassword";
import { genSalt } from "@/helpers/genSalt";
import bcrypt from "bcryptjs";

jest.mock("../../../src/helpers/genSalt.ts", () => ({
  genSalt: jest.fn(() => Promise.resolve("someSalt")),
}));

jest.mock("bcryptjs", () => ({
  hash: jest.fn((password, salt) => Promise.resolve("hashed" + password)),
}));

describe("hashPassword", () => {
  it("returns a hashed password for valid input", async () => {
    const password = "validPassword123";
    const result = await hashPassword(password);
    expect(result).toBe("hashed" + password);
    expect(genSalt).toHaveBeenCalled();
  });

  it("throws an error for empty password input", async () => {
    await expect(hashPassword("")).rejects.toThrow(
      "Invalid input: Password must be a non-empty string."
    );
  });

  // Test for null password input
  it("throws an error for null password input", async () => {
    await expect(hashPassword(null)).rejects.toThrow(
      "Invalid input: Password must be a non-empty string."
    );
  });

  // Test for whitespace password input
  it("throws an error for whitespace password input", async () => {
    await expect(hashPassword("   ")).rejects.toThrow(
      "Invalid input: Password must be a non-empty string."
    );
  });

  // Test for non-string inputs
  it.each([123, {}, [], true, undefined])(
    "throws an error for non-string input %p",
    async (input) => {
      await expect(hashPassword(input)).rejects.toThrow(
        "Invalid input: Password must be a non-empty string."
      );
    }
  );

  // Test for hashing failure by simulating an error in bcrypt.hash
  it("handles hashing function failure", async () => {
    // Override the mock to throw an error for this specific test
    bcrypt.hash.mockRejectedValueOnce(new Error("Simulated hashing failure"));

    await expect(hashPassword("validPassword")).rejects.toThrow(
      "Error hashing password. Please check the server logs for more details."
    );
  });

  // Test for error logging
  it("logs an error when hashing fails", async () => {
    // Expect console.error to be called with a specific error message
    console.error = jest.fn();

    // Simulate a failure in the hashing function again
    bcrypt.hash.mockRejectedValueOnce(new Error("Simulated hashing failure"));

    try {
      await hashPassword("validPassword");
    } catch (error) {
      // The catch block is just to handle the thrown error
    }

    expect(console.error).toHaveBeenCalledWith(
      "Error hashing password:",
      expect.any(Error)
    );
  });
});
