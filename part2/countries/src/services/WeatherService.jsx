import axios from "axios";
const baseUrl ='https://api.openweathermap.org/data/2.5/weather'
const openWeatherApiKey = "3565c9c7b6d1497ed085faa1abfa698c"
const openWeatherApiKey1 = import.meta.env.VITE_SOME_KEY
const getResult = (latlng) => {
    return axios.get(`${baseUrl}?lat=${latlng[0]}&lon=${latlng[1]}&appid=${openWeatherApiKey}`).then(response=> {
        return response.data
    })
}
export default { getResult }