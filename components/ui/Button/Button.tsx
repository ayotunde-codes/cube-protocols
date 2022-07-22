import React, { HTMLAttributes } from "react";
import s from "./Button.module.css";
import cn from "classnames";

interface buttonProps extends HTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  text: string;
  loadingText?: string;
  look?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "error"
    | "warning"
    | "info";
  size?: "small" | "medium" | "large";
}
const Button = ({
  loading,
  text,
  look = "primary",
  size = "medium",
  ...rest
}: buttonProps) => {
  // 💡Handles different color styles and size of button can be futher improved to add other visual styles
  const btnClass = cn(s.btn, {
    [s.primary]: look === "primary",
    [s.secondary]: look === "secondary",
    [s.tertiary]: look === "tertiary",
    [s.success]: look === "success",
    [s.error]: look === "error",
    [s.small]: size === "small",
    [s.medium]: size === "medium",
    [s.large]: size === "large",
  });

  return (
    <button className={btnClass} {...rest}>
      {loading ? <span className={s.loader} /> : text}
    </button>
  );
};
// 🍾 you have done well 🍾 🎊
export default Button;
