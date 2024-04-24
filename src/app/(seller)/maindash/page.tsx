// "use client"
// import React from "react";
// import { Text, Img, Heading, Input, Button } from "@/components";
// import Link from "next/link";

// const data = [{ rectangle22: "images/img_rectangle_22.png" }, { rectangle22: "img_rectangle_22_235x350.png" }];
// const data1 = [
//   {
//     iconfinderbusi: "images/img_iconfinder_busi.svg",
//     Data: "-$850",
//     depositfrommy: "Deposit from my Card",
//     january2021: "28 January 2021",
//   },
//   {
//     iconfinderbusi: "images/img_iconfinder_payp.svg",
//     Data: "+$2,500",
//     depositfrommy: "Deposit Paypal",
//     january2021: "25 January 2021",
//   },
//   {
//     iconfinderbusi: "images/img_iconfinder_6_4753731.svg",
//     Data: "+$5,400",
//     depositfrommy: "Jemi Wilson",
//     january2021: "21 January 2021",
//   },
// ];
// interface Props {
//   className?: string;
//   myCards?: string;
//   seeAll?: string;
//   recentTransaction?: string;
//   depositFromMy?: string;
//   p28january2021?: string;
//   p850?: string;
//   depositPaypal?: string;
//   p25january2021?: string;
//   p2500?: string;
//   jemiWilson?: string;
//   p21january2021?: string;
//   p5400?: string;
//   quickTransfer?: string;
//   yoeurnYan?: string;
//   ceo?: string;
//   cto?: string;
//   samNisa?: string;
//   vibolSen?: string;
//   administration?: string;
//   writeAmount?: string;
//   balanceHistory?: string;
//   p800?: string;
//   p600?: string;
//   p400?: string;
//   p200?: string;
//   p0?: string;
//   jul?: string;
//   aug?: string;
//   sep?: string;
//   oct?: string;
//   nov?: string;
//   dec?: string;
//   jan?: string;
//   weeklyActivity?: string;
//   diposit?: string;
//   withdraw?: string;
//   p500?: string;
//   p4001?: string;
//   p300?: string;
//   p2001?: string;
//   p100?: string;
//   p01?: string;
//   sat?: string;
//   sun?: string;
//   mon?: string;
//   tue?: string;
//   wed?: string;
//   thu?: string;
//   fri?: string;
//   expenseStatistics?: string;
//   p30entertainment?: string;
//   p15billexpense?: string;
//   p20investment?: string;
//   p35others?: string;
// }
// let datamain={
//   myCards :"My Cards",
//   seeAll : "See All",
//   recentTransaction : "Recent Transaction",
//   quickTransfer : "Quick Transfer",
//   yoeurnYan : "Yoeurn Yan",
//   ceo :"CEO",
//   cto : "CTO",
//   samNisa :"Sam Nisa",
//   vibolSen : "Vibol Sen",
//   administration : "Administration ",
//   writeAmount : "Write Amount",
//   balanceHistory : "Balance History",
//   p800 : "800",
//   p600 : "600",
//   p400 : "400",
//   p200 : "200",
//   p0 : "0",
//   jul : "Jul",
//   aug : "Aug",
//   sep : "Sep",
//   oct : "Oct",
//   nov : "Nov ",
//   dec : "Dec",
//   jan : "Jan",
//   weeklyActivity : "Weekly Activity",
//   diposit : "Diposit",
//   withdraw : "Withdraw",
//   p500 : "500",
//   p4001 : "400",
//   p300 : "300",
//   p2001 : "200",
//   p100 : "100",
//   p01 : "0",
//   sat : "Sat",
//   sun : "Sun",
//   mon : "Mon",
//   tue : "Tue",
//   wed : "Wed",
//   thu : "Thu",
//   fri : "Fri",
//   expenseStatistics : "Expense Statistics",
// }
// export default function MainDashboard({
//   myCards = "My Cards",
//   seeAll = "See All",
//   recentTransaction = "Recent Transaction",
//   quickTransfer = "Quick Transfer",
//   yoeurnYan = "Yoeurn Yan",
//   ceo = "CEO",
//   cto = "CTO",
//   samNisa = "Sam Nisa",
//   vibolSen = "Vibol Sen",
//   administration = "Administration ",
//   writeAmount = "Write Amount",
//   balanceHistory = "Balance History",
//   p800 = "800",
//   p600 = "600",
//   p400 = "400",
//   p200 = "200",
//   p0 = "0",
//   jul = "Jul",
//   aug = "Aug",
//   sep = "Sep",
//   oct = "Oct",
//   nov = "Nov ",
//   dec = "Dec",
//   jan = "Jan",
//   weeklyActivity = "Weekly Activity",
//   diposit = "Diposit",
//   withdraw = "Withdraw",
//   p500 = "500",
//   p4001 = "400",
//   p300 = "300",
//   p2001 = "200",
//   p100 = "100",
//   p01 = "0",
//   sat = "Sat",
//   sun = "Sun",
//   mon = "Mon",
//   tue = "Tue",
//   wed = "Wed",
//   thu = "Thu",
//   fri = "Fri",
//   expenseStatistics = "Expense Statistics",

