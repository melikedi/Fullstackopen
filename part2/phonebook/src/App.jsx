import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
function App() {
  const [persons, setPersons] = useState([]) 
  const [newEntryName,setNewEntryName] = useState('name Placeholder')
  const [newEntryPhone,setNewEntryPhone] = useState('phone Placeholder') 
  const [filterValue,setfilterValue] = useState('') 
  useEffect(function(){
    axios
      .get('http://localhost:3001/persons')
      .then(response=>setPersons(response.data))
  },[])
  const handleNameChange = (e)=>{
    setNewEntryName(e.target.value)
  }
  const handlePhoneChange = (e)=>{
      setNewEntryPhone(e.target.value)
  }
  const personsToShow = filterValue === '' ? persons: persons.filter(x=>x.name.toLowerCase().includes(filterValue))
  const handleSearhValueChanged = (e)=>{
    setfilterValue(e.target.value.toLowerCase())
  }
  const handleAddPerson = (e)=> {
    e.preventDefault()
    if (persons.filter(x=>x.name===newEntryName).length>0) {
      alert(`${newEntryName} is already added to phonebook`)
    } else {
      const newEntry = { name: newEntryName, number : newEntryPhone}
      setPersons(persons.concat(newEntry))
    }
    setNewEntryName('')
    setNewEntryPhone('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearhValueChanged={handleSearhValueChanged}></Filter>
      <PersonForm handleAddPerson={handleAddPerson}
                  handleNameChange={handleNameChange} 
                  handlePhoneChange={handlePhoneChange}
                  newEntryName={newEntryName}
                  newEntryPhone={newEntryPhone}
                  />
      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    </div>
  )
}

export default App
