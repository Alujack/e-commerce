"use client"
import React from "react";

const sizes = {
  "3xl": "text-lg font-bold",
  "2xl": "text-[17px] font-bold",
  "5xl": "text-xl font-bold",
  "4xl": "text-[19px] font-semibold",
  "7xl": "text-[23px] font-bold md:text-[21px]",
  "6xl": "text-[22px] font-semibold",
  "9xl": "text-[25px] font-semibold md:text-[23px] sm:text-[21px]",
  "8xl": "text-2xl font-extrabold md:text-[22px]",
  "14xl": "text-[52px] font-semibold md:text-[44px] sm:text-[38px]",
  "13xl": "text-[45px] font-bold md:text-[41px] sm:text-[35px]",
  xl: "text-base font-semibold",
  s: "text-[13px] font-semibold",
  md: "text-sm font-bold",
  "12xl": "text-[32px] font-bold md:text-3xl sm:text-[28px]",
  xs: "text-xs font-black",
  lg: "text-[15px] font-black",
  "11xl": "text-3xl font-bold md:text-[28px] sm:text-[26px]",
  "10xl": "text-[28px] font-bold md:text-[26px] sm:text-2xl",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "md",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-nunitosans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
