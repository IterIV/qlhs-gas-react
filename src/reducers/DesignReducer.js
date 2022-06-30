const initState = {
  arrData: [],
  document: null,
  loading: false,
  error: false,
  messageError: ""
};
const designReducer = (state = initState, action) => {
  switch (action.type) {
    case "RESET_STATE":
      return { ...initState };
    case "DESIGN_START":
      return { ...state, loading: true, error: false, messageError: "" };
    case "DESIGN_SUCCESS":
      return {
        ...state,
        arrData: action.data,
        loading: false,
        error: false,
        messageError: ""
      };
    case "DESIGN_FAIL":
      return {
        ...state,
        loading: false,
        error: true,
        messageError: action.data
      };

    default:
      return state;
  }
};

export default designReducer;