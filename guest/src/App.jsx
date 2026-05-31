import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { GuestForm } from './components/GuestForm'
import { GuestList } from './components/GuestList'

function App() {
  const [guests, setGuests] = useState(JSON.parse(localStorage.getItem("guests"))||[]);

  function addGuest(newGuest){
    setGuests(prev => {
      const updated = [...prev,newGuest];
      localStorage.setItem("guests",JSON.stringify(updated));
      return updated;
    })
  }

  function toggleButton(id){
    setGuests(prev => {
      const updated = prev.map(guest => guest.id == id ? {...guest,isConfirmed:!guest.isConfirmed}: guest)
        localStorage.setItem("guests",JSON.stringify(updated));
      return updated;
    })
  }


  return (


<>

    <header className="header">
        <h1>Gestión de Invitados</h1>
    </header>

    <main className="container">

        <GuestForm onAddGuest={addGuest} />
        <GuestList guests={guests} onToggleButton={toggleButton}/>
        

    </main>

</>


  )
}

export default App
