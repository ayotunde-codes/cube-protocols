import Router from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";

export default function usePermission() {
  const { user, isAuthenticated } = useMoralis();
  useEffect(() => {
    if (!user && !isAuthenticated) {
      Router.push("/");
    }
  }, []);
  return;
}
