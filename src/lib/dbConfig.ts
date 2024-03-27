import mongoose from "mongoose";

// Function to determine if we are already connected or connecting
const isConnectedOrConnecting = () => {
  return (
    mongoose.connection.readyState === 1 || mongoose.connection.readyState === 2
  );
};

export const connectToDatabase = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI environment variable not set");
  }

  // Avoid creating a new connection if one already exists
  if (isConnectedOrConnecting()) {
    console.log("Already connected or connecting to database");
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("Connected to database successfully");
  } catch (err) {
    console.error("Error connecting to database:", err);
    throw err;
  }
};
