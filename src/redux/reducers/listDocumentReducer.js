import { listDocumentTypes } from "../constains/listDocumentType";
const initState = {
  listDocument: [],
  loading: false,
  errorMessage: "",
  successMessage: "",
};
const listDocumentReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case listDocumentTypes.START_FETCH:
      return { ...state, loading: true };
    case listDocumentTypes.FETCH_SUCCESS:
      const { message, data } = payload;
      return {
        listDocument: [...data],
        loading: false,
        errorMessage: "",
        successMessage: message,
      };
    case listDocumentTypes.FETCH_FAIL: {
      const { message } = payload;
      return {
        ...state,
        loading: false,
        errorMessage: message,
        successMessage: "",
      };
    }
    case listDocumentTypes.RESET_MESSAGE:
      return { ...state, errorMessage: "", successMessage: "" };
    default:
      return state;
  }
};

export default listDocumentReducer;
