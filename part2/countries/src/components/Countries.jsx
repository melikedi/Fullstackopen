function Countries({countries, handleShowCountry}) {
return(
<div>
    {countries.map(c=>
    <ul key={c.name.official}>
        {c.name.common} <button onClick={()=>handleShowCountry(c.name.common)}>show</button>
    </ul>
    )}
    
</div> 
)
}
export default Countries