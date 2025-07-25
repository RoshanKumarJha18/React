import React, { useEffect } from 'react'

const Services = () => {
    
    useEffect(()=>{
        console.log("Services component created")

        return ()=>{
            console.log("services component deleted")
        }
    })
  return (
    <div>
      Services
    </div>
  )
}

export default Services
