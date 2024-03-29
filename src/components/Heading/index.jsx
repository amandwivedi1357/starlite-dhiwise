import React from "react";

const sizes = {
  xl: "text-[200px] font-bold md:text-5xl",
  s: "text-[28px] font-semibold md:text-[26px] sm:text-2xl",
  md: "text-[100px] font-bold md:text-5xl",
  xs: "text-base font-bold",
  lg: "text-[195px] font-bold md:text-5xl",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700_01 font-cormorant ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
