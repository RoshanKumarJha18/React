import React from 'react'

const Navbar = ({val}) => {
  return (
    <div className='w-full h-16 flex justify-between items-center p-9'>
      <h1 className='text-black-400 font-bold '>Orange</h1>
      <div className="p-1 px-2 text-white rounded-md bg-orange-500 gap-2 cursor-pointer flex justify-center items-center">
        <h1>Favourite</h1>
        <h2>{val.filter((items,index)=>items.favourite).length}</h2>
      </div>
    </div>
  )
}

export default Navbar
