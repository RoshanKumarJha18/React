import React, { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'

const App = () => {
  const data =[
    {img:"https://imgs.search.brave.com/pTHnQ1mL79yXqaur2NISHTA4-hjlIycRYgCQuRp-GCg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvVmROVzBKTUtv/NS9kTlcwOEE1TVdv/L3NpemVfbS5qcGc",name:"Rihha",artist:"Arjit Singh",favourite:false},
    {img:"https://imgs.search.brave.com/4IDmxwxtmALJx5n24cOJYDfyriPSVnZZ50n8DAUQmYU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFtQ1VFcWZIQUwu/anBn",name:"Dhoom",artist:"Pritam",favourite:false},
    {img:"https://imgs.search.brave.com/qPLhENvoFxgdjzIGFXwBhneUt_H60NIe-52Tm_86fgs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvUno0Vzg3djN4/RC80VzhMODRNdld4/L3NpemVfbS5qcGc",name:"LoveDose",artist:"Honey Singh",favourite:false},
    {img:"https://imgs.search.brave.com/zYGvKzBIV_WlwvuY54eDxhAWz3CzztLfUGU86gitRI0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vbjRGRGtk/WlJlMncwOVNCd3Az/ZEdLTVFJVFZmdnpP/NUZBU2lFdDV0bkl0/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlq/TG5OaC9ZWFp1WTJS/dUxtTnZiUzgxL05U/SXZWVzV6ZEc5d2NH/RmkvYkdVdFJXNW5i/R2x6YUMweS9NREUy/TFRVd01IZzFNREF1/L2FuQm4",name:"Unstoppable",artist:"Sia",favourite:false},
  ]
  const [realData,setRealData] =useState(data)
  const handleClick =(KeyIndex)=>{
    setRealData((prev)=>{
      return prev.map((items,index)=>{
        if(index === KeyIndex){
          return {...items,favourite:!items.favourite}
        }
        return items
      })
    })
  }
  return (
    <div className='h-screen w-full bg-zinc-300'>
      <Navbar val={realData}/>
      <div className="flex">
        {realData.map((items,index)=>{
         return <Card value={items} key={index} KeyIndex={index} handleClick={handleClick}/>
        })}
      </div>
    </div>
  )
}

export default App
