"use client"
import {useMemo} from "react";
import { Img, Heading, Button } from "@/components";
import { ReactTable } from "@/components/reacttable";
import { createColumnHelper } from "@tanstack/react-table";
import Stockproduct from "@/components/stockproduct"

const tableData = [
  {
    id: "00001",
    name: "Christine Brooks",
    address: "089 Kutch Green Apt. 448",
    date: "14 Feb 2019",
    type: "Electric",
    status: "Completed",
  },
  {
    id: "00002",
    name: "Rosie Pearson",
    address: "979 Immanuel Ferry Suite 526",
    date: "14 Feb 2019",
    type: "Book",
    status: "Processing",
  },
  {
    id: "00003",
    name: "Darrell Caldwell",
    address: "8587 Frida Ports",
    date: "14 Feb 2019",
    type: "Medicine",
    status: "Rejected",
  },
  {
    id: "00004",
    name: "Gilbert Johnston",
    address: "768 Destiny Lake Suite 600",
    date: "14 Feb 2019",
    type: "Mobile",
    status: "Completed",
  },
  {
    id: "00005",
    name: "Alan Cain",
    address: "042 Mylene Throughway",
    date: "14 Feb 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00006",
    name: "Alfred Murray",
    address: "543 Weimann Mountain",
    date: "14 Feb 2019",
    type: "Medicine",
    status: "Completed",
  },
    {
    id: "00007",
    name: "Alfred Murray",
    address: "543 Weimann Mountain",
    date: "14 Feb 2019",
    type: "Medicine",
    status: "Completed",
  },
   {
    id: "00008",
    name: "Alfred Murray",
    address: "543 Weimann Mountain",
    date: "14 Feb 2019",
    type: "Medicine",
    status: "Completed",
  },
   {
    id: "00009",
    name: "Alfred Murray",
    address: "543 Weimann Mountain",
    date: "14 Feb 2019",
    type: "Medicine",
    status: "Completed",
  },
   {
    id: "00009",
    name: "Alfred Murray",
    address: "543 Weimann Mountain",
    date: "14 Feb 2019",
    type: "Medicine",
    status: "Completed",
  },
];

type TableRowType = { id: string; name: string; address: string; date: string; type: string; status: string };

export default function DarkTwentyFivePage() {
  const tableColumns = useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("id", {
        cell: (info) => <Heading as="p">{info?.getValue?.()}</Heading>,
        header: (info) => (
          <Heading as="h2" className="py-3.5 pl-[31px] !font-extrabold !text-white-A700_f2_02 sm:pl-5">
            ID
          </Heading>
        ),
        meta: { width: "176px" },
      }),
      tableColumnHelper.accessor("name", {
        cell: (info) => <Heading as="p">{info?.getValue?.()}</Heading>,
        header: (info) => (
          <Heading as="h3" className="py-3.5 !font-extrabold !text-white-A700_f2_02">
            NAME
          </Heading>
        ),
        meta: { width: "201px" },
      }),
      tableColumnHelper.accessor("address", {
        cell: (info) => <Heading as="p">{info?.getValue?.()}</Heading>,
        header: (info) => (
          <Heading as="h4" className="py-3.5 !font-extrabold !text-white-A700_f2_02">
            ADDRESS
          </Heading>
        ),
        meta: { width: "249px" },
      }),
      tableColumnHelper.accessor("date", {
        cell: (info) => <Heading as="p">{info?.getValue?.()}</Heading>,
        header: (info) => (
          <Heading as="h5" className="py-3.5 !font-extrabold !text-white-A700_f2_02">
            DATE
          </Heading>
        ),
        meta: { width: "194px" },
      }),
      tableColumnHelper.accessor("type", {
        cell: (info) => <Heading as="p">{info?.getValue?.()}</Heading>,
        header: (info) => (
          <Heading as="h6" className="py-3.5 !font-extrabold !text-white-A700_f2_02">
            TYPE
          </Heading>
        ),
        meta: { width: "171px" },
      }),
      tableColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex">
            <Button color="teal_A700_02" shape="round" className="!rounded">
              {info?.getValue?.()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Heading as="p" className="py-3.5 pl-4 !font-extrabold !text-white-A700_f2_02">
            STATUS
          </Heading>
        ),
        meta: { width: "149px" },
      }),
    ];
  }, []);

  return (
    <>
     
              <div className="px-[30px] flex w-[100%] flex-col items-start gap-[26px] md:w-full">
                <Heading size="lg" as="h1" className="tracking-[-0.11px] !text-white-A700">
                  Table
                </Heading>
                <ReactTable
                  size="xs"
                  bodyProps={{ className: "" }}
                  headerProps={{
                    className:
                      "border-blue_gray-800_11 border border-solid bg-blue_gray-800_13 rounded-tl-[14px] rounded-tr-[14px] flex-wrap",
                  }}
                  rowDataProps={{ className: "md:flex-col" }}
                  className="self-stretch rounded-[14px] border border-solid border-blue_gray-800_11 bg-blue_gray-900_01"
                  columns={tableColumns}
                  data={tableData}
                />
                <div className="self-stretch">
                  <div className="flex items-center justify-between gap-5 rounded-tl-lg rounded-tr-lg border border-solid border-blue_gray-800_11 bg-blue_gray-800_13 p-[11px] md:flex-col">
                    <div className="ml-7 flex w-[20%] flex-wrap justify-between gap-5 self-end md:ml-0 md:w-full">
                      <Heading as="p" className="self-end !font-bold !text-white-A700">
                        Image
                      </Heading>
                      <Heading as="p" className="self-start !font-bold !text-white-A700">
                        Product Name
                      </Heading>
                    </div>
                    <div className="flex w-[50%] justify-between gap-5 self-end md:w-full">
                      <Heading as="p" className="self-end !font-bold !text-white-A700">
                        Category
                      </Heading>
                      <Heading as="p" className="self-start !font-bold !text-white-A700">
                        Price
                      </Heading>
                      <div className="flex w-[41%] flex-wrap justify-between gap-5 self-start">
                        <Heading as="p" className="!font-bold !text-white-A700">
                          Piece
                        </Heading>
                        <Heading as="p" className="!font-bold !text-white-A700">
                          Available Color
                        </Heading>
                      </div>
                    </div>
                    <Heading as="p" className="mr-[37px] self-end !font-bold !text-white-A700 md:mr-0">
                      Action
                    </Heading>
                  </div>

                <div className="flex flex-col gap-6 rounded-bl-[14px] rounded-br-[14px] border border-solid border-blue_gray-800 bg-blue_gray-900_01 py-6 sm:py-5">
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                
                </div>
                </div>
              </div>
           

    </>
  );
}
