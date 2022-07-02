import { Marquee } from "components/ui";
import Image from "next/image";
import React, { FC, ReactNode } from "react";
import { EffectArray } from "./Effect";
import s from "./LoginWrapper.module.css";

interface Props {
  children: ReactNode | ReactNode[];
  effect?: Boolean;
}

const LoginWrapper: FC<Props> = ({ children, effect = false }) => {
  return (
    <div className={s.root}>
      <div className={s.container}>{children}</div>
      {/* <img className={s.bg} src="/images/svg/wire.svg" /> */}
      {effect && (
        <div className={s.marquee}>
          {/* TODO */}
          {EffectArray.map((item, index) => (
            <div key={item.name}>{item.svg}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LoginWrapper;
