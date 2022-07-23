import userAPI from "../api/userAPI";

const getAllUser = (token) => async (dispatch) => {
  dispatch({ type: "FETCH_START" });
  try {
    const dataFetch = await userAPI.getAllUser(token);
    if (!dataFetch.success) {
      throw new Error(dataFetch.error);
    }
    dispatch({ type: "FETCH_SUCCESS", data: dataFetch.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "FETCH_FAIL", data: error.message });
  }
};

export { getAllUser };
