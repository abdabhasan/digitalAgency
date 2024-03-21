import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
  } catch (err) {
    console.log(err);
    throw new Error("Error connecting to database");
  }
};
