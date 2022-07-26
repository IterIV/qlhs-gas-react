import { authTypes } from "../constains/authType";
const initState = {
  user: null,
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
      localStorage.setItem("user", JSON.stringify({ ...data }));
      return {
        user: { ...data },
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
        successMessage: "",
      };
    }
    case authTypes.LOG_OUT:
      localStorage.clear();
      return { ...initState };
    case authTypes.RESET_MESSAGE:
      return { ...state, errorMessage: "", successMessage: "" };
    default:
      return state;
  }
};

export default authReducer;
