import React from "react";

const LogOut = ({ ...props }) => {
  const { color = "#7681AB", ...rest } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M7 7L8.41 8.41L5.83 11H16V13H5.83L8.41 15.58L7 17L2 12L7 7ZM20 5H12V3H20C21.1 3 22 3.9 22 5V19C22 20.1 21.1 21 20 21H12V19H20V5Z"
        fill={color}
      />
    </svg>
  );
};

export default LogOut;
