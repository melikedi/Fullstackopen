import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import CountriesService from './services/countriesService'
import WeatherService from './services/WeatherService'
import Info from './components/Info'
function App() {
  const [filter, setFilterValue] = useState('')
  const [countries, setCountries] = useState(null)
  const [showExact, setShowExact] = useState(false)

  const handleSearhValueChanged = (e)=>{
    setShowExact(false)
    setFilterValue(e.target.value.toLowerCase())
  }
useEffect(function(){
    if (filter!='') {
      CountriesService
      .getAllByFilter(filter,showExact)
      .then(initialCountries=>{
          if (initialCountries.length === 1) {
            WeatherService
            .getResult(initialCountries[0].latlng)
            .then(weatherResult=>{
              
              initialCountries[0]["weatherInfo"] = weatherResult
              setCountries(initialCountries)
              
            })
          } else {
            setCountries(initialCountries)
          }
          
        })
      .catch(e=>{alert("list cannot be received");})
    } else {
      setCountries(null)
    }
},[filter])

  const handleShowCountry = (name) => {
    setShowExact(true)
    setFilterValue(name)
  }
  return (
    <>
      <div>
          <Filter handleSearhValueChanged={handleSearhValueChanged}></Filter>
          <Info countries={countries} handleShowCountry={handleShowCountry}></Info>
      </div>
    </>
  )
}

export default App
