import Person from './Person'
function Persons({persons}){
return (
    <div>
        <ul>
            {persons.map(x=>
                <Person key={x.name} person={x}/>
            )}
        </ul>
    </div>
)
}
export default Persons