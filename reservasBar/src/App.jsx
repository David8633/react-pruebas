import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { ReservationList } from './components/ReservationList'
import { ReservationForm } from './components/ResvationForm'

function App() {
  const [bookings, setBookings] = useState(JSON.parse(localStorage.getItem("allBookings"))||[]);

  function addBookings(newBooking){
    setBookings( prev => {
      const update = [...prev,newBooking];
      localStorage.setItem("allBookings",JSON.stringify(update));
      return update;
    })
  }

  function toggleButton(id){
    setBookings(prev => {
      const updated = prev.map(booking => {
        return booking.id == id ? {...booking,isConfirmed:!booking.isConfirmed} : booking
      })
      localStorage.setItem("allBookings",JSON.stringify(updated));
      return updated;
    })
  }


  return (
    <>
      <ReservationForm onAddBookings={addBookings}/>
      <ReservationList allBookings={bookings} onToggleButton={toggleButton}/>
    </>
  )
}

export default App