// }:Props) {
//   return (
//     <div>
//       <div className="flex w-full flex-col gap-[37px] p-[25px] sm:pb-5  bg-blue_gray-50 ">
//         <div className="flex items-center gap-[30px] pr-20 md:flex-col md:pr-5">
//           <div className="flex flex-1 flex-col gap-5 md:self-stretch">
//             <div className="flex flex-wrap items-center justify-between gap-5">
//               <Heading as="h1">{myCards}</Heading>
//               <Link href="#" className="self-start">
//                 <Heading size="lg" as="h2" className="text-right">
//                   {seeAll}
//                 </Heading>
//               </Link>
//             </div>
//             <div className="flex gap-[3px] md:flex-col">
//               {data.map((d, index) => (
//                 <Img
//                   key={"frame1000006432" + index}
//                   src="/images/img_rectangle_22.png"
//                   width={361}
//                   height={235}
//                   alt="Rectangle 22"
//                   className="h-[235px] w-[50%] rounded-[25px] object-cover md:w-full"
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="flex w-[40%] flex-col items-center gap-[19px] md:w-full">
//             <Heading as="h3">{recentTransaction}</Heading>
//             <div className="flex flex-col gap-2.5 self-stretch rounded-[25px] bg-white-A700_01 p-6 sm:p-5">
//               {data1.map((d, index) => (
//                 <div key={"group398" + index} className="flex items-center gap-[17px]">
//                   <Button size="6xl" shape="circle" className="w-[55px] !rounded-[27px] !bg-orange-50_05">
//                     <Img src={d.iconfinderbusi} width={55} height={55} />
//                   </Button>
//                   <div className="mb-[3px] flex flex-col items-start gap-[5px] self-end">
//                     <Text size="xl" as="p" className="!font-medium !text-gray-900_07">
//                       {d.depositfrommy}
//                     </Text>
//                     <Text size="lg" as="p">
//                       {d.january2021}
//                     </Text>
//                   </div>
//                   <Text size="xl" as="p" className="text-right !font-medium !text-red-A200_05">
//                     {d.Data}
//                   </Text>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="mx-auto flex w-full  items-center justify-between gap-5 md:flex-col md:p-5">
//           <div className="flex w-[50%] flex-col items-start gap-[19px] md:w-full">
//             <Heading as="h2">{quickTransfer}</Heading>
//             <div className="flex flex-col gap-7 self-stretch rounded-[25px] bg-white-A700_01 p-[25px] sm:p-5">
//               <div className="mt-2.5 flex items-center gap-4 sm:flex-col">
//                 <div className="flex flex-1 items-center gap-[29px] sm:self-stretch">
//                   <div className="flex flex-1 items-start">
//                     <div className="relative z-[1] flex flex-1 flex-col items-start gap-3.5">
//                       <Img
//                         src="images/img_pexels_julia_volk_5273755.png"
//                         width={70}
//                         height={70}
//                         alt="pexels julia volk 5273755"
//                         className="ml-[5px] h-[70px] w-[70px] rounded-[50%] md:ml-0"
//                       />
//                       <div className="flex flex-col items-start gap-[3px] self-stretch">
//                         <Text size="xl" as="p" className="!text-gray-900_07">
//                           {yoeurnYan}
//                         </Text>
//                         <div className="flex w-[86%] flex-wrap items-center justify-between gap-5 self-end md:w-full">
//                           <Text size="lg" as="p">
//                             {ceo}
//                           </Text>
//                           <Text size="lg" as="p">
//                             {cto}
//                           </Text>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="relative ml-[-51px] flex w-[29%] flex-col gap-3.5">
//                       <Img
//                         src="images/img_marcel_strauss.png"
//                         width={70}
//                         height={70}
//                         alt="marcel strauss "
//                         className="h-[70px] w-[70px] rounded-[50%]"
//                       />
//                       <Text size="xl" as="p" className="!text-gray-900_07">
//                         {samNisa}
//                       </Text>
//                     </div>
//                   </div>
//                   <div className="flex w-[34%] flex-col items-center gap-3.5">
//                     <div className="w-[68%] md:w-full">
//                       <Img
//                         src="images/img_austin_distel_7.png"
//                         width={70}
//                         height={70}
//                         alt="austin distel 7"
//                         className="h-[70px] w-[70px] rounded-[50%]"
//                       />
//                       <Img
//                         src="images/img_emanuel_minca_j.png"
//                         width={70}
//                         height={70}
//                         alt="emanuel minca j"
//                         className="relative mt-[-70px] h-[70px] w-[70px] rounded-[50%]"
//                       />
//                     </div>
//                     <div className="flex flex-col items-center gap-[3px]">
//                       <Text size="xl" as="p" className="!text-gray-900_07">
//                         {vibolSen}
//                       </Text>
//                       <Text size="lg" as="p">
//                         {administration}
//                       </Text>
//                     </div>
//                   </div>
//                 </div>
//                 <Button shape="circle" className="w-[50px] !rounded-[25px] !bg-white-A700_01 shadow-xs">
//                   <Img src="images/img_arrow_right.svg" width={50} height={50} />
//                 </Button>
//               </div>
//               <div className="mb-2.5 flex items-center gap-[27px] sm:flex-col">
//                 <Text size="xl" as="p">
//                   {writeAmount}
//                 </Text>
//                 <Input
//                   name="Group 311"
//                   placeholder={`525.50`}
//                   className="gap-[35px]  bg-blue_gray-50  sm:px-5"
//                 />
//                 <Button shape ="round" size="3xl" color="blue_A700">Send</Button>
//               </div>
//             </div>
//           </div>
//           <div className="flex w-[45%] flex-col items-start gap-[17px] md:w-full">
//             <Heading as="h3">{balanceHistory}</Heading>
//             <div className="flex items-start self-stretch rounded-[25px] bg-white-A700_01 p-[23px] sm:flex-col sm:p-5">
//               <div className="relative z-[2] mt-[3px] flex w-[7%] flex-col items-end gap-[30px] sm:w-full">
//                 <div className="flex items-center gap-2 self-stretch">
//                   <Text as="p" className="text-right">
//                     {p800}
//                   </Text>
//                   <div className="h-px w-[6px] bg-indigo-300_05" />
//                 </div>
//                 <div className="flex items-center gap-2 self-stretch">
//                   <Text as="p" className="text-right">
//                     {p600}
//                   </Text>
//                   <div className="h-px w-[6px] bg-indigo-300_05" />
//                 </div>
//                 <div className="flex items-center gap-2 self-stretch">
//                   <Text as="p" className="text-right">
//                     {p400}
//                   </Text>
//                   <div className="h-px w-[6px] bg-indigo-300_05" />
//                 </div>
//                 <div className="flex items-center gap-[7px] self-stretch">
//                   <Text as="p" className="text-right">
//                     {p200}
//                   </Text>
//                   <div className="h-px w-[6px] bg-indigo-300_05" />
//                 </div>
//                 <div className="flex w-[59%] items-end md:w-full">
//                   <Text size="xs" as="p" className="text-right">
//                     {p0}
//                   </Text>
//                   <div className="mb-1.5 ml-2 h-px w-[6px] flex-1 bg-indigo-300_05" />
//                   <Img src="images/img_group_indigo_300.svg" width={1} height={4} alt="Group" className="h-[4px]" />
//                 </div>
//               </div>
//               <div className="relative mb-1 ml-[-1px] mt-[11px] flex flex-1 flex-col items-center gap-0.5 sm:ml-0 sm:self-stretch">
//                 <div className="h-[185px] self-stretch bg-[url(/images/img_group_1060.svg)] bg-cover bg-no-repeat md:h-auto">
//                   <Img
//                     src="images/img_vector.png"
//                     width={547}
//                     height={177}
//                     alt="Vector"
//                     className="h-[177px] w-full object-cover md:h-auto"
//                   />
//                 </div>
//                 <div className="flex w-[71%] justify-between gap-5 md:w-full">
//                   <Img src="images/img_group_indigo_300.svg" width={1} height={4} alt="Group" className="h-[4px]" />
//                   <Img src="images/img_group_indigo_300.svg" width={1} height={4} alt="Group" className="h-[4px]" />
//                   <Img src="images/img_group_indigo_300.svg" width={1} height={4} alt="Group" className="h-[4px]" />
//                   <Img src="images/img_group_indigo_300.svg" width={1} height={4} alt="Group" className="h-[4px]" />
//                   <Img src="images/img_group_indigo_300.svg" width={1} height={4} alt="Group" className="h-[4px]" />
//                   <Img src="images/img_group_indigo_300.svg" width={1} height={4} alt="Group" className="h-[4px]" />
//                 </div>
//                 <div className="flex w-[90%] justify-between gap-5 self-start md:w-full sm:flex-col">
//                   <div className="flex w-[19%] flex-wrap justify-between gap-5 sm:w-full">
//                     <Text size="md" as="p" className="h-[17px] self-start">
//                       {jul}
//                     </Text>
//                     <Text size="md" as="p" className="self-end">
//                       {aug}
//                     </Text>
//                   </div>
//                   <div className="flex w-[68%] flex-wrap justify-between gap-5 sm:w-full">
//                     <Text size="md" as="p" className="self-end">
//                       {sep}
//                     </Text>
//                     <Text size="md" as="p" className="self-start">
//                       {oct}
//                     </Text>
//                     <Text size="md" as="p" className="self-start">
//                       {nov}
//                     </Text>
//                     <Text size="md" as="p" className="self-start">
//                       {dec}
//                     </Text>
//                     <Text size="md" as="p" className="self-start">
//                       {jan}
//                     </Text>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center gap-[30px] md:flex-col">
//           <div className="flex w-[63%] flex-col items-start gap-[15px] md:w-full">
//             <Heading as="h2">{weeklyActivity}</Heading>
//             <div className="flex flex-col items-end gap-5 self-stretch rounded-[25px] bg-white-A700_01 p-[26px] sm:p-5">
//               <div className="mr-[3px] flex w-[29%] gap-[30px] md:mr-0 md:w-full">
//                 <div className="flex w-[45%] items-center gap-2.5 self-end">
//                   <div className="h-[15px] w-[15px] self-start rounded-[7px] bg-teal-A400_05" />
//                   <Text size="lg" as="p">
//                     {diposit}
//                   </Text>
//                 </div>
//                 <div className="flex flex-1 items-center gap-2.5 self-start">
//                   <div className="h-[15px] w-[15px] self-end rounded-[7px] bg-pink-A100_05" />
//                   <Text size="lg" as="p">
//                     {withdraw}
//                   </Text>
//                 </div>
//               </div>
//               <div className="relative mr-[3px] h-[226px] self-stretch md:mr-0">
//                 <div className="absolute right-[0.00px] top-[7.73px] m-auto flex w-[95%] flex-col gap-9">
//                   <div className="h-px bg-gray-100_14" />
//                   <div className="h-px bg-gray-100_14" />
//                   <div className="h-px bg-gray-100_14" />
//                   <div className="h-px bg-gray-100_14" />
//                   <div className="h-px bg-gray-100_14" />
//                   <div className="h-px bg-gray-100_14" />
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[96%] flex-col items-end gap-2">
//                   <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
//                     <div className="flex flex-col items-center gap-[21px]">
//                       <Text as="p" className="text-right">
//                         {p500}
//                       </Text>
//                       <Text as="p" className="text-right">
//                         {p4001}
//                       </Text>
//                       <Text as="p" className="text-right">
//                         {p300}
//                       </Text>
//                       <Text as="p" className="text-right">
//                         {p2001}
//                       </Text>
//                       <Text as="p" className="self-start text-right">
//                         {p100}
//                       </Text>
//                       <Text as="p" className="mr-[3px] self-end text-right md:mr-0">
//                         {p01}
//                       </Text>
//                     </div>
//                     <Img
//                       src="images/img_group_39.svg"
//                       width={582}
//                       height={178}
//                       alt="Group 39"
//                       className="h-[178px] w-[91%] md:w-full"
//                     />
//                   </div>
//                   <div className="mr-[13px] flex w-[89%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
//                     <Text as="p" className="text-center">
//                       {sat}
//                     </Text>
//                     <Text as="p" className="text-center">
//                       {sun}
//                     </Text>
//                     <Text as="p" className="text-center">
//                       {mon}
//                     </Text>
//                     <Text as="p" className="text-center">
//                       {tue}
//                     </Text>
//                     <Text as="p" className="text-center">
//                       {wed}
//                     </Text>
//                     <Text as="p" className="text-center">
//                       {thu}
//                     </Text>
//                     <Text as="p" className="h-[16px] text-center">
//                       {fri}
//                     </Text>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex w-[30%] flex-col items-start gap-[15px] md:w-full">
//             <Heading as="h3">{expenseStatistics}</Heading>
//             <div className="relative h-[322px] self-stretch rounded-[25px] bg-white-A700_01 p-[31px] md:h-auto sm:p-5">
//               <Img src="images/img_group.svg" width={269} height={259} alt="Group" className="h-[259px] w-[93%]" />
//               <div className="absolute left-0 right-0 top-[20%] m-auto flex w-[79%] flex-col items-start gap-[9px]">
//                 <Text
//                   as="p"
//                   className="ml-12 w-[56%] text-center !font-medium leading-[18px] !text-white-A700_01 md:ml-0 md:w-full"
//                 >
//                   <span className="text-base font-bold text-white-A700_01">
//                     <>
//                       30%
//                       <br />
//                     </>
//                   </span>
//                   <span className="font-bold text-white-A700_01">Entertainment</span>
//                 </Text>
//                 <Text
//                   as="p"
//                   className="w-[37%] self-end text-center !font-medium leading-[18px] !text-white-A700_01 md:w-full"
//                 >
//                   <span className="text-base font-bold text-white-A700_01">
//                     <>
//                       15%
//                       <br />
//                     </>
//                   </span>
//                   <span className="font-bold text-white-A700_01">Bill Expense</span>
//                 </Text>
//                 <div className="flex w-[82%] items-start justify-between gap-5 md:w-full">
//                   <Text
//                     as="p"
//                     className="mb-[30px] w-[42%] text-center !font-medium leading-[18px] !text-white-A700_01"
//                   >
//                     <span className="text-base font-bold text-white-A700_01">
//                       <>
//                         20%
//                         <br />
//                       </>
//                     </span>
//                     <span className="font-bold text-white-A700_01">Investment</span>
//                   </Text>
//                   <Text as="p" className="w-[26%] text-center !font-medium leading-[18px] !text-white-A700_01">
//                     <span className="text-base font-bold text-white-A700_01">
//                       <>
//                         35%
//                         <br />
//                       </>
//                     </span>
//                     <span className="font-bold text-white-A700_01">Others</span>
//                   </Text>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function Maindash(){
  return (null);
}
