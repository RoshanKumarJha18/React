import axios from '../Util/axios'
import React, { useEffect } from 'react'

const Main = () => {
    const user =()=>{
        const api = "/users"
        axios.get(api).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        console.log("Main component created")
        user();
        return ()=>{
            console.log("Main component deleted")
        }
    })
  return (
    <div>
      
    </div>
  )
}

export default Main
