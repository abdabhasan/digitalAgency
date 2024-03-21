import { connectToDatabase } from "@/lib/dbConfig";
import { Post } from "@/lib/models/Post";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    connectToDatabase();

    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("faild to fetch post!");
  }
};
