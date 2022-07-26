import { userTypes } from "../constains/userTypes";
const initState = {
  listUser: [],
  loading: false,
  errorMessage: "",
  successMessage: "",
};

const listUserReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case userTypes.START_FETCH:
      return { ...state, loading: true };
    case userTypes.FETCH_SUCCESS:
      const { message, data } = payload;
      return {
        listUser: [...data],
        loading: false,
        errorMessage: "",
        successMessage: message,
      };
    case userTypes.FETCH_FAIL: {
      const { message } = payload;
      return {
        ...state,
        loading: false,
        errorMessage: message,
        successMessage: "",
      };
    }
    case userTypes.RESET_MESSAGE:
      return { ...state, errorMessage: "", successMessage: "" };
    default:
      return state;
  }
};

export default listUserReducer;
