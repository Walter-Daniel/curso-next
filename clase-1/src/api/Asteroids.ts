import { instance } from "./base.api";

const apiKey = import.meta.env.VITE_API_KEY;

export const asteroidsApi = {
    getAll: function(formattedStartDate:string, formattedEndDate:string){
        return instance.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${formattedStartDate}&end_date=${formattedEndDate}&api_key=${apiKey}`)
    }
}