import React from "react";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-[5px]",
} as const;
const variants = {
  fill: {
    blue_A200_e5_02: "bg-blue-A200_e5_02 text-white-A700",
    blue_gray_700: "bg-blue_gray-700",
    blue_gray_800_02: "bg-blue_gray-800_02",
    blue_gray_800_01: "bg-blue_gray-800_01 text-white-A700_e5",
    blue_A200_06: "bg-blue-A200_06 text-white-A700",
    yellow_700_01: "bg-yellow-700_01 text-white-A700",
    red_A200: "bg-red-A200 text-white-A700",
    blue_A200_05: "bg-blue-A200_05 text-white-A700",
    orange_300_01: "bg-orange-300_01 text-white-A700",
    purple_A700: "bg-purple-A700 text-white-A700",
    blue_A200_09: "bg-blue-A200_09 text-white-A700",
    blue_A200_e5: "bg-blue-A200_e5_02 text-white-A700",
    red_600: "bg-red-600 text-white-A700",
    blue_gray_800_04: "bg-blue_gray-800_04",
    deep_purple_A400: "bg-deep_purple-A400 text-white-A700",
    teal_A700: "bg-teal-A700_02 text-white-A700",
  },
  gradient: {
    blue_A200_02_light_blue_200: "bg-gradient",
    purple_A100_red_100: "bg-gradient1",
    indigo_A100_purple_100: "bg-gradient2",
  },
  outline: {
    blue_A200_05: "border-blue-A200_05 border-2 border-solid text-blue-A200_05",
    gray_200_02: "border-gray-200_02 border border-solid text-white-A700",
    blue_gray_100_04: "border-blue_gray-100_04 border border-solid text-white-A700",
    gray_500: "border-gray-500 border border-solid",
  },
} as const;
const sizes = {
  xs: "h-[24px] px-1.5",
  "7xl": "h-[54px] px-4",
  "8xl": "h-[56px] px-[35px] text-xl",
  "6xl": "h-[54px] pl-[35px] pr-2 text-base",
  "9xl": "h-[60px] px-[35px] text-base",
  "2xl": "h-[36px] px-2",
  "4xl": "h-[43px] px-[35px] text-sm",
  "5xl": "h-[49px] px-4 text-xs",
  lg: "h-[30px] px-2.5",
  "3xl": "h-[38px] px-8 text-sm",
  sm: "h-[27px] px-[15px] text-xs",
  xl: "h-[34px] px-6 text-sm",
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
  size = "sm",
  color = "teal_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-white-A700 ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
