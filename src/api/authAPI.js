import axiosClient from "./axiosClient";

export default class AuthAPI {
  login(user) {
    return axiosClient.post(
      "",
      { ...user },
      {
        params: {
          v: "auth",
          m: "login",
        },
      }
    );
  }
}
