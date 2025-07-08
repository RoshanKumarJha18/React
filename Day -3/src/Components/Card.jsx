import React from 'react'

function Card() {

    const data =[
        {
            name:"Mahiya Ve",
            description:"this is the descripiton of the song"
        },
        {
            name:"Rihaa",
            description:"this is the descriptoion of the song of arjit singh"
        }
    ]

    const downloadevent = ()=>alert("Your File Have Been Download")

  return (
    <div className='h-screen w-full bg-zinc-300 flex gap-3 flex-col justify-center items-center'>
      {data.map((value, index)=>(
        <div className="h-fit w-[27vw] bg-zinc-100 rounded px-4 py-3">
        <h1 className='font-bold text-lg'>{value.name}</h1>
        <p className='text-sm'>{value.description}</p>
        <button onClick={downloadevent} className='px-3 py-1 bg-blue-600 mt-3 rounded text-amber-50 cursor-pointer'>Download</button>
      </div>
      ))}
    </div>
  )
}

export default Card
