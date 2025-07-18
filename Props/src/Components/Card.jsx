import React from 'react'

const Card = ({value,handleClick,keyIndex}) => {
    const {name, proffesion, image, friends} = value;
  return (
    <div className='w-56 h-64 bg-sky-100 rounded-lg overflow-hidden' >
      <div className="h-[50%] w-full ">
        <img className='h-full w-full object-cover object-center' src={image} alt="" />
      </div>
      <div className="h-[50%] w-full  p-5  " >
        <h1 className='text-2xl font-bold mb-1'>{name}</h1>
        <h3 className='text-sm mb-2'>{proffesion}</h3>
        <button onClick={()=>handleClick(keyIndex)} className={`px-3 py-1 rounded-lg ${friends ? "bg-green-600" :"bg-blue-600"} text-white cursor-pointer`}>{friends ? "Friends" : "Add Friend"}</button>
      </div>

    </div>
  )
}

export default Card
