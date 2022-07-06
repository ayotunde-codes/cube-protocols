import { useEffect, useState } from "react";

export default function useErrorModalValue(errorControler): string | null {
  // 💁 NOTE : This hook is only applicable for the useMoralis case of error that why use ErrorControler.message as value...
  // Note to use outside this use case customise the errorController you pass to have errorControler.message .
  const [error, setError] = useState(null);
  useEffect(() => {
    setError(errorControler ? errorControler.message : null);
  }, [errorControler]);
  return error;
}
