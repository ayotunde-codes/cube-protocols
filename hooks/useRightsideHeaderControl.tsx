import { useState } from "react";

interface IUseRightsideHeaderControl {
  activeHeader: string;
  setTrendingActive: () => void;
  setNotificationActive: () => void;
}

export function useRightsideHeaderControl(): IUseRightsideHeaderControl {
  const [activeHeader, setActiveHeader] = useState("trending");
  const setTrendingActive = () => {
    setActiveHeader("trending");
  };
  const setNotificationActive = () => {
    setActiveHeader("notification");
  };

  return {
    activeHeader,
    setTrendingActive,
    setNotificationActive,
  };
}
