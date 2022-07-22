import Router, { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMoralis } from "react-moralis";

const EnsureProtectRoute = ({ children }) => {
  const { isAuthenticated, isInitialized } = useMoralis();
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
        return;
      }
    } else {
      if (!publicAppPages.includes(currentRoute)) {
        Router.push("/");
      }
      setLoading(false);
    }
  }, [isAuthenticated, currentRoute, publicAppPages]);

  useEffect(() => {
    path.current = router.pathname;
    console.log("ensure routes", isInitialized);
    if (isInitialized) {
      validateRoute();
    }
    // setLoading(false);

    return () => validateRoute();
  }, [isInitialized]);

  return loading ? <div>loading.....</div> : children;
};

// 🍾 you have done well 🍾 🎊
export default EnsureProtectRoute;
