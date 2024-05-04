import React from "react";
import {Heading } from "./heading";
import Link from "next/link";
export default function Category(){
  return (
    <>
              <Heading size="5xl" as="h1" className="ml-1.5 md:ml-0 !text-red-600 uppercase">
                  Category
              </Heading>
              <div className="flex flex-col self-center  justify-center mb-2 gap-[15px]">
                  <Link href ="/">
                  <Heading size="s" as="h2" className="capitalize">
                    Clearance
                  </Heading></Link>
                  <Link href ="/">
                  <Heading size="s" as="h3" className="capitalize">
                    Accessories
                  </Heading></Link>
                  <Link href ="/">
                  <Heading size="s" as="h4" className="capitalize">
                    Home & Lifestyle
                  </Heading></Link>
                  <Link href ="/">
                  <Heading size="s" as="h5" className="capitalize">
                    Health & Beauty
                  </Heading></Link>
                  <Link href ="/">
                  <Heading size="s" as="h6" className="capitalize">
                    Groceries & Pet
                  </Heading></Link>
                  <Link href ="/">
                  <Heading size="s" as="p" className="capitalize">
                    Baby’s & Toys
                  </Heading></Link>
                  <Link href ="/">
                  <Heading size="s" as="p" className="capitalize">
                    Networking
                  </Heading></Link>
                  <Link href ="/">
                  <Heading size="s" as="p" className="capitalize">
                    Sport & Outdoor
                  </Heading></Link>
                  <Link href ="/">
                  <Heading size="s" as="p" className="capitalize">
                    Medicine
                  </Heading></Link>
                  <Link href ="/">
                  <Heading size="s" as="p" className="capitalize">
                    Electronic{" "}
                  </Heading></Link>
                  <Link href ="/">
                  <Heading size="s" as="p" className="capitalize">
                    Man’s Fashion
                  </Heading></Link>
                  <Link href ="/">
                  <Heading size="s" as="p" className="capitalize">
                    Woman’s fashion
                  </Heading></Link>
              </div>
    </>
  );
}
