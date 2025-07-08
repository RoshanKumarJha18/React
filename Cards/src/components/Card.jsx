import React from 'react'

function Card() {

    const data =[
        {image:"https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=896&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"Amazon Bascis",
        des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, cumque.",
        InStock:true
        },
        {image:"https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"Apple",
        des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, cumque.",
        InStock:false
        },
        {image:"https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=915&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"BMW",
        des:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, cumque.",
        InStock:false
        }
    ]

  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center gap-10">
        {data.map((elem , index)=>(
            <div className=" w-[15vw] h-fit bg-amber-50  rounded-md overflow-hidden">
        <div className="w-full h-[50%]">
            <img className='w-full h-full' src={elem.image} alt="" />
        </div>
        <div className="w-full h-[50%] pt-[1vw] pl-[1vw]">
            <h1 className='font-bold mb-[1vh]'>{elem.title}</h1>
            <p className='text-sm'>{elem.des}</p>
            <button className={`px-4 py-2 ${elem.InStock ? 'bg-blue-600' : 'bg-red-600'} text-sm text-amber-50 mt-3 mb-3 rounded cursor-pointer`}>
                {elem.InStock ? "In Stock" : "Out OF Stock"}
                </button>
        </div>
        </div>

        ))}
    </div>
  )
}

export default Card
