import axiosClient from "./axiosClient";

class AuthAPI {
  login = (data) => {
    const url = "";
    return axiosClient.post(url, data, {
      params: {
        v: "auth",
        m: "post"
      }
    });
  };
}
const authApi = new AuthAPI();
export default authApi;
