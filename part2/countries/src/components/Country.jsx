
function Country({country}) {
    const arrLanguages = Object.entries(country.languages)
    const capital = country.capital[0]
    const icon = country.weatherInfo.weather[0].icon
    const desc = country.weatherInfo.weather[0].description
    const tempK = country.weatherInfo.main.temp
    const tempC = Math.floor(tempK - 273.15)
    const windSpeed = country.weatherInfo.wind.speed
    console.log()
    return(
        <div>
            <h1>{country.name.common}</h1>
            <div>capital {capital}</div>
            <div>area {country.area}</div>
            <h3>languages:</h3>
            <div>{arrLanguages.map(l=><ul key={l[0]}>{l[1]}</ul>)}</div>
            <img src={country.flags.png} alt={country.flags.alt} />
            <h4>Weather in {capital}</h4>
            <div>temperature {tempC} Celcius</div>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}  title={desc} />
            <div>wind {windSpeed} m/s</div>
        </div> 
    )
    
}
export default Country