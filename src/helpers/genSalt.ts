import bcrypt from "bcryptjs";

export const validateSaltRounds = (saltRounds: number): void => {
  if (
    typeof saltRounds !== "number" ||
    saltRounds <= 0 ||
    !Number.isInteger(saltRounds)
  ) {
    throw new Error("Invalid salt rounds: must be a positive integer.");
  }
};

export const genSalt = async (saltRounds = 10): Promise<string> => {
  validateSaltRounds(saltRounds);

  try {
    const salt = await bcrypt.genSalt(saltRounds);
    return salt;
  } catch (error) {
    console.error("Failed to generate salt:", error);
    throw new Error(
      "Error generating salt. Please check the server logs for more details."
    );
  }
};
