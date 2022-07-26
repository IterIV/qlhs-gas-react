import userAPI from "../../api/userAPI";
import { userTypes } from "../constains/userTypes";

const startFecth = () => ({ type: userTypes.START_FETCH });
const fetchFail = (payload = { success: false, data: null, message: "" }) => ({
  type: userTypes.FETCH_FAIL,
  payload,
});
const fetchSuccess = (payload = { success: true, data: {}, message: "" }) => ({
  type: userTypes.FETCH_SUCCESS,
  payload,
});

export const getAllUser = (token) => async (dispatch) => {
  dispatch(startFecth());
  try {
    const payload = await userAPI.getAllUser(token);
    if (!payload.success) {
      dispatch(fetchFail(payload));
    } else {
      dispatch(fetchSuccess(payload));
    }
  } catch (error) {
    const payload = { success: false, data: null, message: error.message };
    dispatch(fetchFail(payload));
  }
};

export const resetMessage = () => ({ type: userTypes.RESET_MESSAGE });
