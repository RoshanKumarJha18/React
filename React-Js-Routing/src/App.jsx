import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Routing from './util/Routing'

const App = () => {
  return (
    <div>
     <Navbar />
      <Routing />
    </div>
  )
}

export default App
