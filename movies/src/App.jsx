import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { MovieForm } from './components/MovieForm'
import { MovieList } from './components/MovieList'

function App() {
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem("movies"))||[]);

  function addMovie(newMovie){
    setMovies(prev => {
      const updated = [...prev,newMovie];
      localStorage.setItem("movies",JSON.stringify(updated));
      return updated;
    })
  }

  function toggleButton(id){
    setMovies(prev => {
      const updated = prev.map(movie => {
        return movie.id == id ? {...movie,isRecomend:!movie.isRecomend} : movie
      })
      localStorage.setItem("movies",JSON.stringify(updated));
      return updated;
    })
  }

  return (
    <>
      <MovieForm onAddMovie={addMovie}/>
      <MovieList movies={movies} onToggleButton={toggleButton}/>
    </>
  )
}

export default App
