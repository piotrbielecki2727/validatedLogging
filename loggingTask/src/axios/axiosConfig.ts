import axios from "axios";

const apiClient = axios.create();

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) console.log("Request canceled: ", error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
