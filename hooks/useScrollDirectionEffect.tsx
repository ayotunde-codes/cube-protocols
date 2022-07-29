import { useEffect, useState } from "react";

type props = {
  callback: any;
  updater: (y: number) => void;
};

const useScrollDirectionEffect = ({ updater, callback }: props) => {
  useEffect(() => {
    updater(window.scrollY);

    window.addEventListener("scroll", callback);
    return () => {
      window.removeEventListener("scroll", callback);
    };
  }, [callback]);
};

export default useScrollDirectionEffect;
