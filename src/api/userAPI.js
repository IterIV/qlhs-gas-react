import axiosClient from "./axiosClient";

class UserAPI {
  getAllUser = (token) => {
    return axiosClient.post(
      "",
      { token },
      {
        params: {
          v: "auth",
          m: "get",
        },
      }
    );
  };
}
const userAPI = new UserAPI();
export default userAPI;
