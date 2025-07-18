import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

const App = () => {
  const [val,setVal] = useState([])
  const handleformsubmit =(data)=>{
   return setVal([...val,data])
  }
  const handleRemoveCard = (id)=>{
   return setVal(()=>val.filter((items,index)=>index !== id))

  }
  return (
    <div className="h-screen w-full bg-zinc-300 flex flex-col items-center p-10">
      <Cards val={val} handleRemoveCard={handleRemoveCard}/>
      <Form handleformsubmit={handleformsubmit} />
    </div>
  )
}

export default App
