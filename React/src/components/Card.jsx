import React from 'react'

function Card() {

    const data =[
        {image:"https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=896&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",title:"Amazon Bascis",des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, cumque."},
        {image:"https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",title:"Card 2",des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, cumque."},
        {image:"https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=915&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",title:"Card 3",des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, cumque."}
    ]

  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center gap-10">
        {data.map((elem , index)=>(
            <div className=" w-[15vw] h-[18vw] bg-amber-50  rounded-md overflow-hidden">
        <div className="w-full h-[50%]">
            <img className='w-full h-full' src={elem.image} alt="" />
        </div>
        <div className="w-full h-[50%] pt-[1vw] pl-[1vw]">
            <h1 className='font-bold mb-[1vh]'>{elem.title}</h1>
            <p className='text-sm'>{elem.des}</p>
        </div>
        </div>

        ))}
    </div>
  )
}

export default Card
