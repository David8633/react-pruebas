import { useState } from 'react'
import './App.css'
import { BookForm } from './components/BookForm'
import { BookList } from './components/BookList'

function App() {
  const [bookings, setBookings] = useState(JSON.parse(localStorage.getItem("bookings")) || []);

  function updatedLocal(newUpdate) {
    localStorage.setItem("bookings", JSON.stringify(newUpdate));
  }

  function addBooking(newBooking) {
    setBookings(prev => {
      const updated = [...prev, newBooking];
      updatedLocal(updated);
      return updated;
    })
  }

  function toggleButton(id) {
    setBookings(prev => {
      const updated = prev.map(booking => booking.id == id ? 
                                            {...booking, isLeido: !booking.isLeido}
                                            : booking);
      updatedLocal(updated);
      return updated;
    })
  }

  return (
    <>
      <BookForm onAddBooking={addBooking} />
      <BookList bookings={bookings} onToggleButton={toggleButton}/>
    </>
  )
}

export default App
