import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URI,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

const axiosInstanceAuth = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URI,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

axiosInstanceAuth.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export {axiosInstance, axiosInstanceAuth};
