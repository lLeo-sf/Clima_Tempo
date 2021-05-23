import axios from "axios";


const api = axios.create({
    baseURL: "https://127.0.0.1:3001/",
});


export default class Api {
    static get = async () => {
        let data = await api.get('');
        return data;
    }

    static getTop5 = async () => {
        let data = await api.get('top5');
        return data;
    }

    static add = async (cidade, data, temp, temp_min, temp_max, looks) => {
        let result = await api.post('', {
            cidade: cidade,
            data: data,
            temp: temp,
            temp_min: temp_min,
            temp_max: temp_max,
            looks: looks
        });
        window.location.reload();
        return result;
    }
}
