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
          t: "new",
        },
      }
    );
  };
  addPersonToDocument = (token, id, userID) => {
    return axiosClient.post(
      "",
      { token, id, canBo: userID },
      {
        params: {
          v: "hosotd",
          m: "put",
          t: "add_cb",
        },
      }
    );
  };
}
const designAPI = new DesignAPI();
export default designAPI;
