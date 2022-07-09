import Router from "next/router";
import { useEffect, useReducer } from "react";
import { useMoralis } from "react-moralis";
import useErrorModalValue from "./useErrorModalValue";

interface stateValue {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  emailError: string | null;
  usernameError: string | null;
  passwordError: string | null;
  confirmPasswordError: string | null;
  loading: boolean;
}

const initialSignUpData = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  emailError: null,
  usernameError: null,
  passwordError: null,
  confirmPasswordError: null,
  loading: false,
};

type PayloadValue = {
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  emailError?: string | null;
  usernameError?: string | null;
  passwordError?: string | null;
  confirmPasswordError?: string | null;
  loading?: boolean;
};

type Action = {
  type:
    | "SET_EMAIL"
    | "SET_USERNAME"
    | "SET_PASSWORD"
    | "SET_CONFIRM_PASSWORD"
    | "SET_EMAIL_ERROR"
    | "SET_USERNAME_ERROR"
    | "SET_PASSWORD_ERROR"
    | "SET_CONFIRM_PASSWORD_ERROR"
    | "SET_LOADING";

  payload?: PayloadValue;
};

function reducer(state: stateValue, action: Action) {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        ...action.payload,
      };
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
    case "SET_CONFIRM_PASSWORD":
      return {
        ...state,
        ...action.payload,
      };
    case "SET_EMAIL_ERROR":
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
    case "SET_CONFIRM_PASSWORD_ERROR":
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

function useSignUpData() {
  const [state, dispatch] = useReducer(reducer, initialSignUpData);
  return {
    state,
    dispatch,
  };
}

export default function useSignUp() {
  // 🎃 Hook is to handle SignUp makes use of UseMoralis and useSignData
  const { signup, authError, isAuthenticated, isAuthenticating, user } =
    useMoralis();
  const { state, dispatch } = useSignUpData();
  const { email, password, confirmPassword, username } = state;

  const validateForm = () => {
    // 👩‍🚒 Function validates form value passed into it.....
    // 🟠 Also set error state of the form through dispatch
    const { email, password, confirmPassword, username } = state;
    if (username.length === 0) {
      dispatch({
        type: "SET_EMAIL_ERROR",
        payload: {
          emailError: "Email is required",
        },
      });
    }
    if (password.length === 0) {
      dispatch({
        type: "SET_PASSWORD_ERROR",
        payload: {
          passwordError: "Password is required",
        },
      });
    }
    if (password.length < 6) {
      dispatch({
        type: "SET_PASSWORD_ERROR",
        payload: {
          passwordError: "Password must be at least 6 characters",
        },
      });
    }
    if (confirmPassword.length === 0) {
      dispatch({
        type: "SET_CONFIRM_PASSWORD_ERROR",
        payload: {
          confirmPasswordError: "Confirm Password is required",
        },
      });
    }
    if (password !== confirmPassword) {
      dispatch({
        type: "SET_CONFIRM_PASSWORD_ERROR",
        payload: {
          confirmPasswordError: "Passwords do not match",
        },
      });
    }
    if (
      username.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password === confirmPassword
    ) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validateForm()) {
      await signup(username, password);
    }
    return;

    // loadingFalse();
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      Router.push("/setup");
    }
    // 🍃 Redirect Once signUp successfull
  }, [isAuthenticated, user]);
  const error = useErrorModalValue(authError);

  return {
    state,
    dispatch,
    handleSubmit,
    error,
    isAuthenticated,
    isAuthenticating,
    user,
  };
  // 🍾 you have done well 🍾 🎊
}
