import axios from "axios";

export const service = axios.create({
  baseURL: import.meta.env.VITE_HOST_API
});