import { LoginFrame, LoginWrapper } from "components/Login";
import { Button, Input } from "components/ui";
import { useSignUp } from "hooks/useSignUpData";
import Router from "next/router";

const SignUp = () => {
  const { state, dispatch, handleSubmit } = useSignUp();
  return (
    <LoginWrapper>
      <LoginFrame>
        <div className="flex justify-center pb-2 font-medium">
          <h2 className=" text-2xl text-pup">Signup</h2>
        </div>
        {/* <div className="flex flex-col gap-6"> */}
        <div className="flex flex-col sm:gap-6 md:gap-4 gap-6">
          <Input
            type="text"
            placeholder="Username or Email"
            value={state.email}
            error={state.emailError}
            onChange={({ target: { value } }) =>
              dispatch({ type: "SET_EMAIL", payload: { email: value } })
            }
            onFocus={() =>
              dispatch({
                type: "SET_EMAIL_ERROR",
                payload: { emailError: null },
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
            loading={state.loading}
          />
        </div>
      </LoginFrame>
    </LoginWrapper>
  );
};

export default SignUp;
