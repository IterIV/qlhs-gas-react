import authApi from "../api/authAPI";

export const loginAction = (userLogin, navigate) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const data = await authApi.login(userLogin);
    if (!data.success) {
      throw new Error(data.error);
    }
    dispatch({ type: "AUTH_SUCCESS", data: data.data });
    navigate("../home/dashboard", { replace: true });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL", data: error.message });
  }
};
export const logoutAction = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
