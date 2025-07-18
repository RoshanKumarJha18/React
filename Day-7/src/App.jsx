import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='flex'>
      <Card text="Know More" color="bg-red-600"/>
      <Card  text="Download" color="bg-blue-600"/>
    </div>
  )
}

export default App
