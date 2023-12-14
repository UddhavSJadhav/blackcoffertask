import axios from "axios";

import { API } from "./API.ts";

export const axiosOpen = axios.create({
  baseURL: API,
});
