import React, { useState } from 'react'

function App() {
  const [val,setval] = useState({name:"roshan",age:20})

  return (
    <div className='p-6'>
     <h1>Name: {val.name}</h1> 
     <h1>Age : {val.age.toString()}</h1> 
     <button onClick={()=>setval({...val, age:val.age+1})} className='px-3 py-1 bg-blue-500 text-white rounded-full cursor-pointer'>change</button>
    </div>
  )
}

export default App
