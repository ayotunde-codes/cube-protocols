import { Dialog } from "@headlessui/react";
import { FC } from "react";
import s from "./Modal.module.css";
import cn from "classnames";
import Button from "../Button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  type?: "success" | "error" | "warning" | "info";
}

// const Modal: FC<Props> = () => {
const Modal: FC<Props> = ({
  isOpen,
  onClose = () => {},
  message,
  type = "info",
}) => {
  const titleClass = cn(s.title, {
    [s.success]: type === "success",
    [s.error]: type === "error",
    [s.warning]: type === "warning",
    [s.info]: type === "info",
  });
  const descriptionClass = cn(s.description, {
    [s.success]: type === "success",
    [s.error]: type === "error",
    [s.warning]: type === "warning",
    [s.info]: type === "info",
  });

  return (
    <Dialog open={isOpen} onClose={onClose} className={s.root}>
      <Dialog.Panel className={s.panel}>
        <Dialog.Title className={titleClass}>Deactivate account</Dialog.Title>
        <Dialog.Description className={descriptionClass}>
          {message}
        </Dialog.Description>

        <div className="w-2/4 mt-4">
          <Button text="Cancel" onClick={onClose} look={type} />
        </div>
        {/* <button onClick={() => setIsOpen(false)}>Cancel</button> */}
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;
