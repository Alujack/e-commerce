
"use client";
import { Img, Heading, Button } from "@/components";

import { ReactTable } from "@/components/reacttable";

import { createColumnHelper } from "@tanstack/react-table";
import {useMemo} from "react";
const tableData = [
  {
    id: "00001",
    name: "Christine Brooks",
    address: "089 Kutch Green Apt. 448",
    dateone: "04 Sep 2019",
    type: "Electric",
    status: "Completed",
  },
  {
    id: "00002",
    name: "Rosie Pearson",
    address: "979 Immanuel Ferry Suite 526",
    dateone: "28 May 2019",
    type: "Book",
    status: "Processing",
  },
  {
    id: "00003",
    name: "Darrell Caldwell",
    address: "8587 Frida Ports",
    dateone: "23 Nov 2019",
    type: "Medicine",
    status: "Rejected",
  },
  {
    id: "00004",
    name: "Gilbert Johnston",
    address: "768 Destiny Lake Suite 600",
    dateone: "05 Feb 2019",
    type: "Mobile",
    status: "Completed",
  },
  {
    id: "00005",
    name: "Alan Cain",
    address: "042 Mylene Throughway",
    dateone: "29 Jul 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00006",
    name: "Alfred Murray",
    address: "543 Weimann Mountain",
    dateone: "15 Aug 2019",
    type: "Medicine",
    status: "Completed",
  },
  {
    id: "00007",
    name: "Maggie Sullivan",
    address: "New Scottieberg",
    dateone: "21 Dec 2019",
    type: "Watch",
    status: "Processing",
  },
  { id: "00008", name: "Rosie Todd", address: "New Jon", dateone: "30 Apr 2019", type: "Medicine", status: "On Hold" },
  {
    id: "00009",
    name: "Dollie Hines",
    address: "124 Lyla Forge Suite 975",
    dateone: "09 Jan 2019",
    type: "Book",
    status: "In Transit",
  },
];

type TableRowType = { id: string; name: string; address: string; dateone: string; type: string; status: string };

export default function DarkNinePage() {
  const tableColumns = useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("id", {
        cell: (info) => (
          <Heading as="p" className="!text-white-A700_e5">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="py-[15px] pl-[30px] !font-extrabold !text-white-A700_f2 sm:pl-5">
            ID
          </Heading>
        ),
        meta: { width: "175px" },
      }),
      tableColumnHelper.accessor("name", {
        cell: (info) => (
          <Heading as="p" className="!text-white-A700_e5">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="py-[15px] !font-extrabold !text-white-A700_f2">
            NAME
          </Heading>
        ),
        meta: { width: "200px" },
      }),
      tableColumnHelper.accessor("address", {
        cell: (info) => (
          <Heading as="p" className="!text-white-A700_e5">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="py-3.5 !font-extrabold !text-white-A700_f2">
            ADDRESS
          </Heading>
        ),
        meta: { width: "247px" },
      }),
      tableColumnHelper.accessor("dateone", {
        cell: (info) => (
          <Heading as="p" className="!text-white-A700_e5">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="py-3.5 !font-extrabold !text-white-A700_f2">
            DATE
          </Heading>
        ),
        meta: { width: "193px" },
      }),
      tableColumnHelper.accessor("type", {
        cell: (info) => (
          <Heading as="p" className="!text-white-A700_e5">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="py-3.5 !font-extrabold !text-white-A700_f2">
            TYPE
          </Heading>
        ),
        meta: { width: "170px" },
      }),
      tableColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex">
            <Button shape="round" className="min-w-[92px] !rounded font-bold">
              {info?.getValue?.()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Heading as="p" className="py-3.5 pl-[15px] !font-extrabold !text-white-A700_f2">
            STATUS
          </Heading>
        ),
        meta: { width: "148px" },
      }),
    ];
  }, []);

  return (
    <>
     
         
            <div className="px-[30px] flex w-[100%] flex-col items-start gap-[22px] md:w-full">
              <Heading size="7xl" as="h1" className="tracking-[-0.11px]">
                Order Lists
              </Heading>
              <div className="flex w-[72%] items-center justify-evenly gap-6 rounded-[10px] border border-solid border-blue_gray-800 bg-blue_gray-900_01 md:w-full md:flex-col">
                <div className="flex items-center gap-6 md:p-5">
                  <Img src="/images/img_filter.svg" alt="filteroneone" className="h-[22px]" />
                  <div className="h-full w-px bg-gray-500_af" />
                </div>
                <div className="flex items-center gap-6 md:p-5">
                  <Heading as="h2" className="!font-bold">
                    Filter By
                  </Heading>
                  <div className="h-full w-px bg-gray-500_af" />
                </div>
                <div className="flex w-[13%] items-center justify-between gap-5 md:w-full md:p-5">
                  <Heading as="h3" className="!font-bold">
                    Date
                  </Heading>
                  <Img src="/images/img_arrow_left_white_a700.svg" alt="arrowdownone" className="h-[10px] w-[10px] rotate-[270deg]" />
                  <div className="h-full w-px bg-gray-500_af" />
                </div>
                <div className="flex w-[40%] gap-[23px] md:w-full md:flex-row md:p-5">
                  <div className="flex w-full items-center justify-between gap-5">
                    <Heading as="h4" className="!font-bold">
                      Order Type
                    </Heading>
                    <Img src="/images/img_arrow_left_white_a700.svg" alt="arrowdownone" className="h-[10px] w-[10px] rotate-[270deg]" />
                    <div className="h-full w-px bg-gray-500_af" />
                  </div>
                  <div className="flex w-full items-center justify-between gap-5">
                    <Heading as="h5" className="!font-bold">
                      Order Status
                    </Heading>
                   <Img src="/images/img_arrow_left_white_a700.svg" alt="arrowdownone" className="h-[10px] w-[10px] rotate-[270deg]" />
                    <div className="h-full w-px bg-gray-500_af" />
                  </div>
                </div>
                <div className="flex items-center gap-[7px] self-end md:mb-0 md:p-5">
                  <Img src="/images/img_clock.svg" alt="clockoneone_one" className="h-[18px] w-[17px] self-start" />
                  <Heading as="h6" className="!text-deep_orange-400">
                    Reset Filter
                  </Heading>
                </div>
              </div>
              <ReactTable
                size="sm"
                bodyProps={{ className: "" }}
                headerProps={{
                  className:
                    "border-blue_gray-800 border border-solid bg-blue_gray-800_05 rounded-tl-[14px] rounded-tr-[14px] flex-wrap",
                }}
                rowDataProps={{ className: "md:flex-col" }}
                className="self-stretch"
                columns={tableColumns}
                data={tableData}
              />
              <div className="mb-[9px] flex items-center justify-between gap-5 self-stretch">
                <Heading as="p" className="!text-white-A700_99_02">
                  Showing 1-09 of 78
                </Heading>
                <Img src="/images/img_television.svg" alt="televisionone" className="h-[30px] w-[8%]" />
              </div>
            </div>

    </>
  );
}
