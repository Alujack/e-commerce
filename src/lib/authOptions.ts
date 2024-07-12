import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcrypt'; // Assumes you're using bcrypt for password hashing
import { JWT } from "next-auth/jwt";
import { sign } from 'jsonwebtoken';

const prisma = new PrismaClient();

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
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }

        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (user && await compare(credentials.password, user.hashpassword)) {
            // Create a JWT token for the authenticated user
            const jwt = sign({ id: user.id, email: user.email }, process.env.JWT_SECRET as string, {
              expiresIn: '1h',
            });

            // Convert the id to a string and return the user with the jwt property
            return { ...user, id: user.id.toString(), jwt: jwt };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error in authorize:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.jwt = user.jwt;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.jwt = token.jwt;
      return session;
    },
    async signIn({ user }) {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/auth-app/create-or-update-user/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: user.email,
            name: user.name,
            password: user.hashpassword, // Ensure password is available in the user object
            jwt: user.jwt,
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
    },
  },
};
