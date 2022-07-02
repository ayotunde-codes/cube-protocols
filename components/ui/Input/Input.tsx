import React, { FC, InputHTMLAttributes, useCallback, useRef } from "react";
import s from "./Input.module.css";
import cn from "classnames";
import { Eye, EyeSlash } from "components/icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input: FC<InputProps> = ({ error, ...rest }) => {
  const inputClass = cn(s.input, { [s.inputError]: error });

  const { type } = { ...rest };

  const inputRef = useRef<HTMLInputElement>();
  const [toggleVisibility, setToggleVisibility] = React.useState(false);

  function togglePasswordVisibility() {
    if (inputRef.current.type === "password") {
      inputRef.current.type = "text";
      setToggleVisibility(true);
    } else {
      inputRef.current.type = "password";
      setToggleVisibility(false);
    }
  }

  return (
    <div className={s.root}>
      <div className={s.inputcase}>
        <input className={inputClass} {...rest} ref={inputRef} />
        {type === "password" && (
          <button className={s.btn} onClick={togglePasswordVisibility}>
            {toggleVisibility ? <EyeSlash /> : <Eye />}
          </button>
        )}
      </div>
      {error && <div className={s.error}>{error}</div>}
    </div>
  );
};

export default Input;
