import React, { FC, PropsWithChildren } from "react";
import s from "./Sidebar.module.css";
import cn from "classnames";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className={s.root}>
      <div className={s.logo}>
        <Image
          src="/images/white.png"
          alt="logo"
          width={200}
          height={74}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default SideBar;
