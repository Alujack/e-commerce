
"use client"
import { Spinner } from '@/components/common';
import {Heading,Text,CheckBox} from "@/components";
import Link from 'next/link';
import { useRegister } from '@/hooks';
import { SocialButtons } from '@/components/common';
const RegisterForm = ({...props}) => {
 const {
		first_name,
		last_name,
		email,
		password,
		re_password,
		isLoading,
		onChange,
		onSubmit,
	} = useRegister();
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
          className=" md:w-full !text-blue_gray-700_01 !font-poppins text-center leading-[30px]"
        >
          Clarity gives you the blocks and components you need to create a truly professional website.
        </Text>
      </div>
      <form onSubmit={onSubmit}>
      <div className=" size-3xl flex flex-col self-stretch items-center justify-center gap-[23px] p-[25px] sm:p-5 bg-white-A700 shadow-xs rounded-[20px]">
       
        <input
          
          type="text"
          name="first_name"
          placeholder={`first_name`}
          value={first_name}
          onChange={onChange} 
          className="size-3xl self-stretch sm:px-5 !text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
        />
         <input
          
          type="text"
          name="last_name"
          placeholder={`last_name`}
          value={last_name}
          onChange={onChange} 
          className="size-3xl self-stretch sm:px-5 !text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
        />
        <input
       
          type="email"
          name="email"
          placeholder={`Email Address`}
          value={email}
          onChange={onChange}
          className="size-3xl self-stretch sm:px-5 !text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
        />
        <input
          
          type="password"
          name="password"
          placeholder={`Create Password`}
          value={password}
          onChange={onChange}
          className="text-4xl self-stretch sm:px-5 text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
        />
         <input
          
          type="password"
          name="re_password"
          placeholder={`Create Password`}
          value={re_password}
          onChange={onChange}
          className="text-4xl self-stretch sm:px-5 text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
        />
        <CheckBox
          name="shape"
          label="I agree with the Terms & Conditions of Clarity"
          id="shape"
          className="self-start ml-[5px] gap-[9px] p-px md:ml-0 text-black-900_01 font-poppins text-left text-sm"
        />
        <button
					type='submit'
					className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					disabled={isLoading}
				>
					{isLoading ? <Spinner sm /> : `Sign Up`}
				</button>
        <Text as="p" className="mb-[3px] !text-gray-600 !font-poppins text-center">
          <span className="text-gray-600">Already have an account?&nbsp;</span>
          <Link href="/auth-user/login"><span className="text-blue-A700 font-semibold">Sign in</span></Link>
        </Text>
      </div>
      </form>
    </div>
     </>
  );
};

export default RegisterForm;
