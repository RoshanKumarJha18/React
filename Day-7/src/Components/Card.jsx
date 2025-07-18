import React from 'react'

const Card = ({text,color}) => {  
  // The Card component receives text and color as propsfrom App.jsx
  return (
    <div className='p-4'>
      <button className={`px-3 py-1 cursor-pointer rounded-full ${color} text-white`}>{text}</button>
    </div>
  )
}

export default Card
