const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/"

const apiRequest = (info, {serchParams}) => {
    const url = new URL(BASE_URL + info);
    url.search = new URLSearchParams({...serchParams, appid: API_KEY});
    
    return fetch(url)
    .then(res => res.json())
    .then(data => data)
}

export default apiRequest