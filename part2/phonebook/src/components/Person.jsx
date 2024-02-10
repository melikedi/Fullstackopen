function Person({person, handleRemove}){
    return(
        <li>
            {person.name}  {person.number} <button onClick={handleRemove}>delete</button>
        </li>
    )
}
export default Person