import axiosClient from "./axiosClient";

class UserAPI {
  getAllUser = (token) => {
    return axiosClient.post(
      "",
      { token },
      {
        params: {
          v: "canbo",
          m: "get",
        },
      }
    );
  };
}
const userAPI = new UserAPI();
export default userAPI;
