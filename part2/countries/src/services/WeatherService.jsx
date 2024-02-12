import axios from "axios";
const baseUrl ='https://api.openweathermap.org/data/2.5/weather'
const openWeatherApiKey = import.meta.env.VITE_OPENWEATHER_APIKEY
const getResult = (latlng) => {
    return axios.get(`${baseUrl}?lat=${latlng[0]}&lon=${latlng[1]}&appid=${openWeatherApiKey}`).then(response=> {
        return response.data
    })
}
export default { getResult }