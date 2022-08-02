import { userTypes } from "../constains/userTypes";
const initState = {
  listUsers: [],
  user: {},
  loading: false,
  errorMessage: "",
  successMessage: "",
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userTypes.START:
      return { ...state, loading: true };

    case userTypes.FAIL: {
      const { message } = action;
      return {
        ...state,
        loading: false,
        errorMessage: message,
        successMessage: "",
      };
    }
    case userTypes.GET_ALL:
      const { message, data } = action;
      return {
        listUsers: [...data],
        loading: false,
        errorMessage: "",
        successMessage: message,
      };

    default:
      return state;
  }
};

export default userReducer;
