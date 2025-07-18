import React from 'react'

const Card = ({value}) => {
  const {img,name,artist,favourite} = value
  return (
    <div className='h-20 w-43 flex relative justify-around bg-white m-9 p-2 rounded-md'>
      <div className="h-13 w-13 rounded-md bg-zinc-500 overflow-hidden ">
        <img className='w-full h-full' src={img} alt="" />
      </div>
      <div className="h-fit w-fit">
        <h1 className='font-bold text-lg'>{name}</h1>
        <p className='text-sm'>{artist}</p>
      </div>
      <button onClick={()=>{}} className={`absolute p-2 ${favourite ? "bg-zinc-600" : " bg-amber-600"} cursor-pointer text-white rounded-full text-sm bottom-0 translate-y-[60%] px-3`}>{favourite ? "Added" :"Add to Favourite"}</button>
    </div>
  )
}

export default Card
