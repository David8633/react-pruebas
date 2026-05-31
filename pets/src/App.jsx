import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { PetForm } from './components/PetForm'
import { PetList } from './components/PetList'

function App() {
  const [pets, setPets] = useState(JSON.parse(localStorage.getItem("pets"))||[]);

  function addPet(newPet){
    setPets(prev => {
      const updated = [...prev,newPet];
      localStorage.setItem("pets",JSON.stringify(updated));
      return updated;
    })
  }

  function toggleButton(id){
    setPets(prev => {
      const updated = prev.map(pet => {
        return pet.id == id ? {...pet,isVacunated:!pet.isVacunated} : pet
      })
      localStorage.setItem("pets",JSON.stringify(updated));
      return updated;
    })
  }

  return (
    <>
      <PetForm onAddPet={addPet}/>
      <PetList pets={pets} onToggleButton={toggleButton}/>
    </>
  )
}

export default App
