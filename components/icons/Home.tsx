import React from "react";

const Home = ({ ...props }) => {
  const { color = "#7681AB", ...rest } = props;
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      className=" text-red-500"
    >
      <path
        d="M5.83325 14.8863C5.83325 13.3022 5.83325 12.5102 6.15346 11.814C6.47366 11.1178 7.07501 10.6024 8.27771 9.57147L9.44438 8.57147C11.6182 6.70815 12.7052 5.77649 13.9999 5.77649C15.2947 5.77649 16.3816 6.70815 18.5555 8.57146L19.7221 9.57147C20.9248 10.6024 21.5262 11.1178 21.8464 11.814C22.1666 12.5102 22.1666 13.3022 22.1666 14.8863V19.8334C22.1666 22.0333 22.1666 23.1332 21.4832 23.8166C20.7997 24.5 19.6998 24.5001 17.4999 24.5001H10.4999C8.30003 24.5001 7.20009 24.5 6.51667 23.8166C5.83325 23.1332 5.83325 22.0333 5.83325 19.8334V14.8863Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M16.9166 24.5V18.5C16.9166 17.9477 16.4689 17.5 15.9166 17.5H12.0833C11.531 17.5 11.0833 17.9477 11.0833 18.5V24.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Home;
