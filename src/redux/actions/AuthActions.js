import AuthAPI from "../../api/AuthAPI";
import { authTypes } from "../constains/authType";
const authAPI = new AuthAPI();

const start = () => ({ type: authTypes.START_LOGIN });

const fail = (payload) => ({
  type: authTypes.LOGIN_FAIL,
  payload,
});

const success = (payload) => ({
  type: authTypes.LOGIN_SUCCESS,
  payload,
});

export const login = (user, navigate) => async (dispatch) => {
  dispatch(start());
  try {
    const payload = await authAPI.login(user);
    if (!payload.success) {
      dispatch(fail(payload));
    } else {
      dispatch(success(payload));
      navigate("../home/dashboard", { replace: true });
    }
  } catch (error) {
    const payload = { success: false, data: null, message: error.message };
    dispatch(fail(payload));
  }
};

export const logoutAction = () => ({ type: authTypes.LOG_OUT });

export const resetMessage = () => ({ type: authTypes.RESET_MESSAGE });
