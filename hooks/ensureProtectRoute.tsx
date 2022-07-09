import Router, { useRouter } from "next/router";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { useMoralis } from "react-moralis";

const EnsureProtectRoute = ({ children }) => {
  const { isAuthenticated, isInitialized } = useMoralis();
  const publicAppPages: string[] = [
    // 🔵 NOTE: public route without need for authentication
    "/",
    "/login",
    "/sign-up",
    "/forgot-password",
    "/reset-password",
  ];
  const path = useRef(null);
  const router = useRouter();
  const currentRoute = router.pathname;

  const validateRoute = useCallback(() => {
    if (isAuthenticated) {
      if (publicAppPages.includes(currentRoute)) {
        return;
      }
    } else {
      if (!publicAppPages.includes(currentRoute)) {
        Router.push("/");
      }
    }
  }, [isAuthenticated, currentRoute, publicAppPages]);

  useEffect(() => {
    path.current = router.pathname;
    if (isInitialized) {
      validateRoute();
    }
  }, [isInitialized]);

  return children;
};

export default EnsureProtectRoute;
