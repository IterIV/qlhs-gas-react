import { authTypes } from "../constains/authType";
const initState = {
  user: null,
  token: "",
  loading: false,
  errorMessage: "",
  successMessage: "",
};
const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case authTypes.START_LOGIN:
      return { ...initState, loading: true };

    case authTypes.LOGIN_SUCCESS:
      const { message, data } = payload;
      const { token, ...user } = data;
      return {
        user: { ...user },
        token,
        loading: false,
        errorMessage: "",
        successMessage: message,
      };

    case authTypes.LOGIN_FAIL: {
      const { message } = payload;
      return {
        ...initState,
        loading: false,
        errorMessage: message,
      };
    }

    case authTypes.LOG_OUT:
      return { ...initState };

    default:
      return state;
  }
};

export default authReducer;
