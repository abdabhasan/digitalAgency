import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import google from "next-auth/providers/google";
import { connectToDatabase } from "./dbConfig";
import { User } from "./models/User";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

const login = async (credentials) => {
  try {
    connectToDatabase();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Faild ot login");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
    google,
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        connectToDatabase();

        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },
  ...authConfig.callabacks,
});
