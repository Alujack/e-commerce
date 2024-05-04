"use client"
import {Heading,Img,Text,Button} from "@/components"
import TeamCard from "@/components/teamcard"
export default function TeamTable(){
    return <>
     <div className="px-[45px] flex w-[100%] flex-col gap-[23px] md:w-full">
              <div className="flex items-center justify-between gap-5">
                <Heading size="5xl" as="h1" className="self-start tracking-[-0.11px]">
                  Team
                </Heading>
                <Button color="blue_A200_08" size="6xl" className="min-w-[147px] rounded-md font-bold">
                  Add New Member
                </Button>
              </div>
              <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px_,_1fr))] justify-center gap-[30px]">
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>

              </div>
            </div>
    </>
}