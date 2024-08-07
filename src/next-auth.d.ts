// next-auth.d.ts
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface User {
    jwt: string;
    id: string;
    name: string;
    email: string;
    password: string;
    accessToken: string;
    access:string;
  }
  interface Session {
    jwt:string;
    accessToken?: string;
    user:User;
    }
  }


