import { instance } from "./base.api";

const apiKey = import.meta.env.VITE_API_KEY;
const endpoint = `/planetary/apod?api_key=${apiKey}`;

export const apod = {
    getAll: function(){
        return instance.get(endpoint)
    }
}