import { documentTypes } from "../constains/documentType";
const initState = {
  document: null,
  loading: false,
  errorMessage: "",
  successMessage: "",
};

const documentReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case documentTypes.START_FETCH:
      return { ...state, loading: true };
    case documentTypes.UPDATE_SUCCESS:
      const { message, data } = payload;
      return {
        document: { ...data },
        loading: false,
        errorMessage: "",
        successMessage: message,
      };
    case documentTypes.FETCH_FAIL: {
      const { message } = payload;
      return {
        ...state,
        loading: false,
        errorMessage: message,
        successMessage: "",
      };
    }
    case documentTypes.RESET_MESSAGE:
      return { ...state, errorMessage: "", successMessage: "" };
    default:
      return state;
  }
};

export default documentReducer;
