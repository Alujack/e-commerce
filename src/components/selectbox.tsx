// "use client"
// import React from "react";
// import Select, { Props } from "react-select";

// const shapes = {
//   round: "rounded",
//   square: "rounded-[0px]",
// } as const;
// const variants = {
//   fill: {
//     blue_gray_800_11: "bg-blue_gray-800_11 text-white-A700",
//     blue_gray_800_05: "bg-blue_gray-800_11 text-white-A700",
//   },
// } as const;
// const sizes = {
//   md: "h-[52px] pl-4 pr-[35px] text-sm",
//   sm: "h-[28px] pl-[18px] pr-[35px] text-xs",
//   xs: "h-[20px] pr-[19px] text-sm",
// } as const;

// type selectOptionType = { value: string; label: string };
// type SelectProps = Omit<Props, "getOptionLabel"> &
//   Partial<{
//     className: string;
//     options: selectOptionType[];
//     isSearchable: boolean;
//     isMulti: boolean;
//     onChange: (option: any) => void;
//     value: string;
//     indicator: React.ReactElement;
//     getOptionLabel: (e: any) => string;
//     [x: string]: any;
//     shape: keyof typeof shapes;
//     variant: keyof typeof variants;
//     size: keyof typeof sizes;
//     color: keyof (typeof variants)[keyof typeof variants];
//   }>;

// const SelectBox = React.forwardRef<any, SelectProps>(
//   (
//     {
//       children,
//       className = "",
//       options = [],
//       isSearchable = false,
//       isMulti = false,
//       indicator,
//       shape,
//       variant = "fill",
//       size = "xs",
//       color = "blue_gray_800_05",
//       ...restProps
//     },
//     ref,
//   ) => {
//     const menuPortalTarget = typeof document !== "undefined" ? document.body : null;
//     return (
//       <>
//         <Select
//           ref={ref}
//           options={options}
//           className={`${className} flex ${(shape) || ""} ${(size) || ""} ${(variant.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
//           isSearchable={isSearchable}
//           isMulti={isMulti}
//           components={{
//             IndicatorSeparator: () => null,
//             ...(indicator && { DropdownIndicator: () => indicator }),
//           }}
//           styles={{
//             container: (provided) => ({
//               ...provided,
//               zIndex: 0,
//             }),
//             control: (provided) => ({
//               ...provided,
//               backgroundColor: "transparent",
//               border: "0 !important",
//               boxShadow: "0 !important",
//               minHeight: "auto",
//               width: "100%",
//               "&:hover": {
//                 border: "0 !important",
//               },
//             }),
//             input: (provided) => ({
//               ...provided,
//               color: "inherit",
//             }),
//             option: (provided, state) => ({
//               ...provided,
//               backgroundColor: state.isSelected ? "#1e1d1d" : "transparent",
//               color: state.isSelected ? "#ffffff" : "inherit",
//               "&:hover": {
//                 backgroundColor: "#1e1d1d",
//                 color: "#ffffff",
//               },
//             }),
//             valueContainer: (provided) => ({
//               ...provided,
//               padding:  5,
//             }),
//             placeholder: (provided) => ({
//               ...provided,
//               margin: 0,
//             }),
//             menuPortal: (base) => ({ ...base, zIndex: 999999 }),
//           }}
//           menuPortalTarget={menuPortalTarget} 
//         closeMenuOnScroll={(event: any) => {
//           return event.target.id === "scrollContainer";
//         }}
//           {...restProps}
//         />
//         {children}
//       </>
//     );
//   },
// );

// export { SelectBox };
