import React, { useEffect, useState } from 'react'

const Services = () => {
    const [first,setfirst] = useState("this is normal data")
    const [second, setsecond] = useState("this is large data")
    useEffect(()=>{
        console.log("Services component created")

        return ()=>{
            console.log("services component deleted")
        }
    },[second]) // This effect will run when 'second' changes
  return (
    <div>
      Services
      <hr className='w-full h-0.5 bg-black' />
      <h1>{first}</h1>
      <button className='px-3 py-1 text-white rounded-full bg-red-600 cursor-pointer' onClick={()=>setfirst("normal data has been changed")}>change normal data</button>
      <h1>{second}</h1>
      <button className='px-3 text-white py-1 rounded-full bg-red-600 cursor-pointer' onClick={()=>setsecond("large data has been changed")}>change large data</button>
    </div>
  )
}

export default Services
