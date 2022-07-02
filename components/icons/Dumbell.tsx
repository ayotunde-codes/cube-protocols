import React, { FC, ReactNode } from "react";

// const pathFill="#571EAE"
// const pathFillOpacity="0.3"

const Dumbell = (props) => {
  const { pathFill = "#571EAE", pathFillOpacity = "0.3", ...rest } = props;
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M33.646 22.2357C31.2919 22.2379 29.0014 22.9996 27.1147 24.4076L20.521 17.8138C21.9456 15.9409 22.7143 13.6513 22.7085 11.2982C22.7146 8.83397 21.8885 6.43989 20.3639 4.50391C18.8393 2.56793 16.7056 1.20352 14.3086 0.631791C11.9117 0.0600613 9.39186 0.314518 7.15758 1.35392C4.9233 2.39333 3.10548 4.15678 1.99872 6.35847C0.891967 8.56017 0.56113 11.0711 1.05983 13.4843C1.55853 15.8976 2.85754 18.0717 4.74634 19.6543C6.63514 21.237 9.00304 22.1354 11.4663 22.2041C13.9296 22.2727 16.3438 21.5076 18.3179 20.0326L24.896 26.6263C23.4214 28.5998 22.6562 31.0133 22.7244 33.4759C22.7926 35.9385 23.6901 38.306 25.2717 40.1948C26.8532 42.0837 29.0261 43.3833 31.4384 43.8832C33.8507 44.383 36.3611 44.0539 38.563 42.949C40.7649 41.8441 42.5293 40.0282 43.5705 37.7955C44.6116 35.5627 44.8684 33.0439 44.2994 30.647C43.7304 28.25 42.3689 26.1154 40.4354 24.5888C38.5018 23.0622 36.1095 22.233 33.646 22.2357ZM3.95848 11.2982C3.95848 9.75302 4.41667 8.24255 5.27512 6.95779C6.13357 5.67303 7.35371 4.67169 8.78126 4.08038C10.2088 3.48907 11.7796 3.33435 13.2951 3.6358C14.8106 3.93725 16.2026 4.68132 17.2952 5.77391C18.3878 6.86651 19.1319 8.25857 19.4334 9.77404C19.7348 11.2895 19.5801 12.8604 18.9888 14.2879C18.3975 15.7154 17.3961 16.9356 16.1114 17.794C14.8266 18.6525 13.3161 19.1107 11.771 19.1107C9.69897 19.1107 7.71183 18.2876 6.2467 16.8225C4.78158 15.3573 3.95848 13.3702 3.95848 11.2982Z"
        fill={pathFill}
        fillOpacity={pathFillOpacity}
      />
    </svg>
  );
};

export default Dumbell;