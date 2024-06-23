import React from 'react'

export default function Forcast() {
    const data = [4,5,5,6,4];
  return (
    <div>
        <div className=' flex flex-row justify-start items-center'>
            <p className=' font-medium uppercase'>Tomorrow</p>
        </div>

        <div className='h-[1px] sm:h-[2px] bg-[#292524]'></div>

        <div className='flex flex-row justify-between items-center'>
            {
                data.map((item, index)=>{
                return(
                    <div key={index} className='flex flex-col justify-center items-center'>

                        
                        wev
                        <img className=' w-12' src="https://openweathermap.org/img/wn/10d@2x.png" alt="" />

                        <p className=' font-light '>23°C</p>

                    </div>
                )
                })
            }
        </div>

        
    </div>
  )
}
