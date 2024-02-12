import axios from "axios";
const baseUrl ='https://studies.cs.helsinki.fi/restcountries/'
const getAllByFilter = (filterValue,showExact) => {
    if (showExact) {
        return axios.get(`${baseUrl}/api/name/${filterValue}`)
        .then(response =>{
            return [response.data]
        })
    } else {
        return axios.get(`${baseUrl}/api/all`).then(response=> {
            const countryList = response.data.filter(x=>x.name.common.toLowerCase().includes(filterValue))
            return countryList
        })
    }

}


export default { getAllByFilter }