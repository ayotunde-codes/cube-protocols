import { useReducer } from "react";
import { useMoralis } from "react-moralis";

interface stateValue {
  email: string;
  password: string;
  confirmPassword: string;
  emailError: string | null;
  passwordError: string | null;
  confirmPasswordError: string | null;
  loading: boolean;
}

const initialSignUpData = {
  email: "",
  password: "",
  confirmPassword: "",
  emailError: null,
  passwordError: null,
  confirmPasswordError: null,
  loading: false,
};

type PayloadValue = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  emailError?: string | null;
  passwordError?: string | null;
  confirmPasswordError?: string | null;
  loading?: boolean;
};

type Action = {
  type:
    | "SET_EMAIL"
    | "SET_PASSWORD"
    | "SET_CONFIRM_PASSWORD"
    | "SET_EMAIL_ERROR"
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

export function useSignUp() {
  const { signup } = useMoralis();
  const { state, dispatch } = useSignUpData();
  const { email, password, confirmPassword } = state;

  const username = "samuel";

  function loadingTrue() {
    dispatch({
      type: "SET_LOADING",
      payload: { loading: true },
    });
  }
  function loadingFalse() {
    dispatch({
      type: "SET_LOADING",
      payload: { loading: false },
    });
  }

  const validateForm = () => {
    const { email, password, confirmPassword } = state;
    if (email.length === 0) {
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
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password === confirmPassword
    ) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await validateForm();
    if (!validateForm()) {
      return;
    }
    try {
      loadingTrue();
      //   const data = await signup(username, password, email);
      const data = await signup("VEk1zO9DPMCfQe", password, email);
      console.log(data);
      console.group("group", data);
    } catch (error) {
      console.log(error);
    }
    // signup(username, password, email).then(
    //   (data) => {
    //     console.log(data, "data");
    //   },
    //   (error) => {
    //     console.log(error, "error");
    //   }
    // );
    // const { data, error } = await signup(email, password, confirmPassword);

    loadingFalse();
  };

  return {
    state,
    dispatch,
    handleSubmit,
  };
}
