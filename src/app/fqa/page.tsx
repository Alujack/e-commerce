"use client"
import {Heading, Input, Img} from "@/components"
export default function FQA(){
    return (
    <main>
        <div className= "flex flex-col">
            <div className="flex flex-col justify-between items-center p-[30px]">
                <span>FQAs</span>
                <Heading size="4xl" as="h1" className=" leading-[21px] m-[10px]">
                        Filter by price 
                </Heading>
                <p className=" m-[10px]" >Have any questions? we're here to assist you</p>
                <Input
                size="md"
                name="search"
                placeholder={`search here`}
                prefix={<Img src="/images/img_search.svg" alt="search" className="cursor-pointer" />}
                className=" m-[10px] gap-2 sm:pr-5 !text-blue_gray-900_01 tracking-[-0.08px] border-gray-300_08 border border-solid flex-grow rounded-[15px]"
              />
            </div>
            <div className="flex flex-col   bg-slate-200 ">
                <div className="justify-center gap-[3px] grid-cols-[repeat(auto-fill,_minmax(400px_,_1fr))] grid p-[20px]">
                    
                    <div className="flex flex-col p-[30px] ">
                        <Heading size="4xl" as="h1" className=" leading-[21px] m-[10px]">
                            How do i change my account email?
                        </Heading>
                        <p className="text-justify">
                            you can log in to your account and change it from your 
                            profile - Edit profile then go to the general tab to change 
                            your email.
                        </p>
                    </div>
                    <div className="flex flex-col p-[30px] ">
                        <Heading size="4xl" as="h1" className=" leading-[21px] m-[10px]">
                            How do i change my account email?
                        </Heading>
                        <p className="text-justify">
                            you can log in to your account and change it from your 
                            profile - Edit profile then go to the general tab to change 
                            your email.
                        </p>
                    </div>
                    <div className="flex flex-col p-[30px] ">
                        <Heading size="4xl" as="h1" className=" leading-[21px] m-[10px]">
                            How do i change my account email?
                        </Heading>
                        <p className="text-justify">
                            you can log in to your account and change it from your 
                            profile - Edit profile then go to the general tab to change 
                            your email.
                        </p>
                    </div>
                    <div className="flex flex-col p-[30px] ">
                        <Heading size="4xl" as="h1" className=" leading-[21px] m-[10px]">
                            How do i change my account email?
                        </Heading>
                        <p className="text-justify">
                            you can log in to your account and change it from your 
                            profile - Edit profile then go to the general tab to change 
                            your email.
                        </p>
                    </div>
                    <div className="flex flex-col p-[30px] ">
                        <Heading size="4xl" as="h1" className=" leading-[21px] m-[10px]">
                            How do i change my account email?
                        </Heading>
                        <p className="text-justify">
                            you can log in to your account and change it from your 
                            profile - Edit profile then go to the general tab to change 
                            your email.
                        </p>
                    </div>
                    <div className="flex flex-col p-[30px] ">
                        <Heading size="4xl" as="h1" className=" leading-[21px] m-[10px]">
                            How do i change my account email?
                        </Heading>
                        <p className="text-justify">
                            you can log in to your account and change it from your 
                            profile - Edit profile then go to the general tab to change 
                            your email.
                        </p>
                    </div>
                   
                </div>
            </div>

        </div>
    
    </main>)
}