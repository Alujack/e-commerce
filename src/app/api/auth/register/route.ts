
import { connectToDatabase } from "@/auth/server-helper";
import { NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"
import bcrypt from "bcrypt"
const prisma = new PrismaClient();
export const POST = async  (req:Request) =>{
    try{
      const {name ,email, password} = await req.json()
      if(!name || !email || !password )
          return NextResponse.json({message:"Invalid data"},{status:422})
      const hashpassword= await bcrypt.hash(password,10);
      await connectToDatabase();
      const users= await prisma.user.create({data:{email,name,hashpassword}});
      return NextResponse.json(users,{status:201})   

    }catch(error){

        return NextResponse.json({message:"Server error"},{status:500});
    }finally{
      await prisma.$disconnect();
    }

    };