import axios from "axios";

const adminUrl = "https://www.themealdb.com/api/json/v1/1";

export const baseURL = adminUrl;

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
