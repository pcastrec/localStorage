import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { Home } from './Home/Home'
import { InfoPokemon } from './Infopokemon/InfoPokemon'

import './index.css'
import { Team } from './Team/Team'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
      <Link to={'/team'}>TEAM</Link>
    </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/:id' element={<InfoPokemon />} />
        <Route path='/team' element={<Team />} />
        {/* Toutes les autres routes */}
        {/* <Route path='*' element={<Error404 />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
