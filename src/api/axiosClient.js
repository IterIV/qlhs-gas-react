import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "text/plain; charset=utf-8"
  },
  paramsSerializer: (params) => queryString.stringify(params)
});
axiosClient.interceptors.request.use(
  async (config) => {
    // Handle Token here....
    return config;
  },
  (error) => {
    throw error;
  }
);
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);
export default axiosClient;
