import { LoginFrame, LoginWrapper } from "components/Login";
import { Button, Input, Pop } from "components/ui";
import { useLogin } from "hooks";
import Head from "next/head";
import Link from "next/link";

const Login = () => {
  const { state, dispatch, isAuthenticating, handleSubmit, error } = useLogin();

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="login or signup" />
      </Head>
      <LoginWrapper>
        <LoginFrame>
          <div className="flex justify-center pb-2 font-medium">
            <h2 className=" text-2xl text-pup">Login</h2>
          </div>
          <div className="flex flex-col gap-6">
            <Input
              type="text"
              placeholder="Username"
              value={state.username}
              onChange={({ target: { value } }) =>
                dispatch({ type: "SET_USERNAME", payload: { username: value } })
              }
              onFocus={() =>
                dispatch({
                  type: "SET_USERNAME_ERROR",
                  payload: { usernameError: null },
                })
              }
              error={state.usernameError}
            />
            <Input
              type="password"
              placeholder="Password"
              value={state.password}
              onChange={({ target: { value } }) =>
                dispatch({
                  type: "SET_PASSWORD",
                  payload: { password: value },
                })
              }
              onFocus={() =>
                dispatch({
                  type: "SET_PASSWORD_ERROR",
                  payload: { passwordError: null },
                })
              }
              error={state.passwordError}
            />
          </div>
          <div className=" px-12 pt-14 relative">
            <Button
              text="Login"
              loading={isAuthenticating}
              onClick={(e) => handleSubmit(e)}
            />
            {error && <Pop text={error} />}
          </div>
          <div className=" mt-4">
            <p className="text-center text-gray-500">
              Don't have an account?{" "}
              <Link href="/sign-up">
                <a className=" text-pup">Signup</a>
              </Link>
            </p>
          </div>
        </LoginFrame>
      </LoginWrapper>
    </>
  );
};

export default Login;
