import { useState, useEffect } from 'react'
import personService from './services/PersonService'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Notification from './components/Notification'
function App() {
  const [persons, setPersons] = useState([]) 
  const [newEntryName,setNewEntryName] = useState('')
  const [newEntryPhone,setNewEntryPhone] = useState('') 
  const [filterValue,setfilterValue] = useState('') 
  const [notification,setNotification] = useState(null)

  useEffect(function(){
    personService
      .getAll()
      .then(initialPersons=>{setPersons(initialPersons)})
      .catch(e=>{setNotification({type:'error', message:"list cannot be received"})})
  },[])
  const clearNotification = () => setNotification(null)
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
  const handleRemove = (entry) => {
    if (window.confirm(`Delete ${entry.name} ?`)) {
      personService 
      .remove(entry.id)
      .then(deletedEntry=>{
        setPersons(persons.filter(p=>p.id!==entry.id))
        setNotification({type:'info', message:`${entry.name} deleted`})
      })
      .catch(e=>{
        setNotification({type:'error', message:`${entry.name} is already removed`})
        setPersons(persons.filter(p=>p.id!==entry.id))
      })
    }
    setTimeout(clearNotification, 5000);
  }
  const handleAddPerson = (e)=> {
    e.preventDefault()
    const person = persons.find(p=>p.name===newEntryName)
    if (person) {
      if (window.confirm(`${newEntryName} is already added to phonebook,replace the old number with the new one?` )) {
        const changedPerson = {...person,number:newEntryPhone}
        personService
          .update(changedPerson.id,changedPerson)
          .then(changedPerson=> {
              setPersons(persons.map(p=>p.id===changedPerson.id ? changedPerson : p))
              setNotification({type:'info', message:`${person.name} phone changed`})
            }
          )
          .catch(e=>{setNotification({type:'error', message:`${person.name} phone cannot be changed`})})
      }
    } else {
      const newEntry = { name: newEntryName, number : newEntryPhone}
      personService
        .create(newEntry)
        .then(newEntry=>{
          setPersons(persons.concat(newEntry))
          setNotification({type:'info', message:`${newEntry.name} added`})
        })
        .catch(e=>{setNotification({type:'error', message:"entry cannot be added"})})
    }
    setNewEntryName('')
    setNewEntryPhone('')
    setTimeout(clearNotification, 5000);
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification}/>
      <Filter handleSearhValueChanged={handleSearhValueChanged}></Filter>
      <PersonForm handleAddPerson={handleAddPerson}
                  handleNameChange={handleNameChange} 
                  handlePhoneChange={handlePhoneChange}
                  newEntryName={newEntryName}
                  newEntryPhone={newEntryPhone}
                  />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleRemove={handleRemove}/>
    </div>
  )
}

export default App
