// import { NextApiRequest, NextApiResponse } from "next";
// import { PrismaClient } from '@prisma/client/edge'
// const prisma = new PrismaClient()



// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === "POST") {
//     const { email, password, name } = req.body;

//     try {
//       const user = await prisma.users.create({
//         data: {
//           email,
//           password,
//           name,
//         },
//       });
//       res.status(200).json(user);
//     } catch (error) {
//       res.status(500).json({ error: "User already exists" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// };
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