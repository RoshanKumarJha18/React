import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
     <div className="nav flex justify-center gap-10 p-10">
      <NavLink className={(e)=>{
        return [e.isActive ? "text-blue-500" : "text-black", "font-bold"].join(" ") 
        }} to="/">Home</NavLink>
      <NavLink className={(e)=>{
        return [e.isActive ? "text-blue-500" : "text-black", "font-bold"].join(" ") 
        }} to="/contact">Contact</NavLink>
      <NavLink className={(e)=>{
        return [e.isActive ? "text-blue-500" : "text-black", "font-bold"].join(" ") 
        }} to="/about">About</NavLink>

      </div>
  )
}

export default Navbar
