
"use client"
import { useState } from 'react';
import axios from 'axios';
import {Heading,Img,Button,Text,CheckBox} from "@/components";
import Link from 'next/link';
import { signIn } from "next-auth/react";
const RegisterForm = ({...props}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e:any) => {
    const { name, value }= e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', formData);
      console.log('Registration successful:', response.data);
    } catch (error:any) {
      console.error('Error registering:', error.response.data);
    }
  };

  return (
     <>
      <div {...props}>
      <div className="flex flex-col self-stretch gap-2.5">
        <Heading size="14xl" as="h1" className="!text-black-900_01 tracking-[-2.00px] !font-poppins text-center">
          Create Free Account
        </Heading>
        <Text
          size="3xl"
          as="p"
          className="w-[97%] md:w-full !text-blue_gray-700_01 !font-poppins text-center leading-[30px]"
        >
          Clarity gives you the blocks and components you need to create a truly professional website.
        </Text>
      </div>
      <form onSubmit={handleSubmit}>
      <div className=" size-3xl flex flex-col self-stretch items-center justify-center gap-[23px] p-[25px] sm:p-5 bg-white-A700 shadow-xs rounded-[20px]">
        <input
          
          type="text"
          name="name"
          placeholder={`First & Last Name`}
          value={formData.name}
          onChange={handleChange} 
          className="size-3xl self-stretch sm:px-5 !text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
        />
        <input
       
          type="email"
          name="email"
          placeholder={`Email Address`}
          value={formData.email}
          onChange={handleChange}
          className="size-3xl self-stretch sm:px-5 !text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
        />
        <input
          
          type="password"
          name="password"
          placeholder={`Create Password`}
          value={formData.password}
          onChange={handleChange}
          className="text-4xl self-stretch sm:px-5 text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
        />
        <CheckBox
          name="shape"
          label="I agree with the Terms & Conditions of Clarity"
          id="shape"
          className="self-start ml-[5px] gap-[9px] p-px md:ml-0 text-black-900_01 font-poppins text-left text-sm"
        />
        <Button
          color="blue_A700"
          size="11xl"
          className="w-full sm:px-5 text-white-A700 tracking-[-0.20px] font-poppins font-semibold rounded-[9px]"
          type='submit'
        >
          Sign Up
        </Button>
        <Button
          color="gray_50_02"
          size="11xl"
          leftIcon={<Img src="images/img_google.svg" alt="google" />}
          className="w-full gap-[11px] sm:px-5 text-blue_gray-900_03 tracking-[-0.20px] font-poppins font-semibold rounded-[10px]"
          onClick ={()=>signIn('google')}
        >
          Sign up with Google
        </Button>
        <Button
          color="gray_50_02"
          size="11xl"
          leftIcon={<Img src="images/github.png" alt="google" className="w-[21px]"/>}
          className="w-full gap-[11px] sm:px-5 text-blue_gray-900_03 tracking-[-0.20px] font-poppins font-semibold rounded-[10px]"
          onClick ={()=>signIn('github')}
        >
          Sign up with Github
        </Button>
        <Text as="p" className="mb-[3px] !text-gray-600 !font-poppins text-center">
          <span className="text-gray-600">Already have an account?&nbsp;</span>
          <Link href="/login"><span className="text-blue-A700 font-semibold">Sign in</span></Link>
        </Text>
      </div>
      </form>
    </div>
     </>
  );
};

export default RegisterForm;


// import { FormEvent, useState } from 'react';
// import axios from 'axios';

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e:) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/auth/register', formData);
//       console.log('Registration successful:', response.data);
//     } catch (error:any) {
//       console.error('Error registering:', error.response.data);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegisterForm;

