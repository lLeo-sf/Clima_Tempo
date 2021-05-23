import axios from "axios";

const apiWeath = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
});


export default class Weather {
    static getClimaByCidade = async (cidade) => {
        let data = await apiWeath.get(`/weather?appid=f82c2f42e0b70379e201668d6f5b4c39&q=${cidade}&units=metric`);
        return data;
    }
}
