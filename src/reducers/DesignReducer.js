const initState = {
  arrData: [],
  document: null,
  loading: false,
  error: false,
  messageError: "",
  messageSuccess: "",
};
const designReducer = (state = initState, action) => {
  switch (action.type) {
    case "DESIGN_START":
      return {
        ...state,
        loading: true,
        document: null,
        error: false,
        messageError: "",
        messageSuccess: "",
      };
    case "GET_ALL_NEW_SUCCESS":
      return {
        ...state,
        arrData: action.data,
        loading: false,
        error: false,
        messageError: "",
        messageSuccess: action.message,
      };
    case "ADD_USER_SUCCESS": {
      const addDocument = action.data;
      const newArr = state.arrData.filter((item) => item.id !== addDocument.id);
      console.log(newArr);
      return {
        ...state,
        arrData: [...newArr],
        document: addDocument,
        loading: false,
        error: false,
        messageError: "",
        messageSuccess: action.message,
      };
    }
    case "DESIGN_FAIL":
      return {
        ...state,
        loading: false,
        error: true,
        messageError: action.data,
        messageSuccess: "",
      };
    case "RESET_MESSAGE_SUCCESS": {
      return {
        ...state,
        messageSuccess: "",
      };
    }
    default:
      return state;
  }
};

export default designReducer;
