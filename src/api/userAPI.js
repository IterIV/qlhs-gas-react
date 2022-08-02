import axiosClient from "./axiosClient";

export default class UserAPI {
  getAllUser = (token) => {
    return axiosClient.post(
      "",
      { token },
      {
        params: {
          v: "user",
          m: "get_all",
        },
      }
    );
  };
}
