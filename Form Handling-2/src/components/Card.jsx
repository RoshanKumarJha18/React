import React from 'react'

const Card = ({val,handleRemoveCard,id}) => {
  return (
    <div className='w-[17vw] h-full flex flex-col items-center p-4 rounded-lg bg-white'>
      <div className="h-[5vw] w-[5vw] rounded-full overflow-hidden bg-zinc-600">
        <img className='w-full h-full object-cover ' src={val.image} alt="" />
      </div>
      <h1 className='text-2xl'>{val.name}</h1>
      <h4 className='opacity-60'>{val.email}</h4>
      <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nobis consequatur quidem?</p>
      <button onClick={()=>handleRemoveCard(id)} className=' cursor-pointer bg-red-600 px-3 py-1 rounded-full text-white mt-2'>Remove Card</button>
    </div>
  )
}

export default Card
