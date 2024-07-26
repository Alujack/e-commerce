import { NextAuthOptions, Account, Profile, User as NextAuthUser } from "next-auth";
import { JWT } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const BASE_PATH = "/api/auth";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     email: { label: "Email", type: "email" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   authorize: async (credentials) => {
    //     if (!credentials) {
    //       return null;
    //     }

    //     // Fetch user from Django backend
    //     const res = await fetch('http://127.0.0.1:8000/api/auth-app/users/login/', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(credentials)
    //     });
    //     const user = await res.json();

    //     if (res.ok && user) {
    //       // Return user object with required properties
    //       return { email: credentials.email, accessToken: user.access };
    //     }
    //     return null;
    //   }
    // })
  ],
  // session: {
  //   jwt: true,
  // },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT, user?: any }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }: { session: any, token: JWT }) {
      session.accessToken = token.accessToken;
      return session;
    },
    async signIn({ user, account, profile }: { user: NextAuthUser, account: Account | null, profile?: Profile | undefined }) {
      if (account && account.provider !== 'credentials') {
        try {
          const res = await fetch('http://127.0.0.1:8000/api/auth-app/create-or-update/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: user.email,
              name: user.name || profile?.name,
              image: user.image || null,
              provider: account.provider,         
            }),
          });

          if (!res.ok) {
            console.error("Failed to update user on signIn:", await res.json());
            return false;
          }

          return true;
        } catch (error) {
          console.error("Error in signIn callback:", error);
          return false;
        }
      }
      return true;
    },
  },
};
