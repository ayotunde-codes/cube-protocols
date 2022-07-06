import React, { useEffect } from "react";
import s from "./Pop.module.css";

interface Props {
  text?: string | null;
  duration?: number;
}
const Pop = ({ text, duration = 4000 }: Props) => {
  // 💡 NOTE: the component as a position of absolute so make container relative when using
  const [isOpen, setIsOpen] = React.useState(true);

  // 💡 Sleep: to remove the component after X(duration) amount of seconds
  const sleep = async () => {
    await new Promise((resolve) => setTimeout(resolve, duration));
    setIsOpen(false);
  };
  useEffect(() => {
    sleep();
  }, [isOpen]);
  return isOpen ? <div className={s.root}>{text}</div> : null;
};

export default Pop;
