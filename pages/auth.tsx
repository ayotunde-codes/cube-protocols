import { AuthLayout, LoginWrapper } from "components/Login";
import React from "react";

const Auth = () => {
  return (
    <LoginWrapper>
      <AuthLayout
        text={`Join millions of Blockchain enthusiast all over the globe to share what's happening in the world of Blockchain, Connect and learn more about the crypto space and thus earn.`}
      />
    </LoginWrapper>
  );
};

export default Auth;
