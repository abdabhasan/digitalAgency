"use server";
import { signIn, signOut } from "@/app/api/auth/[...nextauth]/route";
import { connectToDatabase } from "./dbConfig";
import { Post } from "./models/Post";
import { User } from "./models/User";
import { revalidatePath } from "next/cache";

export const logout = async () => {
  await signOut();
};

export const handleGoogleLogin = async () => {
  await signIn("google");
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const addPost = async (
  prevState,
  formData: FormData | undefined
): Promise<string | object> => {
  const { title, description, img, userId } = Object.fromEntries(formData) as {
    title: string;
    description: string;
    img: string;
    userId: string;
  };

  try {
    connectToDatabase();
    const newPost = new Post({
      title,
      description,
      img,
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
