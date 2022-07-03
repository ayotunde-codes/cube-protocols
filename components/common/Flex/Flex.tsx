import React, { FC, ReactNode } from "react";
import cn from "classnames";
import s from "./Flex.module.css";

interface Props {
  children?: ReactNode | ReactNode[];
  layout: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: number;
  padding?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  margin?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}
const Flex: FC<Props> = ({
  children,
  layout = "column",
  justifyContent,
  alignItems,
  wrap,
  gap,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) => {
  const flexClass = cn(
    s.root,
    // `gap-${gap}`,
    // `m-${margin}`,
    `p-${padding}`,
    // `pt-${paddingTop}`,
    // `pr-${paddingRight}`,
    // `pb-${paddingBottom}`,
    // `pl-${paddingLeft}`,
    // `mt-${marginTop}`,
    // `mr-${marginRight}`,
    // `mb-${marginBottom}`,
    // `ml-${marginLeft}`,
    {
      [s.row]: layout === "row",
      [s.column]: layout === "column",
      [s.rowReverse]: layout === "row-reverse",
      [s.columnReverse]: layout === "column-reverse",
      [s.justifyStart]: justifyContent === "flex-start",
      [s.justifyEnd]: justifyContent === "flex-end",
      [s.justifyCenter]: justifyContent === "center",
      [s.justifyBetween]: justifyContent === "space-between",
      [s.justifyAround]: justifyContent === "space-around",
      [s.alignStart]: alignItems === "flex-start",
      [s.alignEnd]: alignItems === "flex-end",
      [s.alignCenter]: alignItems === "center",
      [s.alignBaseline]: alignItems === "baseline",
      [s.alignStretch]: alignItems === "stretch",
      [s.wrap]: wrap === "wrap",
      [s.wrapReverse]: wrap === "wrap-reverse",
      [`gap-${gap}`]: gap,
      [`p-${padding}`]: padding,
      "m-6": margin,
    }
  );
  return <div className={flexClass}> {children} </div>;
};

export default Flex;
