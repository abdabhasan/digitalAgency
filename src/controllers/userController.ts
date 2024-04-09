import { User } from "@/lib/models/User";

export const checkByEmailIfUserExists = async (
  email: string
): Promise<boolean> => {
  try {
    const user = await User.findOne({ email });

    return !!user;
  } catch (error) {
    console.error(
      "An error occurred while checking if the user exists:",
      error
    );
    throw error;
  }
};

export const createNewUser = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    const newUser = await new User({
      email,
      password,
    });

    await newUser.save();
    return true;
  } catch (error) {
    console.error("An error occurred while creating new user:", error);
    throw error;
  }
};
