import Router from "next/router";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useMoralis } from "react-moralis";

const EnsureProtectRoute = ({ children }) => {
  const { user, isAuthenticated } = useMoralis();
  const publicAppPages: string[] = [
    // 🔵 NOTE: public route without need for authentication
    "login",
    "sign-up",
    "forgot-password",
    "reset-password",
  ];
  const path = useRef(null);
  useEffect(() => {
    path.current = Router.pathname;
    console.log(path.current);
    const isPublicAppPage = publicAppPages.some((page) =>
      path.current.includes(page)
    );
    console.log({ isPublicAppPage });
    // if (!user && !isAuthenticated && !isPublicAppPage) {
    //   // 💡 NOTE: Redirect to login
    //   Router.push("/login");
    // }
    path.current = "active";
  });

  return path.current === "active" ? children : null;
};

export default EnsureProtectRoute;
