"use client"
import {useState,useRef,useMemo} from "react";
import {Heading,Button,Img} from "@/components"
import { ReactTable } from "@/components/reacttable"
import { createColumnHelper } from "@tanstack/react-table";
import AliceCarousel, { EventObject } from "react-alice-carousel";
export default function Favorite(){
    const tableData = [
  { serialno: "1", description: "Children Toy", quantity: "2", timeZone: "$20", timeZone1: "$80" },
  { serialno: "2", description: "Makeup", quantity: "2", timeZone: "$50", timeZone1: "$100" },
  { serialno: "3", description: "Asus Laptop", quantity: "5", timeZone: "$100", timeZone1: "$500" },
  { serialno: "4", description: "Iphone X", quantity: "4", timeZone: "$1000", timeZone1: "$4000" },
];

type TableRowType = { serialno: string; description: string; quantity: string; timeZone: string; timeZone1: string };


  const [searchBarValue5, setSearchBarValue5] = useState("");
  const [sliderState, setSliderState] = useState(0);
  const sliderRef = useRef<AliceCarousel>(null);
  const [searchBarValue6, setSearchBarValue6] = useState("");
  const [searchBarValue8, setSearchBarValue8] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const tableColumns = useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("serialno", {
        cell: (info) => (
          <Heading as="p" className="text-center">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="px-[35px] py-3.5 text-center sm:px-5">
            Serial No.
          </Heading>
        ),
        meta: { width: "241px" },
      }),
      tableColumnHelper.accessor("description", {
        cell: (info) => (
          <Heading as="p" className="text-center">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="pb-[11px] pl-1 pt-4 text-center">
            Description
          </Heading>
        ),
        meta: { width: "397px" },
      }),
      tableColumnHelper.accessor("quantity", {
        cell: (info) => (
          <Heading as="p" className="text-center">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="pb-[11px] pt-4 text-center">
            Quantity
          </Heading>
        ),
        meta: { width: "147px" },
      }),
      tableColumnHelper.accessor("timeZone", {
        cell: (info) => (
          <Heading as="p" className="text-center">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="py-3.5 text-center">
            Base Cost
          </Heading>
        ),
        meta: { width: "162px" },
      }),
      tableColumnHelper.accessor("timeZone1", {
        cell: (info) => (
          <Heading as="p" className="text-center">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading as="p" className="py-3.5 text-center">
            Total Cost
          </Heading>
        ),
        meta: { width: "127px" },
      }),
    ];
  }, []);
    return <>
    <div className="flex h-[100%] items-start  md:h-auto md:flex-col">

         <div className="flex flex-1 flex-col items-center gap-[37px] md:self-stretch md:p-5">
    <Heading size="2xl" as="h1" className="ml-[30px] self-start tracking-[-0.11px] md:ml-0">
                Invoice
              </Heading>

              {/* invoice section */}
              <div className="flex w-[95%] flex-col items-end rounded-[14px] border border-solid border-blue_gray-800_03 bg-blue_gray-900_01 p-[31px] md:w-full sm:p-5">
                <div className="mt-[7px] flex w-[77%] items-start justify-between gap-5 self-center md:w-full md:flex-col">
                  <div className="flex w-[51%] items-center justify-between gap-5 md:w-full">
                    <div className="flex flex-col items-start">
                      <Heading size="md" as="h2">
                        Invoice From :
                      </Heading>
                      <Heading size="md" as="h3" className="mt-[13px] !font-bold">
                        Virginia Walker
                      </Heading>
                      <Heading as="h4" className="!text-white-A700_99_01">
                        9694 Krajcik Locks Suite 635
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start">
                      <Heading size="md" as="h5">
                        Invoice To :
                      </Heading>
                      <Heading size="md" as="h6" className="mt-[11px] !font-bold">
                        Austin Miller
                      </Heading>
                      <Heading as="p" className="!text-white-A700_99_01">
                        Brookview
                      </Heading>
                    </div>
                  </div>
                  <div className="mt-[11px] flex flex-col items-start gap-2.5">
                    <Heading size="md" as="h6">
                      Invoice Date : 12 Nov 2019
                    </Heading>
                    <Heading size="md" as="h6">
                      Due Date : 25 Dec 2019
                    </Heading>
                  </div>
                </div>

                {/* invoice table section */}
                <ReactTable
                  size="xs"
                  bodyProps={{ className: "" }}
                  headerProps={{
                    className: "border-blue_gray-800_03 border border-solid bg-blue_gray-800_04 flex-wrap rounded-lg",
                  }}
                  rowDataProps={{ className: "flex-wrap" }}
                  className="mt-14 self-stretch"
                  columns={tableColumns}
                  data={tableData}
                />

                {/* invoice total section */}
                <div className="mr-[72px] mt-6 flex flex-wrap gap-3 md:mr-0">
                  <Heading size="md" as="h6" className="text-center !font-extrabold">
                    Total =
                  </Heading>
                  <Heading size="md" as="h6" className="text-center !font-extrabold">
                    $4680
                  </Heading>
                </div>

                {/* invoice actions section */}
                <div className="mb-[180px] mt-[60px] flex gap-4">
                  <Button size="sm" shape="round" className="w-[50px] border border-solid border-blue_gray-100_1d_01">
                    <Img src="images/img_pinterest.svg" />
                  </Button>
                  <Button
                    size="xs"
                    shape="round"
                    rightIcon={<Img src="images/img_cursor.svg" alt="cursor" className="h-[14px] w-[14px]" />}
                    className="min-w-[173px] gap-[35px] font-bold sm:pl-5"
                  >
                    Send
                  </Button>
                </div>
              </div>
              </div>
              </div>
    </>
}