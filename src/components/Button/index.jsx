import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded",
};
const variants = {
  outline: {
    orange_800: "border-orange-800 border border-solid text-orange-800",
    orange_800_01: "border-orange-800_01 border border-solid text-orange-800_01",
    orange_800_02: "border-orange-800_02 border border-solid text-orange-800",
  },
  fill: {
    orange_800: "bg-orange-800 text-white-A700_01",
    orange_800_01: "bg-orange-800_01 text-white-A700_01",
  },
};
const sizes = {
  sm: "h-[44px] px-2.5",
  xs: "h-[40px] px-[27px] text-[15px]",
  md: "h-[45px] px-[29px] text-sm",
  xl: "h-[57px] px-[35px] text-[15px]",
  lg: "h-[50px] px-8 text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "lg",
  color = "orange_800",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["sm", "xs", "md", "xl", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["orange_800", "orange_800_01", "orange_800_02"]),
};

export { Button };
