import axios, { AxiosInstance } from "axios";
import { getToken } from "../context/session/auth";

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {"Content-Type": "application/json"},
});


api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export { api };
