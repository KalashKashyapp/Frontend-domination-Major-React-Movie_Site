import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movies from './Components/Movies'
import Tvshows from './Components/Tvshows'
import Celeb from './Components/Celeb'
import About from './Components/About'
import Contact from './Components/Contact'
import Moviedetails from './Components/Moviedetails'
import Tvdetails from './Components/Tvdetails'
import Persondetails from './Components/Persondetails'
import Trailer from './Components/Templates/Trailer'
import Notfound from './Components/Notfound'


const App = () => {
  return (
    <div className='w-screen h-screen bg-[#1F1E24] flex'>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/trending" element={<Trending />} />

        <Route path="/popular" element={<Popular />} />

        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route> 

        <Route path="/tv" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<Tvdetails />}> 
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/person" element={<Celeb />} />
        <Route path="/person/details/:id" element={<Persondetails />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Notfound />} />

      </Routes>

    </div>
  )
}

export default App