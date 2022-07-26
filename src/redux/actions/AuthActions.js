import authApi from "../../api/authAPI";
import { authTypes } from "../constains/authType";

const startLogin = () => ({ type: authTypes.START_LOGIN });
const loginFailure = (
  payload = { success: false, data: null, message: "" }
) => ({ type: authTypes.LOGIN_FAIL, payload });
const loginSuccess = (payload = { success: true, data: {}, message: "" }) => ({
  type: authTypes.LOGIN_SUCCESS,
  payload,
});

export const loginAction = (userLogin, navigate) => async (dispatch) => {
  dispatch(startLogin());
  try {
    const payload = await authApi.login(userLogin);
    if (!payload.success) {
      dispatch(loginFailure(payload));
    } else {
      dispatch(loginSuccess(payload));
      navigate("../home/dashboard", { replace: true });
    }
  } catch (error) {
    const payload = { success: false, data: null, message: error.message };
    dispatch(loginFailure(payload));
  }
};

export const logoutAction = () => ({ type: authTypes.LOG_OUT });
export const resetMessage = () => ({ type: authTypes.RESET_MESSAGE });
