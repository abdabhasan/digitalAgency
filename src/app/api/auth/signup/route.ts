import { NextResponse } from "next/server";
import { hashPassword } from "@/helpers/passwordHelper";
import { connectToDatabase } from "@/lib/dbConfig";
import { parseRequestBody } from "@/helpers/parsingHelpers";
import {
  checkByEmailIfUserExists,
  createNewUser,
} from "@/controllers/userController";

export const POST = async (req) => {
  if (req.method === "POST") {
    const body = await parseRequestBody(req);

    const { email, password } = body;

    await connectToDatabase();

    // Check if user already exists
    const isUserExists = await checkByEmailIfUserExists(email);
    if (isUserExists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 422 }
      );
    }

    // Hash password and create user
    const hashedPassword = await hashPassword(password);

    createNewUser(email, hashedPassword);

    console.log("User created");
    return NextResponse.json({ message: "User created" }, { status: 201 });
  } else {
    return NextResponse.json(
      { message: `Method ${req.method} Not Allowed` },
      { status: 405 }
    );
  }
};
