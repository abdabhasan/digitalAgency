import { isPasswordsMatch } from "@/helpers/hashPassword";
import bcrypt from "bcryptjs";

jest.mock("bcryptjs", () => ({
  compare: jest.fn(),
}));

describe("isPasswordsMatch", () => {
  it("should return true if the passwords match", async () => {
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);
    const result = await isPasswordsMatch("plainPassword", "hashedPassword");
    expect(result).toBe(true);
  });

  it("should return false if the passwords do not match", async () => {
    (bcrypt.compare as jest.Mock).mockResolvedValue(false);
    const result = await isPasswordsMatch(
      "plainPassword",
      "wrongHashedPassword"
    );
    expect(result).toBe(false);
  });

  it("should throw an error if bcrypt.compare fails", async () => {
    const error = new Error("bcrypt error");
    (bcrypt.compare as jest.Mock).mockRejectedValue(error);
    await expect(
      isPasswordsMatch("plainPassword", "hashedPassword")
    ).rejects.toThrow(error);
  });
});
