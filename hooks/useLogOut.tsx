import Router from "next/router";
import { useMoralis } from "react-moralis";

export default function useLogOut(): { logOut: () => void } {
  const { logout } = useMoralis();
  const logOut = async () => {
    await logout();
    Router.push("/");
  };
  return {
    logOut,
  };
}
