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
  addNewDocument = (token, document) => {
    return axiosClient.post(
      "",
      { token, ...document },
      {
        params: {
          v: "hosotd",
          m: "post",
        },
      }
    );
  };
  delete = (token, id) => {
    return axiosClient.post(
      "",
      { token, id },
      {
        params: {
          v: "hosotd",
          m: "delete",
        },
      }
    );
  };
}
const designAPI = new DesignAPI();
export default designAPI;
