import designAPI from "../api/designAPI";

export const getNewDesignAction = (token) => async (dispatch) => {
  dispatch({ type: "DESIGN_START" });
  try {
    const dataFetch = await designAPI.getNewDesign(token);
    if (!dataFetch.success) {
      throw new Error(dataFetch.error);
    }
    dispatch({
      type: "GET_ALL_NEW_SUCCESS",
      data: dataFetch.data,
      message: dataFetch.message,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: "DESIGN_FAIL", data: error.message });
  }
};

export const addUserToDocument = (token, id, userID) => async (dispatch) => {
  dispatch({ type: "DESIGN_START" });
  try {
    const updateData = await designAPI.addPersonToDocument(token, id, userID);
    if (!updateData.success) {
      throw new Error(updateData.error);
    }
    dispatch({
      type: "ADD_USER_SUCCESS",
      data: updateData.data,
      message: updateData.message,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: "DESIGN_FAIL", data: error.message });
  }
};

export const resetMessageSucess = () => ({ type: "RESET_MESSAGE_SUCCESS" });
