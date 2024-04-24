"use client";
import React from "react";

import { Button, Heading, Img} from "@/components";
import { ReactTable } from "@/components/reacttable";

import { createColumnHelper } from "@tanstack/react-table";



const table1Data = [
  {
    id: "00001",
    name: "Christine Brooks",
    address: "089 Kutch Green Apt. 448",
    date: "04 Sep 2019",
    type: "Electric",
    status: "Completed",
  },
  {
    id: "00002",
    name: "Rosie Pearson",
    address: "979 Immanuel Ferry Suite 526",
    date: "28 May 2019",
    type: "Book",
    status: "Processing",
  },
  {
    id: "00003",
    name: "Darrell Caldwell",
    address: "8587 Frida Ports",
    date: "23 Nov 2019",
    type: "Medicine",
    status: "Rejected",
  },
  {
    id: "00004",
    name: "Gilbert Johnston",
    address: "768 Destiny Lake Suite 600",
    date: "05 Feb 2019",
    type: "Mobile",
    status: "Completed",
  },
  {
    id: "00005",
    name: "Alan Cain",
    address: "042 Mylene Throughway",
    date: "29 Jul 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00006",
    name: "Alfred Murray",
    address: "543 Weimann Mountain",
    date: "15 Aug 2019",
    type: "Medicine",
    status: "Completed",
  },
  {
    id: "00007",
    name: "Maggie Sullivan",
    address: "New Scottieberg",
    date: "21 Dec 2019",
    type: "Watch",
    status: "Processing",
  },
  { id: "00008", name: "Rosie Todd", address: "New Jon", date: "30 Apr 2019", type: "Medicine", status: "On Hold" },
  {
    id: "00009",
    name: "Dollie Hines",
    address: "124 Lyla Forge Suite 975",
    date: "09 Jan 2019",
    type: "Book",
    status: "In Transit",
  },
];


type Table1RowType = { id: string; name: string; address: string; date: string; type: string; status: string };

export default function SellergOnePage() {


  // table creattion
  
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper<Table1RowType>();
    return [
      table1ColumnHelper.accessor("id", {
        cell: (info) => (
          <Heading as="p" className="flex items-center justify-center">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="py-[15px] !font-extrabold sm:pl-5">
            ID
          </Heading>
        ),
        meta: { width: "183px" },
      }),
      table1ColumnHelper.accessor("name", {
        cell: (info) => (
          <Heading as="p" className="flex items-center justify-center">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="py-[15px] !font-extrabold">
            NAME
          </Heading>
        ),
        meta: { width: "210px" },
      }),
      table1ColumnHelper.accessor("address", {
        cell: (info) => (
          <Heading as="p" className="flex items-center justify-center">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="py-[15px] !font-extrabold">
            ADDRESS
          </Heading>
        ),
        meta: { width: "259px" },
      }),
      table1ColumnHelper.accessor("date", {
        cell: (info) => (
          <Heading as="p" className="flex items-center justify-center">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="py-[15px] !font-extrabold">
            DATE
          </Heading>
        ),
        meta: { width: "202px" },
      }),
      table1ColumnHelper.accessor("type", {
        cell: (info) => (
          <Heading as="p" className="flex items-center justify-center">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="py-[15px] !font-extrabold">
            TYPE
          </Heading>
        ),
        meta: { width: "178px" },
      }),
      table1ColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex">
            <Button shape="round" className="min-w-[96px] font-bold">
              {info?.getValue?.()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Heading as="p" className="py-[15px] !font-extrabold">
            STATUS
          </Heading>
        ),
        meta: { width: "155px" },
      }),
    ];
  }, []);

  return (
     <div className="h-[100%] self-stretch md:h-auto bg-slate-100">
        <div className=" bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start gap-[22px]">
                  <Heading size="5xl" as="h2" className="tracking-[-0.11px] !text-gray-900_14">
                    Order Lists
                  </Heading>
                  <div className="flex w-[74%] items-center justify-center gap-[25px] rounded-[10px] border border-solid border-blue_gray-100_04 bg-gray-50_11 px-[26px] md:w-full md:flex-col sm:px-5">
                    <div className="flex items-center gap-[26px]">
                      <Img src="images/img_filter.svg" width={20} height={22} alt="filter" className="h-[15px]" />
                      <div className="h-full w-px bg-gray-500_af_02" />
                    </div>
                    <div className="flex w-[11%] items-center justify-between gap-5 md:w-full">
                      <Heading as="p" className="!font-bold !text-gray-900_14">
                        Filter By
                      </Heading>
                      <div className="h-full w-px bg-gray-500_af_02" />
                    </div>
                    <div className="flex w-[14%] items-center justify-between gap-5 md:w-full">
                      <Heading as="p" className="!font-bold !text-gray-900_14">
                        Date
                      </Heading>
                      <Img
                        src="images/img_arrow_down_black_900.svg"
                        width={25}
                        height={24}
                        alt="arrow down"
                        className="h-[10px] w-[10px]"
                      />
                      <div className="h-full w-px bg-gray-500_af_02" />
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-5 md:self-stretch">
                      <Heading as="p" className="!font-bold !text-gray-900_14">
                        Order Type
                      </Heading>
                      <Img
                        src="images/img_arrow_down_black_900.svg"
                        width={25}
                        height={24}
                        alt="arrow down"
                        className="h-[10px] w-[10px]"
                      />
                      <div className="h-full w-px bg-gray-500_af_02" />
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-5 md:self-stretch">
                      <Heading as="p" className="!font-bold !text-gray-900_14">
                        Order Status
                      </Heading>
                      <Img
                        src="images/img_arrow_down_black_900.svg"
                        width={25}
                        height={24}
                        alt="arrow down"
                        className="h-[10px] w-[10px]"
                      />
                      <div className="h-full w-px bg-gray-500_af_02" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Img
                        src="images/img_qrcode.svg"
                        width={19}
                        height={18}
                        alt="qrcode"
                        className="flex h-[15px] w-[15px] items-center justify-center self-end"
                      />
                      <Heading as="p" className="!text-red-A400_02">
                        Reset Filter
                      </Heading>
                    </div>
                  </div>
                  <div className="ml-6 flex items-center justify-between gap-5 self-stretch md:ml-0">
                    <Heading as="p" className="self-end !text-gray-900_99_02">
                      Showing 1-09 of 78
                    </Heading>
                    <Img src="images/img_close.svg" width={86} height={30} alt="close" className="h-[30px] w-[8%]" />
                  </div>
                  <ReactTable
                    size="xs"
                    bodyProps={{ className: "" }}
                    headerProps={{
                      className:
                        "border-blue_gray-100_04 border border-solid bg-gray-50_12 rounded-tl-[14px] rounded-tr-[14px] flex-wrap",
                    }}
                    rowDataProps={{ className: "md:flex-col" }}
                    className="self-stretch"
                    columns={table1Columns}
                    data={table1Data}
                  />
        </div>
   </div>

  );
}
