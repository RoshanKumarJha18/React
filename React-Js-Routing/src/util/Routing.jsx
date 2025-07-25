import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import UserDetail from '../components/UserDetail'


const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}>
        <Route path='/about/:name' element={<UserDetail />} />
        </Route> 
      </Routes>
    </div>
  )
}

export default Routing
