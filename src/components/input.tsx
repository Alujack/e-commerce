"use client"
import React from "react";

const shapes = {
  round: "rounded-[5px]",
} as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-500",
    gray_100_01: "bg-gray-100_01",
    white_A700_01: "bg-white-A700",
  },
} as const;
const sizes = {
  xs: "h-[38px] px-[35px]",
  "5xl": "h-[81px] px-[33px] text-xl",
  xl: "h-[51px] pl-3 pr-[33px] text-sm",
  "4xl": "h-[68px] px-[35px] text-base",
  "3xl": "h-[65px] px-[35px] text-base",
  "2xl": "h-[54px] px-[35px] text-base",
  sm: "h-[40px] pl-2 pr-[35px] text-sm",
  md: "h-[43px] pl-3 pr-[35px] text-sm",
  lg: "h-[43px]",
} as const;

type InputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    value:string;
    placeholder: string;
    type: string;
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      value="",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "lg",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

export { Input };
