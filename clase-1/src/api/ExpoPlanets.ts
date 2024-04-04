import { instance } from "./base.api";

const endpoint = 'https://raw.githubusercontent.com/GarajedeIdeas/LiveCoding-Visualizacion-de-exoplanetas-usando-la-API-de-la-NASA/master/nph-nstedAPI.json';

export const exoPlanetApi = {
    getAll: function(){
        return instance.get(endpoint)
    }
}