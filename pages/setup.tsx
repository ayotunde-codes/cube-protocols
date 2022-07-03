import { LoginFrame, LoginWrapper } from "components/Login";
import { Button, Input } from "components/ui";
import React from "react";

const Setup = () => {
  return (
    <LoginWrapper>
      <LoginFrame>
        <div className="flex items-center pb-2 font-medium flex-col">
          <h2 className=" text-xl text-pup">Signup</h2>
          <p className=" text-white text-lg font-medium">
            Choose a username and profile picture
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <Input type="text" placeholder="Username" />
        </div>
        {/* TODO Avatar section */}
        <div className=" px-12 pt-14">
          <Button text="Finish" />
        </div>
      </LoginFrame>
    </LoginWrapper>
  );
};

export default Setup;
