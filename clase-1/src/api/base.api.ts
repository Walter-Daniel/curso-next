import axios from "axios";

export const BASE_URL = "https://api.nasa.gov";

export const instance = axios.create({
    baseURL: BASE_URL
});