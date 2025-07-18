// Method-1 using useRef
// import React, { useRef } from 'react'


// const App = () => {
//   const Name = useRef(null)
//   const Email = useRef(null)
//   const handleSubmit = (event)=>{
//     event.preventDefault()
//     console.log(Name.current.value, Email.current.value)
  
//   }
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <input ref={Name} type="text" placeholder='Name' />
//         <input ref={Email} type="email" placeholder='Email' />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App


// method-2 using Controlled component
// import React, { useState } from 'react'

// const App = () => {
//   const[val,setVal] = useState({name:''})
//   const handleSubmit =(event)=>{
//     event.preventDefault()
//     console.log(val)

//   }
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <input type="text" onChange={(e)=>setVal(e.target.value)} />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App


//Method-3 react hook form
import React from 'react'
import { useForm } from 'react-hook-form'
const App = () => {
  const {register,handleSubmit} = useForm()
  return (
    <div>
      <form action="" onSubmit={handleSubmit(data => console.log(data))}>
      <input {...register('Name')} type="text" placeholder='Name' />
      <input {...register('Email')} type="email" placeholder='Email' />
      <input type="submit"/>
      </form>
    </div>
  )
}

export default App


