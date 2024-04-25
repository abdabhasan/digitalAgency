import { genSalt } from "@/helpers/genSalt";
import bcrypt from "bcryptjs";

jest.mock("bcryptjs", () => ({
  genSalt: jest.fn(),
}));

describe("genSalt", () => {
  // Test 1: Successful salt generation
  it("should successfully generate a salt", async () => {
    bcrypt.genSalt.mockResolvedValue("someSaltString");
    await expect(genSalt(10)).resolves.toEqual("someSaltString");
    expect(bcrypt.genSalt).toHaveBeenCalledWith(10);
  });

  // Test 2: Default parameter
  it("should use default salt rounds of 10 if no argument is provided", async () => {
    bcrypt.genSalt.mockResolvedValue("defaultSaltString");
    await expect(genSalt()).resolves.toEqual("defaultSaltString");
    expect(bcrypt.genSalt).toHaveBeenCalledWith(10);
  });

  // Test 3: Invalid input handling
  it("should throw an error for invalid salt rounds", async () => {
    await expect(genSalt(-5)).rejects.toThrow(
      "Invalid salt rounds: must be a positive integer."
    );
  });

  // Test 4: Handling bcrypt errors
  it("should handle errors from bcrypt.genSalt", async () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    bcrypt.genSalt.mockRejectedValue(new Error("bcrypt failure"));
    await expect(genSalt(10)).rejects.toThrow(
      "Error generating salt. Please check the server logs for more details."
    );
    consoleSpy.mockRestore();
  });
});
