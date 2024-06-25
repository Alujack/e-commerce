"use client"
import React, { forwardRef, ChangeEvent } from "react";

type Variant = "primary";

type Size = "xs" | "sm" | "md" | "lg";

interface CheckBoxProps {
  className?: string;
  name?: string;
  label?: string;
  id?: string;
  onChange?: (checked: boolean) => void;
  variant?: Variant;
  size?: Size;
  children?:React.ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "border-blue_gray-300 border border-solid checked:border-black-900_3f checked:border checked:border-solid checked:bg-white-A700 checked:focus:bg-white-A700 checked:focus:border-black-900_3f",
};

const sizes: Record<Size, string> = {
  xs: "",
  sm: "h-[14px] w-[14px] rounded-[3px]",
  md: "h-[19px] w-[19px] rounded-[5px]",
  lg: "h-[20px] w-[20px] rounded-[5px]",
};

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  (
    {
      className = "",
      name = "",
      children,
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "sm",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e.target.checked);
    };

    return (
      <>
        <div className={className + " flex items-center gap-[5px] cursor-pointer"}>
          <input
            className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        {children}
      </>
    );
  },
);

export { CheckBox };
