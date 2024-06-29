import { formettedForcastWeatherResponseData, formettedWeatherResponseData } from "./formettedResponse";

// @ts-ignore
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/"

const apiRequest = async (info, { searchParams }) => {
    const url = new URL(BASE_URL + info);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY }).toString();

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok ' + res.statusText);
            }
            return res.json();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

const getWheatherInfo = async (searchParams) => {

    const curentWeatherData = await apiRequest('weather', { searchParams })
        .then(data => formettedWeatherResponseData(data));

    const { lat, lon, dt, timezone } = curentWeatherData;
    const forecastParams = { lat, lon, units: searchParams.units };
    const forcastWeatherData = await apiRequest('forecast', { searchParams: forecastParams })
        .then(data => formettedForcastWeatherResponseData(dt, timezone, data.list));

    return { ...curentWeatherData, ...forcastWeatherData };
}



export default getWheatherInfo