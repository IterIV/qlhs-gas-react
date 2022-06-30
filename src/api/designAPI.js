import axiosClient from "./axiosClient";

class DesignAPI {
  getNewDesign = (token) => {
    return axiosClient.post(
      "",
      { token },
      {
        params: {
          v: "hosotd",
          m: "get",
          t: "new"
        }
      }
    );
  };
}
const designAPI = new DesignAPI();
export default designAPI;
