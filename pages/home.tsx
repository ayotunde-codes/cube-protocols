import { MainLayout } from "components/Layouts";
import { Sidebar } from "components/ui";
import { usePermission } from "hooks";
import Router from "next/router";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useMoralis } from "react-moralis";

const Feed = () => {
  return <div className="text-white">welcome home</div>;
};

Feed.Layout = MainLayout;
export default Feed;
