import { connectDb } from "./dbConfig";
import { Post } from "./models/Post";
import { User } from "./models/User";

export const getPosts = async () => {
  try {
    connectDb();

    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch posts!");
  }
};

export const getPost = async (slug: string) => {
  try {
    connectDb();

    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch post!");
  }
};

export const getUserById = async (id: number) => {
  try {
    connectDb();

    const user = await User.findById({ id });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectDb();

    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch users!");
  }
};
