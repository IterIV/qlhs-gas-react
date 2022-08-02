import UserAPI from "../../api/UserAPI";
import { userTypes } from "../constains/userTypes";

const userAPI = new UserAPI();
const start = () => ({ type: userTypes.START });
const fail = (message) => ({
  type: userTypes.FAIL,
  message,
});

export const getAllUsers = (token) => async (dispatch) => {
  dispatch(start());
  try {
    const response = await userAPI.getAllUser(token);
    const { message, data, success } = response;
    if (!success) {
      dispatch(fail(message));
    } else {
      dispatch({
        type: userTypes.GET_ALL,
        data: data,
        message,
      });
    }
  } catch (error) {
    dispatch(fail(error.message));
  }
};

export const resetMessage = () => ({ type: userTypes.RESET_MESSAGE });
