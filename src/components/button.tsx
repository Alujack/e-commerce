"use client"
import React from "react";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-md",
} as const;
const variants = {
  fill: {
    red_600_01: "bg-red-600_03 text-gray-50",
    blue_A700: "bg-blue-A700_02 text-white-A700",
    gray_50_01: "bg-gray-50_03 text-blue_gray-900_07",
    red_600: "bg-red-600 text-red-600",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
    gray_200_01: "bg-gray-200_06 text-black-900_01",
    black_900_01: "bg-black-900_01 text-white-A700",
    blue_gray_50_02: "bg-blue_gray-50_06 text-black-900_01",
    teal_800: "bg-teal-800 text-white-A700",
    blue_gray_50: "bg-blue_gray-50 text-black-900_01",
    gray_300_05: "bg-gray-300_12",
    red_A700_11: "bg-red-A700_11_01 text-gray-800",
    green_A700_01: "bg-green-A700_03 text-red-600",
    gray_900_01: "bg-gray-900_12 text-white-A700",
    white_A700: "bg-white-A700",
    gray_200_03: "bg-gray-200_03 text-black-900_01",
    green_700: "bg-green-700 text-white-A700",
    gray_200_02: "bg-gray-200_02 text-gray-800_01",
    gray_900_04: "bg-gray-900_04 text-white-A700",
  },
  outline: {
    gray_500_33: "border-gray-500_33_01 border border-solid text-black-900_01",
  },
  gradient: {
    light_blue_400_blue_600: "bg-gradient",
  },
} as const;
const sizes = {
  "11xl": "h-[56px] px-[35px] text-base",
  "14xl": "h-[68px] px-[35px] text-base",
  "13xl": "h-[65px] px-[35px] text-base",
  "15xl": "h-[80px] px-[13px] text-[6px]",
  "12xl": "h-[62px] pl-[17px] pr-[35px] text-2xl",
  "5xl": "h-[40px] px-4 text-sm",
  md: "h-[29px] px-[7px] text-[13px]",
  "3xl": "h-[35px] px-[35px] text-lg",
  "4xl": "h-[37px] px-[35px] text-[13px]",
  sm: "h-[24px] px-[9px] text-[13px]",
  xs: "h-[21px] px-[9px] text-[10px]",
  "9xl": "h-[48px] px-2",
  lg: "h-[31px] px-2.5 text-lg",
  "2xl": "h-[34px] px-[29px] text-xs",
  "10xl": "h-[50px] px-[35px] text-sm",
  "6xl": "h-[40px] px-[7px]",
  xl: "h-[32px] px-[7px]",
  "7xl": "h-[44px] px-3",
  "8xl": "h-[44px] px-6 text-base",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "8xl",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
