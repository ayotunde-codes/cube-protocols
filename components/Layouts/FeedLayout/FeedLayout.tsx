import React, { FC } from "react";
import s from "./FeedLayout.module.css";
import cn from "classnames";
import { Header } from "components/ui";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  pageTitle: string;
}
const FeedLayout: FC<Props> = ({ pageTitle, children }) => {
  return (
    <div className={s.root}>
      <Header pageName={pageTitle} />
      <div className={s.container}>{children}</div>
    </div>
  );
};

export default FeedLayout;
