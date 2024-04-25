import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { isPasswordsMatch, hashPassword } from "@/helpers/hashPassword";
import { connectToDatabase } from "@/lib/dbConfig";
import { User } from "@/lib/models/User";
import { redirect } from "next/navigation";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/login",
    // error: "/auth/error",
    // Add this to redirect to home page after successful sign in
    // home: "/",
  },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await connectToDatabase();

        const user = await User.findOne({ email: credentials.email });

        const isPasswordMatch = await isPasswordsMatch(
          credentials.password,
          user?.password
        );

        if (!user || !isPasswordMatch) {
          console.log("Invalid email or password");
          throw new Error("Invalid email or password");
        }
        // Return user object if successful
        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
});
