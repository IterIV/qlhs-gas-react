import axiosClient from "./axiosClient";

export default class DesignAPI {
  // GET
  getNew(token) {
    return axiosClient.post(
      "",
      { token },
      {
        params: {
          v: "document",
          m: "get_new",
        },
      }
    );
  }
  getInProcess() {
    return axiosClient.post(
      "",
      { token: this.token },
      {
        params: {
          v: "document",
          m: "getInprocess",
        },
      }
    );
  }
  getFinish(startTime, endTime) {
    return axiosClient.post(
      "",
      { token: this.token, startTime, endTime },
      {
        params: {
          v: "document",
          m: "getFinish",
        },
      }
    );
  }
  search(building, investor, address, startTime, endTime) {
    return axiosClient.post(
      "",
      { token: this.token, building, investor, address, startTime, endTime },
      {
        params: {
          v: "document",
          m: "getFinish",
        },
      }
    );
  }

  addPerson(listNew) {
    const token = this.token;
    return axiosClient.post(
      "",
      { token, data: listNew },
      {
        params: {
          v: "document",
          m: "put",
          t: "add_cb",
        },
      }
    );
  }
  addNew(token, document) {
    return axiosClient.post(
      "",
      { token, data: document },
      {
        params: {
          v: "document",
          m: "add_new",
        },
      }
    );
  }
  addResult(document) {
    const token = this.token;
    return axiosClient.post(
      "",
      { token, ...document },
      {
        params: {
          v: "document",
          m: "put",
          t: "add_result",
        },
      }
    );
  }
  update(document) {
    const token = this.token;
    return axiosClient.post(
      "",
      { token, ...document },
      {
        params: {
          v: "document",
          m: "put",
          t: "update",
        },
      }
    );
  }
  delete(id) {
    const token = this.token;
    return axiosClient.post(
      "",
      { token, id },
      {
        params: {
          v: "document",
          m: "delete",
        },
      }
    );
  }
}
