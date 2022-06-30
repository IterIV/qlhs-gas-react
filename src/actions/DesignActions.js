import designAPI from "../api/designAPI";

export const getNewDesignAction = (token) => async (dispatch) => {
  dispatch({ type: "DESIGN_START" });
  try {
    const dataFetch = await designAPI.getNewDesign(token);
    if (!dataFetch.success) {
      throw new Error(dataFetch.error);
    }
    dispatch({ type: "DESIGN_SUCCESS", data: dataFetch.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "DESIGN_FAIL", data: error.message });
  }
};
