
import { Img, Heading } from "@/components";
import Link from "next/link";

export default function Customer() {
  return (
      <div className="ml-7 flex flex-row justify-between items-center mb-[10px] pr-5">      
        <div className="w-[30%] flex  gap-5 self-start ">
          <Img src="/images/user.png" alt="headphone" className="w-[30px] object-cover" />
          <Link href="customers/2">
          <Heading as="h1" className="text-center">
            Yoeurn Yan
          </Heading>
          </Link>
        </div>     
       <div className="flex w-[60%] justify-between gap-5">
          <Heading as="h4" className="top-0 self-end !font-bold">
                Cambodia
            </Heading>
            <Heading as="h4" className="self-end !font-bold">
                10
            </Heading>
            <Heading as="h5" className="self-end !font-bold">
                10000$
            </Heading>
        </div>
      </div>
  );
}
