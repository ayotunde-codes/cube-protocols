import React, { FC, useCallback } from "react";
import s from "./Header.module.css";
import cn from "classnames";
import Container from "../Container";
import { Bell } from "components/icons";
import { useMoralis } from "react-moralis";
import { useConnectWallet } from "hooks";
import Button from "../Button";
import Modal from "../Modal";

interface Props {
  pageName?: string;
}
const Header: FC<Props> = ({ pageName }) => {
  const {
    connectUserWallet,
    isLoading: loading,
    error,
    onClose,
    errorMessage,
  } = useConnectWallet();

  const { ...rest } = useMoralis();
  const { account, user } = rest;
  // console.log({ ...rest }, "user");
  // console.log(
  //   user?.attributes?.accounts?.includes(window.ethereum.selectedAddress) &&
  //     account === window.ethereum.selectedAddress
  // );
  //   🍼check if user Adress is connected
  const connectText = useCallback(() => {
    if (!user?.attributes?.accounts) {
      return "Connect wallet";
    }
    if (
      user?.attributes?.accounts?.includes(window.ethereum.selectedAddress) &&
      account === window.ethereum.selectedAddress
    ) {
      return "Connected";
    }
    return "Connect wallet";
  }, [account, user]);
  return (
    <div className={s.root}>
      <Container>
        <div className={s.content}>
          <h4 className={s.pageTitle}>{pageName}</h4>
          <div className={s.connectNotify}>
            <Button
              text={connectText()}
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
      <Modal
        isOpen={error}
        onClose={onClose}
        message={errorMessage}
        type="error"
      />
    </div>
  );
};

// 🍾 you have done well 🍾 🎊

export default Header;
