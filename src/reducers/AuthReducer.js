const initState = {
  authData: null,
  loading: false,
  error: false,
  messageError: ""
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "RESET_STATE":
      return { ...initState };
    case "AUTH_START":
      return { ...state, loading: true, error: false, messageError: "" };
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action.data,
        loading: false,
        error: false,
        messageError: ""
      };
    case "AUTH_FAIL":
      return {
        ...state,
        loading: false,
        error: true,
        messageError: action.data
      };

    case "LOG_OUT":
      localStorage.clear();
      return {
        ...state,
        authData: null,
        loading: false,
        error: false,
        messageError: ""
      };
    default:
      return state;
  }
};

export default authReducer;
