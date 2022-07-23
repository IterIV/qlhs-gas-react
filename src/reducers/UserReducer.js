const initState = {
  lstUser: [],
  loading: false,
  error: false,
  messageError: "",
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "RESET_STATE":
      return { ...initState };
    case "FETCH_START":
      return { ...state, loading: true, error: false, messageError: "" };
    case "FETCH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        lstUser: action.data,
        loading: false,
        error: false,
        messageError: "",
      };
    case "FETCH_FAIL":
      return {
        ...state,
        loading: false,
        error: true,
        messageError: action.data,
      };
    default:
      return state;
  }
};

export default userReducer;
