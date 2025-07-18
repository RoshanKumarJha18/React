import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({handleformsubmit}) => {
    const {register,handleSubmit,reset} = useForm()
    const handle = (data)=>{
        handleformsubmit(data)
        reset()
    }
  return (
    <div>
      <form action="" className='flex gap-3' onSubmit={handleSubmit(handle)}>
        <input {...register('name')} className='bg-white rounded-sm outline-none px-2 font-semibold py-1' placeholder='name' type="text" />
        <input {...register('email')} className='bg-white rounded-sm outline-none px-2 font-semibold py-1' placeholder='email' type="text" />
        <input {...register('image')} className='bg-white rounded-sm outline-none px-2 font-semibold py-1' placeholder='img url' type="text" />
        <input className='px-3 py-1 bg-blue-600 rounded-lg cursor-pointer text-white' type="submit" />
      </form>
    </div>
  )
}

export default Form
