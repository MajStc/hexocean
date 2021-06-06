import axios from "axios";
import { url } from "../secret/api";
import { toast } from "react-toastify";

const API = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.response.use(
  (res) => {
    toast.success("Succesfully added a dish!", {
      position: "bottom-right",
    });
    return res;
  },
  (err) => {
    toast.error(err.response.data[Object.keys(err.response.data)[0]], {
      position: "bottom-right",
    });
    return Promise.reject(err);
  }
);

export default API;
