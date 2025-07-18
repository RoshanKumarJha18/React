import React, { useState } from 'react'
import Card from './Components/Card'

const App = () => {
  const data =[
    {name: 'John', proffesion: 'Developer', image:"https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name: 'Roshan', proffesion: 'Coder' ,image:"https://images.unsplash.com/photo-1519713958759-6254243c4a53?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name: 'Roany', proffesion: 'Singer', image:"https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name: 'Rohit', proffesion: 'Dancer' ,image:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=721&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
  ]
  const [realdata,setrealdata] = useState(data)
  const handleClick = (ChangedIndex)=>{
    setrealdata((prev)=>{
      return prev.map((items,index)=>{
        if(index === ChangedIndex){
          return {...items,friends: !items.friends}
        }
        return items;
      })
    })
  }
  return (
    <div className='bg-zinc-300 h-screen w-full flex gap-3 justify-center items-center '>
      {realdata.map((items,index)=>(
        <Card value={items} keyIndex={index} key={index} handleClick={handleClick}/>
      ))}
    </div>
  )
}

export default App
