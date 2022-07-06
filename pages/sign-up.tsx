import { LoginFrame, LoginWrapper } from "components/Login";
import { Button, Input, Pop } from "components/ui";
import { useSignUp } from "hooks";
import Head from "next/head";

const SignUp = () => {
  const { state, dispatch, handleSubmit, isAuthenticating, error } =
    useSignUp();

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="login or signup" />
      </Head>
      <LoginWrapper>
        <LoginFrame>
          <div className="flex justify-center pb-2 font-medium">
            <h2 className=" text-2xl text-pup">Signup</h2>
          </div>
          {/* <div className="flex flex-col gap-6"> */}
          <div className="flex flex-col sm:gap-6 md:gap-4 gap-6">
            <Input
              type="text"
              placeholder="Username"
              value={state.username}
              error={state.usernameError}
              onChange={({ target: { value } }) =>
                dispatch({ type: "SET_USERNAME", payload: { username: value } })
              }
              onFocus={() =>
                dispatch({
                  type: "SET_USERNAME_ERROR",
                  payload: { usernameError: null },
                })
              }
            />
            <Input
              type="password"
              placeholder="Password"
              value={state.password}
              error={state.passwordError}
              onChange={({ target: { value } }) =>
                dispatch({
                  type: "SET_PASSWORD",
                  payload: {
                    password: value,
                  },
                })
              }
              onFocus={() =>
                dispatch({
                  type: "SET_PASSWORD_ERROR",
                  payload: { passwordError: null },
                })
              }
            />
            <Input
              type="password"
              placeholder="Re-enter Password"
              value={state.confirmPassword}
              error={state.confirmPasswordError}
              onChange={({ target: { value } }) =>
                dispatch({
                  type: "SET_CONFIRM_PASSWORD",
                  payload: {
                    confirmPassword: value,
                  },
                })
              }
              onFocus={() =>
                dispatch({
                  type: "SET_CONFIRM_PASSWORD_ERROR",
                  payload: { confirmPasswordError: null },
                })
              }
            />
          </div>
          {/* <div className=" px-12 pt-14"> */}
          <div className=" px-12 sm:pt-14 md:pt-10 pt-14">
            <Button
              text="Next"
              onClick={(e) => handleSubmit(e)}
              loading={isAuthenticating}
            />
            {error && <Pop text={error} duration={3000} />}
          </div>
        </LoginFrame>
      </LoginWrapper>
    </>
  );
};

export default SignUp;
