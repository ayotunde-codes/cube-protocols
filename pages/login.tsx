import { LoginFrame, LoginWrapper } from "components/Login";
import { Input } from "components/ui";
import React from "react";

const Login = () => {
  return (
    <LoginWrapper>
      <LoginFrame>
        <Input
          type="password"
          placeholder="*******"
          error="password must be more than 8 characters"
        />
      </LoginFrame>
    </LoginWrapper>
  );
};

export default Login;
