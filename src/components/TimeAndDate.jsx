/* eslint-disable react/prop-types */
import React from 'react'

export default function TimeAndDate({
  weatherInfo
}) {
  const {localTime, name, country} = weatherInfo
  return (
    <div className=' mt-3'>
        <p className=' font-extralight'>{localTime}</p>
        <p className=' text-2xl'>{name}, {country}</p>
    </div>
  )
}
