import Image from "next/image";
import React, { FC } from "react";
import cn from "classnames";
import s from "./AuthLayout.module.css";
import Link from "next/link";

interface Props {
  text: string;
}
const AuthLayout: FC<Props> = ({ text }) => {
  const primaryBtn = cn(s.btn, s.primary);
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
      <div className={s.content}>{text}</div>
      <div className={s.buttons}>
        <Link href="/sign-up">
          <a className={primaryBtn}>Sign up</a>
        </Link>
        <Link href="/login">
          <a className={s.btn}>Login</a>
        </Link>
      </div>
    </div>
  );
};

export default AuthLayout;
