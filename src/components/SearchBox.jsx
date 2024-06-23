import React from 'react'
import { MdMyLocation } from 'react-icons/md'

export default function SearchBox() {
  return (
    <div className=' w-3/4 flex flex-row justify-center items-center space-x-4'>

      <input
        type='text'
        className=' text-xl w-full  font-light p-2 rounded-lg focus:outline-none capitalize'
        placeholder='search city'
      />

      <MdMyLocation size={30} className=' font-thin transition ease-in-out hover:scale-110 cursor-pointer' />

    </div>
  )
}
