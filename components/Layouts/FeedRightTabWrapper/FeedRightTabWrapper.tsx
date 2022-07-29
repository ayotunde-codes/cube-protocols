import { RightSidebar } from "components/ui";
import React from "react";
import s from "./FeedRightTabWrapper.module.css";
const FeedRightTabWrapper = ({ children }) => {
  return (
    <div className={s.root}>
      {children} <RightSidebar />
    </div>
  );
};

export default FeedRightTabWrapper;
