import React from 'react'
import Card from './Card'

const Cards = ({val,handleRemoveCard}) => {
  return (
    <div className='w-full flex justify-center gap-3  p-3 flex-wrap h-85 overflow-auto' >
      {val.map((items,index)=>{
        return <Card key={index} val={items} handleRemoveCard={handleRemoveCard} id={index}/>
      })}
      
    </div>
  )
}

export default Cards
