import { LoginFrame, LoginWrapper } from "components/Login";
import { Button, Input } from "components/ui";
import { useMoralis } from "react-moralis";

const Login = () => {
  const moralis = useMoralis();
  console.log(moralis);

  return (
    <LoginWrapper>
      <LoginFrame>
        <div className="flex justify-center pb-2 font-medium">
          <h2 className=" text-2xl text-pup">Login</h2>
        </div>
        <div className="flex flex-col gap-6">
          <Input type="text" placeholder="Username or Email" />
          <Input type="password" placeholder="Password" />
        </div>
        <div className=" px-12 pt-14">
          <Button text="Login" loading />
        </div>
      </LoginFrame>
    </LoginWrapper>
  );
};

export default Login;
