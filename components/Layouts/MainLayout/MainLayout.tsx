import React from "react";
import s from "./MainLayout.module.css";
import cn from "classnames";
import { Sidebar } from "components/ui";

const MainLayout = ({ children }) => {
  return (
    <div className={s.root}>
      <Sidebar />
      <div className={s.container}>{children}</div>
    </div>
  );
};

export default MainLayout;
