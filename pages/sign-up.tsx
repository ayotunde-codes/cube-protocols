import { LoginFrame, LoginWrapper } from "components/Login";
import { Button, Input } from "components/ui";
import Router from "next/router";

const SignUp = () => {
  function signUp() {
    Router.push("/setup");
  }
  return (
    <LoginWrapper>
      <LoginFrame>
        <div className="flex justify-center pb-2 font-medium">
          <h2 className=" text-2xl text-pup">Signup</h2>
        </div>
        {/* <div className="flex flex-col gap-6"> */}
        <div className="flex flex-col sm:gap-6 md:gap-4 gap-6">
          <Input type="text" placeholder="Username or Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Re-enter Password" />
        </div>
        {/* <div className=" px-12 pt-14"> */}
        <div className=" px-12 sm:pt-14 md:pt-10 pt-14">
          <Button text="Next" onClick={signUp} />
        </div>
      </LoginFrame>
    </LoginWrapper>
  );
};

export default SignUp;
