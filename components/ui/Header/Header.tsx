import React, { FC } from "react";
import s from "./Header.module.css";
import cn from "classnames";
import Container from "../Container";
import { Bell } from "components/icons";
import { useMoralis } from "react-moralis";
import { useConnectWallet } from "hooks";
import Button from "../Button";

interface Props {
  pageName?: string;
}
const Header: FC<Props> = ({ pageName }) => {
  const { connectUserWallet, checkIfLinked, loading } = useConnectWallet();
  const { ...rest } = useMoralis();
  const { account, user } = rest;
  console.log({ ...rest }, "user");

  const connectText = !user?.attributes?.accounts
    ? "Connect wallet"
      ? user?.attributes?.accounts?.includes(window.ethereum.selectedAddress)
        ? "Connected"
        : "Connect wallet"
      : "Connect wallet"
    : "Connect wallet";
  return (
    <div className={s.root}>
      <Container>
        <div className={s.content}>
          <h4 className={s.pageTitle}>{pageName}</h4>
          <div className={s.connectNotify}>
            <Button
              text={connectText}
              size="small"
              look="tertiary"
              loading={loading}
              //   className={s.connect}
              onClick={() => connectUserWallet()}
            />

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
