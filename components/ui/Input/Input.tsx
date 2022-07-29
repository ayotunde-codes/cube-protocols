import React, {
  FC,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import s from "./Input.module.css";
import cn from "classnames";
import { Eye, EyeSlash, Search } from "components/icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  noBorder?: boolean;
}

const Input: FC<InputProps> = ({ error, noBorder, ...rest }) => {
  const { type } = { ...rest };
  const [removeBorder, setRemoveBorder] = useState(() => {
    if (noBorder) {
      return noBorder;
    }
    if (type === "search") {
      return true;
    }
    return false;
  });

  const inputClass = cn(s.input, {
    [s.inputError]: error,
    [s.border]: !removeBorder,
    [s.search]: type === "search",
  });

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
        {type === "search" && (
          <div className={s.searchIcon}>
            <Search currentColor="#7580AA" />
          </div>
        )}
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
