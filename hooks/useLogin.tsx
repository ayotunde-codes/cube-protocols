import Router from "next/router";
import { useEffect, useReducer } from "react";
import { useMoralis } from "react-moralis";
import useErrorModalValue from "./useErrorModalValue";

interface stateValue {
  username: string;
  password: string;
  usernameError: string | null;
  passwordError: string | null;
  loading: boolean;
}

const initialSignUpData = {
  username: "",
  password: "",
  usernameError: null,
  passwordError: null,
  loading: false,
};

type PayloadValue = {
  username?: string;
  password?: string;
  usernameError?: string | null;
  passwordError?: string | null;
  loading?: boolean;
};

type Action = {
  type:
    | "SET_USERNAME"
    | "SET_PASSWORD"
    | "SET_USERNAME_ERROR"
    | "SET_PASSWORD_ERROR"
    | "SET_LOADING";

  payload?: PayloadValue;
};

function reducer(state: stateValue, action: Action) {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        ...action.payload,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        ...action.payload,
      };

    case "SET_USERNAME_ERROR":
      return {
        ...state,
        ...action.payload,
      };
    case "SET_PASSWORD_ERROR":
      return {
        ...state,
        ...action.payload,
      };

    case "SET_LOADING":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

function useLoginData() {
  const [state, dispatch] = useReducer(reducer, initialSignUpData);
  return {
    state,
    dispatch,
  };
}

export default function useLogin() {
  // 🎃 Hook is to handle SignUp makes use of UseMoralis and useLoginData
  const { login, authError, isAuthenticating, isAuthenticated, user } =
    useMoralis();

  const { state, dispatch } = useLoginData();
  const { username, password } = state;
  function validateForm() {
    // 👩‍🚒 Function validates form value passed into it.....
    // 🟠 Also set error state of the for through dispatch
    if (username === "") {
      dispatch({
        type: "SET_USERNAME_ERROR",
        payload: { usernameError: "Username is required" },
      });
    }
    if (password === "") {
      dispatch({
        type: "SET_PASSWORD_ERROR",
        payload: { passwordError: "Password is required" },
      });
    }
    if (username === "" && password === "") {
      return false;
    }
    return true;
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (validateForm()) {
      login(username, password);
    }
    return;
  }

  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/feed");
    }
    // 🍃 Redirect Once signUp successfull
  }, [isAuthenticated]);
  //   💡 check for error from the signUp request and return string or null
  const error = useErrorModalValue(authError);
  return {
    state,
    dispatch,
    handleSubmit,
    isAuthenticating,
    isAuthenticated,
    error,
  };
}
