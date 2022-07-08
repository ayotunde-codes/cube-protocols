import React, { FC } from "react";
import s from "./Header.module.css";
import cn from "classnames";
import Container from "../Container";
import { Bell } from "components/icons";

interface Props {
  pageName?: string;
}
const Header: FC<Props> = ({ pageName }) => {
  return (
    <div className={s.root}>
      <Container>
        <div className={s.content}>
          <h4 className={s.pageTitle}>{pageName}</h4>
          <div className={s.connectNotify}>
            <button className={s.connect}>Connect wallet</button>
            <div className={s.notifcation}>
              <Bell />
              <div className={s.notice}>0</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
