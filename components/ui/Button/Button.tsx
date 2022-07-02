import React, { HTMLAttributes } from "react";
import s from "./Button.module.css";
import cn from "classnames";

interface buttonProps extends HTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  text?: string;
  loadingText?: string;
  look?: "primary" | "secondary" | "tertiary";
}
const Button = ({ loading, text, look = "primary", ...rest }: buttonProps) => {
  const btnClass = cn(s.btn, {
    [s.primary]: look === "primary",
    [s.secondary]: look === "secondary",
    [s.tertiary]: look === "tertiary",
  });
  return (
    <button className={btnClass}>
      {text}
      {loading && <span className={s.loader} />}
    </button>
  );
};

export default Button;
