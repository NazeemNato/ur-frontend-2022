import axios from "axios";
import { TokenService } from "./token";

const instance = axios.create({
  baseURL: "https://ur-api.nazeemnato.repl.co/api",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    if (config.headers) {
      const token = TokenService.getSecretToken();
      if (token) {
        config.headers["Secret"] = token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;