import bcrypt from "bcryptjs";
import { genSalt } from "./genSalt";

export const isPasswordsMatch = async (
  plainPassword: string,
  hashedPassword: string
) => {
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    throw error;
  }
};

export const hashPassword = async (password: string): Promise<string> => {
  if (!password || typeof password !== "string" || password.trim() === "") {
    throw new Error("Invalid input: Password must be a non-empty string.");
  }

  try {
    const salt = await genSalt();

    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw new Error(
      "Error hashing password. Please check the server logs for more details."
    );
  }
};
