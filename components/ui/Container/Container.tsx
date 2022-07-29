import React, { ComponentType, FC, HTMLAttributes, ReactNode } from "react";
import s from "./Container.module.css";
import cn from "classnames";

interface Props {
  children: ReactNode | ReactNode[];
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
  noMargin?: boolean;
}

const Container: FC<Props> = ({
  children,
  noMargin,
  el: Component = "div",
}) => {
  const className = cn(s.root, { [s.noMargin]: noMargin });
  return <Component className={className}>{children}</Component>;
};

export default Container;
