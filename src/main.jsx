import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Navbar } from './NavBar/Navbar'
import { Home } from './Home/Home'
import { About } from './About/About'
import { Team } from './Team/Team'
import { Toaster } from 'react-hot-toast'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/:id' element={<About />} />
        <Route path='/team' element={<Team />} />
        {/* Toutes les autres routes */}
        {/* <Route path='*' element={<Error404 />} /> */}
      </Routes>
      <Toaster toastOptions={{
        style: {
          backgroundColor: '#DDDDDD'
        }
      }} />
    </BrowserRouter>
  </React.StrictMode>,
)
