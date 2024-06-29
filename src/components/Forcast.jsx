/* eslint-disable react/prop-types */
import React from 'react'

export default function Forcast({
    title,
    weatherInfo
}) {
    
  return (
    <div>
        <div className=' flex flex-row justify-start items-center'>
            <p className=' font-medium uppercase'>{title}</p>
        </div>

        <div className='h-[1px] sm:h-[2px] bg-[#292524]'></div>

        <div className='flex flex-row justify-between items-center'>
            {
                weatherInfo.map((item, index)=>{
                return(
                    <div key={index} className='flex flex-col justify-center items-center'>
                        {item.title}
                        <img className=' w-12' src={item.icon} alt="" />

                        <p className=' font-light '>{item.temp.toFixed()}°C</p>

                    </div>
                )
                })
            }
        </div>

        
    </div>
  )
}
