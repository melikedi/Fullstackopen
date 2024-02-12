import Countries from './Countries'
import Country from './Country'
function Info({countries, handleShowCountry}) {
if (!countries) { 
    return null 
}
if (countries.length===1) {
    return(
        <Country country={countries[0]}></Country>
    )
} else if (countries.length>10) {
    return(
    <div>too many matches</div>
    )
} else {
    return(
        <Countries countries={countries} handleShowCountry={handleShowCountry}></Countries>
    )
}
}
export default Info