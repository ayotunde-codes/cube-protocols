import Image from "next/image";
import React, { FC, PropsWithChildren } from "react";
import s from "./LoginFrame.module.css";

const LoginFrame: FC<PropsWithChildren> = ({ children }) => {
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
      <div className={s.container}>{children}</div>
    </div>
  );
};

export default LoginFrame;
