// "use client";
// import React from "react";

// import {Heading, Img} from "@/components";
// import { ReactTable } from "@/components/reacttable";

// import { createColumnHelper } from "@tanstack/react-table";

// const tableData = [
//   { image: "images/img_bitmap.png", productName: "Apple Watch Series 4" },
//   { image: "images/img_bitmap.png", productName: "Microsoft Headsquare" },
//   { image: "images/img_bitmap_1.png", productName: "Women’s Dress" },
//   { image: "images/img_bitmap_2.png", productName: "Samsung A50" },
//   { image: "images/img_bitmap_3.png", productName: "Camera" },
//   { image: "images/img_bitmap.png", productName: "Microsoft Headsquare" },
//   { image: "images/img_bitmap_1.png", productName: "Women’s Dress" },
// ];
// type TableRowType = {
//   image: string;
//   productName: string;
//   category?: any;
//   price?: any;
//   piece?: any;
//   availableColor?: any;
//   action?: any;
// };
// export default function Stock(){
//     const tableColumns = React.useMemo(() => {
//     const tableColumnHelper = createColumnHelper<TableRowType>();
//     return [
//       tableColumnHelper.accessor("image", {
//         cell: (info) => (
//           <div className="rounded-lg bg-blue_gray-100_03">
//             <Img
//               src={info?.getValue?.() as string}
//               width={60}
//               height={60}
//               alt="Bitmap"
//               className="h-[60px] w-full rounded-lg object-cover md:h-auto"
//             />
//           </div>
//         ),
//         header: (info) => (
//           <Heading as="h3" className="px-[35px] pb-[11px] pt-4 !font-bold !text-gray-900_14 sm:px-5">
//             Image
//           </Heading>
//         ),
//         meta: { width: "162px" },
//       }),
//       tableColumnHelper.accessor("productName", {
//         cell: (info) => (
//           <div className="flex justify-center md:flex-col">
//             <Heading as="p" className="py-[35px] sm:py-5">
//               {info?.getValue?.()}
//             </Heading>
//             <Heading as="p" className="py-[35px] sm:py-5">
//               Digital Product
//             </Heading>
//             <Heading as="p" className="py-[35px] sm:py-5">
//               $690.00
//             </Heading>
//             <Heading as="p" className="py-[35px] sm:py-5">
//               63
//             </Heading>
//             <div className="flex flex-1 gap-4 py-11 md:self-stretch md:py-5">
//               <div className="h-[20px] w-[20px] rounded-[10px] bg-black-900_04" />
//               <div className="h-[20px] w-[20px] rounded-[10px] bg-gray-500_05" />
//               <div className="h-[20px] w-[20px] rounded-[10px] bg-red-200_01" />
//             </div>
//             <div className="flex w-[12%] justify-center py-[17px] pr-[17px] md:w-full">
//               <Img
//                 src="img_close_gray_50_01.svg"
//                 width={96}
//                 height={32}
//                 alt="close"
//                 className="my-[21px] h-[32px] w-full md:h-auto"
//               />
//             </div>
//           </div>
//         ),
//         header: (info) => (
//           <Heading as="h4" className="py-3.5 !font-bold !text-gray-900_14">
//             Product Name
//           </Heading>
//         ),
//         meta: { width: "223px" },
//       }),
//       tableColumnHelper.accessor("category", {
//         cell: (info) => <></>,
//         header: (info) => (
//           <Heading as="h5" className="pb-[11px] pt-4 !font-bold !text-gray-900_14">
//             Category
//           </Heading>
//         ),
//         meta: { width: "169px" },
//       }),
//       tableColumnHelper.accessor("price", {
//         cell: (info) => <></>,
//         header: (info) => (
//           <Heading as="h6" className="py-3.5 !font-bold !text-gray-900_14">
//             Price
//           </Heading>
//         ),
//         meta: { width: "143px" },
//       }),
//       tableColumnHelper.accessor("piece", {
//         cell: (info) => <></>,
//         header: (info) => (
//           <Heading as="p" className="py-3.5 !font-bold !text-gray-900_14">
//             Piece
//           </Heading>
//         ),
//         meta: { width: "113px" },
//       }),
//       tableColumnHelper.accessor("availableColor", {
//         cell: (info) => <></>,
//         header: (info) => (
//           <Heading as="p" className="py-3.5 !font-bold !text-gray-900_14">
//             Available Color
//           </Heading>
//         ),
//         meta: { width: "218px" },
//       }),
//       tableColumnHelper.accessor("action", {
//         cell: (info) => <></>,
//         header: (info) => (
//           <Heading as="p" className="py-3.5 pl-[21px] !font-bold !text-gray-900_14 sm:pl-5">
//             Action
//           </Heading>
//         ),
//         meta: { width: "113px" },
//       }),
//     ];
//   }, []);

