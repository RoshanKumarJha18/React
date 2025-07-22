import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {
    const {name} = useParams()
    const navigate = useNavigate()
    const Backhandle = () => {
        // navigate("/about")
        navigate(-1) // This will take the user back to the previous page in history
        

    } 

  return (
    <div className='flex justify-center items-center flex-col gap-5'>
      <h1 className='text-5xl font-bold'>User Detail</h1>
      <p className='text-2xl text-red-600 font-bold '>Hello! <span className='underline'>{name}</span> You Have Been Logged In</p>
        <button onClick={Backhandle} className='rounded-full bg-blue-600 px-3 py-1 text-white font-bold cursor-pointer'>Go back </button>
    </div>
  )
}

export default UserDetail
