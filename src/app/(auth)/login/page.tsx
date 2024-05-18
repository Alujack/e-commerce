"use client"
import { Img, Text, Heading } from "@/components";
import Signinfrom from "./Form";

export default function WebSignin() {
  return (
    <>
      <div className="w-full px-[10px] py-[10px] md:p-5 bg-gray-300_07 ">
        <div className="w-full mb-[3px] p-[43px] mx-auto md:p-5 bg-white-A700 max-w-[1200px] rounded-[10px]">
          <div className="flex md:flex-col justify-between items-center mt-[31px] mb-[34px] gap-5">
            <div className="flex flex-col items-center w-[36%] md:w-full gap-[246px] md:gap-[184px] sm:gap-[123px]">
              <div className="flex flex-col items-start gap-3.5">
                <Heading size="10xl" as="h1" className="!text-green-700">
                  Welcome Back
                </Heading>
                <Text as="p" className="!text-gray-500 tracking-[2.00px] uppercase">
                  login to continue
                </Text>
              </div>
              <Img
                src="/images/img_group_3653.png"
                alt="image"
                className="h-[327px] w-full md:h-auto mb-8 object-cover"
              />
            </div>
            <Signinfrom className="flex flex-col items-center w-[51%] md:w-full gap-[11px]" />
          </div>
        </div>
      </div>
    </>
  );
}
// // "use client"
// // import { signIn } from "next-auth/react";
// // import { useState } from "react";

// // const SignIn = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     await signIn("credentials", {
// //       email,
// //       password,
// //       callbackUrl: "/",
// //     });
// //   };

// //   return (
// //     <div className="flex justify-center items-center h-screen">
// //       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
// //         <h2 className="text-2xl mb-4">Sign In</h2>
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           className="block border border-grey-light w-full p-3 rounded mb-4"
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           className="block border border-grey-light w-full p-3 rounded mb-4"
// //         />
// //         <button type="submit" className="bg-blue-500 text-white p-3 rounded w-full">
// //           Sign In
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default SignIn;
// //app\login\page.tsx
// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
 
// const Login = () => {
//     const router = useRouter();
//     const [error, setError] = useState("");
//     const { data: session, status: sessionStatus } = useSession();
 
//     useEffect(() => {
//         if (sessionStatus === "authenticated") {
//             router.replace("/dashboard");
//         }
//     }, [sessionStatus, router]);
 
//     const isValidEmail = (email: string) => {
//         const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//         return emailRegex.test(email);
//     };
 
//     const handleSubmit = async (e: any) => {
//         e.preventDefault();
//         const email = e.target[0].value;
//         const password = e.target[1].value;
 
//         if (!isValidEmail(email)) {
//             setError("Email is invalid");
//             return;
//         }
 
//         if (!password || password.length < 8) {
//             setError("Password is invalid");
//             return;
//         }
 
//         const res = await signIn("credentials", {
//             redirect: false,
//             email,
//             password,
//         });
 
//         if (res?.error) {
//             setError("Invalid email or password");
//             if (res?.url) router.replace("/dashboard");
//         } else {
//             setError("");
//         }
//     };
 
//     // if (sessionStatus === "loading") {
//     //     return <h1>Loading...</h1>;
//     // }
 
//     return (
//         sessionStatus !== "authenticated" && (
//         <div className="justify-center mt-16">
//         <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
//             <h1 className="text-3xl font-semibold text-center text-purple-700">Login</h1>
//             <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//                 <label className="label">
//                 <span className="text-base label-text">Email</span>
//                 </label>
//                 <input type="text" placeholder="Email Address" required className="w-full input input-bordered input-primary" />
//             </div>
//             <div>
//                 <label className="label">
//                 <span className="text-base label-text">Password</span>
//                 </label>
//                 <input type="password" placeholder="Enter Password" required className="w-full input input-bordered input-primary" />
//             </div>
//             <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
//             <div>
//             <button
//                 type="submit"
//                 className="btn btn-primary"
//             >
//             {" "}
//             Sign In
//             </button>
//             <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
//             </div>
//             </form>
//                 <Link
//                     className="block text-center text-blue-500 hover:underline mt-2"
//                     href="/register"
//                  >
//                 Register Here
//                 </Link>
//             </div>
//         </div>
//         )
//     );
// };
 
// export default Login;