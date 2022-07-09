import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

export default function useConnectWallet() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { Moralis, user, authError, userError } = useMoralis();
  const checkIfLinked = () => {
    // 💡 NOTE: Check if user is linked to wallet
    return user?.attributes?.accounts?.includes(
      window.ethereum.selectedAddress
    );
  };

  const connectUserWallet = async () => {
    setLoading(true);
    const isLinked = checkIfLinked();
    if (isLinked) {
      //   Moralis.enableWeb3({ provider: "metamask" });
      //   💡 NOTE: If user is already linked to wallet, just reload the page(connect wallet again)
      Moralis.enableWeb3();
      setLoading(false);
    }
    if (!isLinked) {
      if (
        window.confirm(
          "Would you like to link this account to your user profile?"
        )
      ) {
        // 💡 NOTE: Link user to wallet
        try {
          const web3 = await Moralis.enableWeb3();
          const link = await Moralis.link(window.ethereum.selectedAddress);
          console.log(link, " ---lonked");
          setLoading(false);
        } catch (e) {
          console.log(e);
          setError(true);
          setErrorMessage(e.message);
          setLoading(false);
        }
        // setLoading(false);
      }
    }
    setLoading(false);
  };

  const onClose = () => {
    setError(false);
  };
  return {
    connectUserWallet,
    checkIfLinked,
    loading,
    error,
    onClose,
    errorMessage,
  };
  // 🍾 you have done well 🍾 🎊
}
