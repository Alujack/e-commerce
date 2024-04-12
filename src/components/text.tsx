import React from "react";

const sizes = {
  "5xl": "text-2xl font-medium md:text-[22px]",
  xs: "text-[10px] font-normal",
  lg: "text-sm font-normal",
  "6xl": "text-3xl font-light md:text-[28px] sm:text-[26px]",
  "7xl": "text-[110px] font-medium md:text-5xl",
  s: "text-xs font-normal",
  "2xl": "text-base font-normal",
  "3xl": "text-lg font-normal",
  "4xl": "text-xl font-medium",
  xl: "text-[15px] font-normal",
  md: "text-[13px] font-normal",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "lg",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700_01 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
