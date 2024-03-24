import { connectToDatabase } from "@/lib/dbConfig";
import { User } from "@/lib/models/User";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectToDatabase();

    const users = await User.find();
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    throw new Error("faild to fetch users!");
  }
};
