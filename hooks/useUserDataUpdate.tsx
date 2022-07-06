import { StaticImageData } from "next/image";
import React, { useCallback, useState } from "react";
import { useMoralis } from "react-moralis";
import defaultPfpImage from "public/images/defaultpfp.svg";
// import Moralis from "moralis/types";
import Router from "next/router";

export default function useUserDataUpdate() {
  const { user, Moralis } = useMoralis();
  const [username, setUsername] = useState<string>(() =>
    user?.attributes?.username ? user?.attributes?.username : ""
  );
  const [loading, setLoading] = useState(false);
  const [selectedpfp, setSelectedpfp] = useState(null);

  const defaultpfp = useCallback((): string | StaticImageData => {
    return selectedpfp ? selectedpfp : defaultPfpImage;
  }, [selectedpfp]);

  function updateUsername(username: string) {
    setUsername(username);
  }
  function updateSelectedPfp(pfp: StaticImageData | string) {
    setSelectedpfp(pfp);
  }

  const saveEdits = async () => {
    setLoading(true);
    const User = Moralis.Object.extend("_User");
    const query = new Moralis.Query(User);
    const myDetails = await query.first();

    if (setSelectedpfp) {
      myDetails.set("pfp", selectedpfp);
    }

    if (username) {
      myDetails.set("username", username);
    }

    await myDetails.save();
    Router.push("/feed");
    setLoading(false);

    window.location.reload();
  };

  return {
    updateSelectedPfp,
    defaultpfp,
    username,
    updateUsername,
    saveEdits,
    loading,
  };
}
