import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Discuss from '../pages/Discuss'
import Explore from '../pages/Explore'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import SheetDSA from '../pages/SheetDSA'


const Routing = () => {
  return (
    <>
      <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/discuss' element={<Discuss />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dsa-sheet' element={<SheetDSA />} />
        </Routes>
      </div>
    </>
  )
}

export default Routing
