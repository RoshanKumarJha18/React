import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className='flex justify-center gap-5 flex-col items-center'>
      <Link to="/about/Roshan" className="text-blue-500 font-bold">Roshan</Link>
      <Link to="/about/Akash" className="text-blue-500 font-bold">Akash</Link>
      <Link to="/about/Ajay" className="text-blue-500 font-bold">Ajay</Link>
      <Outlet />
    </div>
  )
}

export default About
