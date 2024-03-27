import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, // Remove whitespace from both ends of a string
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    img: {
      type: String,
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // Reference to the User model
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true, // Ensure indexing for performance
    },
  },
  { timestamps: true }
);

// Make slug = title
postSchema.pre("save", function (next) {
  if (!this.isModified("title")) return next(); // Skip if title hasn't changed
  this.slug = this.title.toLowerCase().split(" ").join("-");
  next();
});

export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
