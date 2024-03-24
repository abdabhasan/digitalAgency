"use server";

import { signIn, signOut } from "./auth";
import { connectToDatabase } from "./dbConfig";
import { Post } from "./models/Post";
import { User } from "./models/User";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleGoogleLogin = async () => {
  await signIn("google");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (
  prevState,
  formData: FormData | undefined
): Promise<string | object> => {
  if (!formData) return { error: "Form data is missing." };

  const { username, email, password, passwordRepeat } = Object.fromEntries(
    formData
  ) as {
    username: string;
    email: string;
    password: string;
    passwordRepeat: string;
  };

  if (password !== passwordRepeat) return { error: "Passwords do not match" };

  try {
    await connectToDatabase();

    const existingUser = await User.findOne({ email });
    if (existingUser) return { error: "User already exists." };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something wen wrong!" };
  }
};

export const login = async (
  prevState,
  formData: FormData | undefined
): Promise<string | object> => {
  if (!formData) return { error: "Form data is missing." };

  const { username, password } = Object.fromEntries(formData) as {
    username: string;
    password: string;
  };

  try {
    await connectToDatabase();

    const existingUser = await User.findOne({ username });
    if (!existingUser) return { error: "User does not exists" };
    await signIn("credentials", { username, password });

    return { success: true };
  } catch (error) {
    if (error.message.includes("CredentialsSignin"))
      return { error: "invalid credentials" };
    console.log(error);
    throw new Error("Something wen wrong!");
  }
};

export const addPost = async (
  prevState,
  formData: FormData | undefined
): Promise<string | object> => {
  const { title, desc, slug, userId } = Object.fromEntries(formData) as {
    title: string;
    desc: string;
    slug: string;
    userId: string;
  };

  try {
    connectToDatabase();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (
  formData: FormData | undefined
): Promise<string | object> => {
  const { id } = Object.fromEntries(formData) as { id: string };

  try {
    connectToDatabase();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addUser = async (
  prevState,
  formData: FormData | undefined
): Promise<string | object> => {
  const { username, email, password, img } = Object.fromEntries(formData) as {
    username: string;
    email: string;
    password: string;
    img: string;
  };

  try {
    connectToDatabase();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (
  formData: FormData | undefined
): Promise<string | object> => {
  const { id } = Object.fromEntries(formData) as { id: string };

  try {
    connectToDatabase();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