//     return (
//         //  <ReactTable
//         //         bodyProps={{ className: "" }}
//         //         headerProps={{
//         //           className:
//         //             "border-blue_gray-100_04 border border-solid bg-white-A700 rounded-tl-lg rounded-tr-lg flex-wrap",
//         //         }}
//         //         rowDataProps={{ className: "md:flex-col" }}
//         //         className="w-[96%]"
//         //         columns={tableColumns}
//         //         data={tableData}
//         //       />
        
//     )

// }
"use client";
import {useState} from "react";
import { CloseSVG } from "@/assets/images";
import { Img, Heading, Input } from "@/components";

import Stockproduct from "@/components/stockproduct";

export default function DarkSixteenPage() {
  const [searchBarValue2, setSearchBarValue2] = useState("");

  return (
    <>
            <div className="flex flex-col gap-[29px] p-[23px] sm:p-5">
              <div className="mt-0.5 flex items-center justify-between gap-5 sm:flex-col">
                <Heading size="2xl" as="h1" className="tracking-[-0.11px]">
                  Product Stock
                </Heading>
                <Input
                  color="blue_gray_800_15"
                  size="sm"
                  name="search"
                  placeholder={`Search product name`}
                  value={searchBarValue2}
                  onChange={(e: string) => setSearchBarValue2(e)}
                  prefix={<Img src="images/img_rewind.svg" alt="rewind" className="h-[15px] w-[15px] cursor-pointer" />}
                  suffix={
                    searchBarValue2?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue2("")} height={15} width={15} fillColor="#ffffffff" />
                    ) : null
                  }
                  className="w-[22%] gap-3 text-white-A700_b2_02 sm:w-full sm:pr-5"
                />
              </div>
              <div>
                <div className="flex items-center justify-between gap-5 rounded-tl-lg rounded-tr-lg border border-solid border-blue_gray-800 bg-blue_gray-800_05 p-[11px] md:flex-col">
                  <div className="ml-7 flex w-[20%] flex-wrap justify-between gap-5 self-end md:ml-0 md:w-full">
                    <Heading as="h2" className="self-end !font-bold">
                      Image
                    </Heading>
                    <Heading as="h3" className="self-start !font-bold">
                      Product Name
                    </Heading>
                  </div>
                  <div className="flex w-[50%] justify-between gap-5 self-end md:w-full">
                    <Heading as="h4" className="self-end !font-bold">
                      Category
                    </Heading>
                    <Heading as="h5" className="self-start !font-bold">
                      Price
                    </Heading>
                    <div className="flex w-[41%] flex-wrap justify-between gap-5 self-start">
                      <Heading as="h6" className="!font-bold">
                        Piece
                      </Heading>
                      <Heading as="p" className="!font-bold">
                        Available Color
                      </Heading>
                    </div>
                  </div>
                  <Heading as="p" className="mr-[37px] self-end !font-bold md:mr-0">
                    Action
                  </Heading>
                </div>
                <div className="flex flex-col gap-6 rounded-bl-[14px] rounded-br-[14px] border border-solid border-blue_gray-800  py-6 sm:py-5">
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                
                </div>
              </div>
              <div className="mb-[3px] flex items-center justify-between gap-5">
                <Heading as="p" className="mb-[3px] self-end !text-white-A700_99_04">
                  Showing 1-07 of 78
                </Heading>
                <Img src="images/img_television.svg" alt="television_one" className="h-[30px] w-[8%]" />
              </div>
            </div>
    </>
  );
}
