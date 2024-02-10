import Person from './Person'
function Persons({persons, handleRemove}){
return (
    <div>
        <ul>
            {persons.map(x=>
                <Person key={x.name} person={x} handleRemove={()=>handleRemove(x)}/>
            )}
        </ul>
    </div>
)
}
export default Persons