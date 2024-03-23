export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callabacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },

    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnloginPage = request.nextUrl?.pathname.startsWith("/login");

      //   only admin can reach the admin dashboard

      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      //   only authenticated users acn reach the blog

      if (isOnBlogPage && !user) {
        return false;
      }

      //   only authentcated uses can reach the login page

      if (isOnloginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
