import { documentTypes } from "../constains/documentType";
const initState = {
  listDocuments: [
    {
      id: "",
      building: "",
      detail: "",
      address: "",
      investor: "",
      startTime: "",
      endTime: "",
      user: "",
      loaiHinh: "",
      nhomCongTrinh: "",
      soVB: "",
      loaiVB: "",
      ngayVB: "",
      thuPhi: "",
    },
  ],
  document: null,
  loading: false,
  errorMessage: "",
  successMessage: "",
};

const documentReducer = (state = initState, action) => {
  switch (action.type) {
    case documentTypes.START:
      return { ...state, loading: true, errorMessage: "", successMessage: "" };

    case documentTypes.FAIL: {
      const { message } = action;
      return {
        ...state,
        loading: false,
        errorMessage: message,
        successMessage: "",
      };
    }

    case documentTypes.ADD_NEW:
      const { message, data } = action;
      return {
        ...state,
        document: { ...data },
        loading: false,
        errorMessage: "",
        successMessage: message,
      };

    case documentTypes.GET_NEW: {
      const { message, data } = action;
      return {
        ...state,
        listDocuments: [...data],
        loading: false,
        errorMessage: "",
        successMessage: message,
      };
    }

    default:
      return state;
  }
};

export default documentReducer;
