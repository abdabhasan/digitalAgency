import { connectToDatabase } from "@/lib/dbConfig";
import { Post } from "@/lib/models/Post";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectToDatabase();

    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("faild to fetch posts!");
  }
};
