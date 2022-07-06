import { Sidebar } from "components/ui";
import { usePermission } from "hooks";
import React from "react";
import { useMoralis } from "react-moralis";

const Feed = () => {
  // 🌈 call the usePermission hook on protected routes
  // usePermission();
  return (
    <div className=" w-screen flex">
      <Sidebar>
        <div>Left Sidebar</div>
      </Sidebar>
      welcome home
    </div>
  );
};

export default Feed;
