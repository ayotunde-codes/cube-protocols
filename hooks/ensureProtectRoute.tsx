import Router, { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useMoralis } from "react-moralis";

const EnsureProtectRoute = ({ children }) => {
  const { user, isAuthenticated } = useMoralis();
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
  useEffect(() => {
    path.current = currentRoute;
    // console.log(path.current, "currrent");
    const isPublicAppPage = publicAppPages.some((page) =>
      [path.current].includes(page)
    );
    // console.log({ isPublicAppPage });
    if (!user && !isAuthenticated && !isPublicAppPage) {
      // 💡 NOTE: Redirect to login
      Router.push("/");
    }
    path.current = "active";
  }, []);

  return path.current ? children : null;
};

export default EnsureProtectRoute;
