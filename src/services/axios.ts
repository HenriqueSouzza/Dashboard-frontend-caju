import axios from "axios";
import { Env } from "~/constants";

export const service = axios.create({
  baseURL: Env.api,
});