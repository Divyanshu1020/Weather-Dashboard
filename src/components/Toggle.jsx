import React from 'react'

export default function Toggle() {
  return (
    <div className=' w-1/4 flex flex-row justify-center items-center'>
        <button className=' flex justify-evenly items-center  text-2xl font-medium transition ease-in-out hover:scale-110'>°C <p className=' text-4xl'> / </p> °F</button>
    </div>
  )
}
