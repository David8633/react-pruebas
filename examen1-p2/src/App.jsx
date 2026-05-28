import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { GuestForm } from './components/GuestForm'
import { GuestList } from './components/GuestList'

function App() {
  const [guests, setGuests] = useState(JSON.parse(localStorage.getItem("guest")) || []);
  //const [guests, setGuests] = useState([]);

  function addGuest(newGuest) {
    setGuests(prev => {
      const updated = [...prev, newGuest];
      localStorage.setItem("guest", JSON.stringify(updated));
      return updated;
    });
  }

  function toggleButton(id) {
    setGuests(prev => {
      const updated = prev.map(person =>
        person.id === id
          ? { ...person, isConfirmed: !person.isConfirmed }
          : person
      );

      localStorage.setItem("guest", JSON.stringify(updated));
      return updated;
    });
  }


  return (
    <>
      <GuestForm onAddGuest={addGuest} />
      <GuestList guests={guests} onToggleButton={toggleButton} />
    </>
  )
}

export default App
