import { useState } from 'react'
import Navbar from './Components/Navbar'
import MovieCard from './Components/MovieCard'
import WatchlistItem from './Components/WatchlistItem'
import { WatchListContext_Provider } from './Context/WatchListContext,'
import movies from './Data/Movies'
function App() {
  const [list ,setlist] = useState([])

  const addList = (movie) => {
    if(list.some(list => list.id === movie.id) ) return
    setlist((prev) => [...prev,movie])
  }
  const deletList =(movie) =>{
    setlist( prev => prev.filter(prevlist => prevlist.id !== movie.id ))
  }

  return (
    < WatchListContext_Provider value={{list , addList,deletList}}>
          <div className="max-w-full mx-auto">

          <Navbar />
      <div className="p-5">
        <p className="text-base font-medium mb-3">Browse</p>
        <div className="grid grid-cols-4 gap-3  mb-8">
         {movies.map((movies) =>{
         return <MovieCard key={movies.id} movie={movies} /> 
         })}
        </div>

        <p className="text-base font-medium mb-3">My list</p>
        <div>
         {list.map((movie) =>{
           return <WatchlistItem  key={movie.id} movie={movie}/>
         } )}
        </div>
      </div>
    </div>
    </ WatchListContext_Provider>
  )
}

export default App
