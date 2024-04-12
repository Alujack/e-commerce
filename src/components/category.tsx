import React from "react";
import {Heading } from "./heading";
export default function Category(){
 
  return (
    <>
              <Heading size="5xl" as="h1" className="ml-1.5 md:ml-0 !text-red-600 uppercase">
                  Category
              </Heading>
              <div className="flex flex-col self-center  justify-center mb-2 gap-[15px]">
                  <Heading size="s" as="h2" className="capitalize">
                    Clearance
                  </Heading>
                  <Heading size="s" as="h3" className="capitalize">
                    Accessories
                  </Heading>
                  <Heading size="s" as="h4" className="capitalize">
                    Home & Lifestyle
                  </Heading>
                  <Heading size="s" as="h5" className="capitalize">
                    Health & Beauty
                  </Heading>
                  <Heading size="s" as="h6" className="capitalize">
                    Groceries & Pet
                  </Heading>
                  <Heading size="s" as="p" className="capitalize">
                    Baby’s & Toys
                  </Heading>
                  <Heading size="s" as="p" className="capitalize">
                    Networking
                  </Heading>
                  <Heading size="s" as="p" className="capitalize">
                    Sport & Outdoor
                  </Heading>
                  <Heading size="s" as="p" className="capitalize">
                    Medicine
                  </Heading>
                  <Heading size="s" as="p" className="capitalize">
                    Electronic{" "}
                  </Heading>
                  <Heading size="s" as="p" className="capitalize">
                    Man’s Fashion
                  </Heading>
                  <Heading size="s" as="p" className="capitalize">
                    Woman’s fashion
                  </Heading>
              </div>
    </>
  );
}
