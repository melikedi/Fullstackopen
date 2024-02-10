import { useState } from 'react'
function PersonForm(props) {
return (
    <div>
        <h3>Add a new entry</h3>
        <form onSubmit={props.handleAddPerson}>
            <div>name:
                <input 
                    value={props.newEntryName}
                    onChange={props.handleNameChange}>
                 </input>
            </div>
            <div>phone:
                <input 
                    value={props.newEntryPhone}
                    onChange={props.handlePhoneChange}>
                 </input>               
            </div>
            <button type='submit'>add</button>
        </form>
    </div>
)
}
export default PersonForm