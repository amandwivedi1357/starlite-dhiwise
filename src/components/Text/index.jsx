import React from "react";

const sizes = {
  "5xl": "text-[26px] font-medium md:text-2xl sm:text-[22px]",
  "6xl": "text-3xl font-medium md:text-[28px] sm:text-[26px]",
  "7xl": "text-[40px] font-medium md:text-[38px] sm:text-4xl",
  "8xl": "text-[42px] font-medium md:text-[38px] sm:text-[32px]",
  "2xl": "text-xl font-medium",
  "3xl": "text-2xl font-normal md:text-[22px]",
  "4xl": "text-[25px] font-medium md:text-[23px] sm:text-[21px]",
  xs: "text-xs font-normal",
  lg: "text-[17px] font-normal",
  s: "text-sm font-medium",
  xl: "text-lg font-medium",
  "9xl": "text-[45px] font-medium md:text-[41px] sm:text-[35px]",
  "10xl": "text-[50px] font-medium md:text-[46px] sm:text-[40px]",
  md: "text-base font-normal",
  "11xl": "text-[55px] font-medium md:text-[47px] sm:text-[41px]",
  "12xl": "text-6xl font-medium md:text-[52px] sm:text-[46px]",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700_01 font-montserrat ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
