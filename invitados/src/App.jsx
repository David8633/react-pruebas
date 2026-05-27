import { useState } from 'react'
import './App.css'
import { GuestForm } from './components/GuestForm';
import { GuestList } from './components/GuestList';
import { TemperatureConverter } from './components/TemperatureConverter';
import { SubscriptionCard } from './components/SubscriptionCard';
import { CourseItem } from './components/CourseIntem';


function App() {

  const [totalPeople, setTotalPeople] = useState([]);

  function addGuest(person){
    setTotalPeople([...totalPeople,person]);
  }


  function toggleConfirmed(id){
    setTotalPeople((prev) => prev.map(person => {
      return person.id == id ? {...person,isConfirmed:!person.isConfirmed} : person
    }))
  }

  return (
    <>
      <h1>INVITADOS BODA</h1>
      <GuestForm onAddGuest={addGuest} />
      <GuestList onTotalPeople={totalPeople} onToggleConfirmed={toggleConfirmed} />
      <TemperatureConverter></TemperatureConverter>
      <SubscriptionCard planName={"REACT"} price={23.3} isPremium={false} />

      <SubscriptionCard planName={"REACT"} price={23.3} isPremium={true} />

      <CourseItem  />

    </>
  )
}

export default App
