import React from 'react'
import { FaThermometerEmpty } from 'react-icons/fa'

export default function TempAndDetails() {
    const verticalDetails = [

        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: "Humidity",
            value: "23°C",
        },

        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: "Humidity",
            value: "23°C",
        },

        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: "Humidity",
            value: "23°C",
        }
    ]
    return (
        <div>
            <div className=' text-xl mt-5'>
                Rain
            </div>

            <div className=' flex justify-between items-center'>
                <img className=' h-[90px] sm:h-[140px] sm:p-5' src="https://openweathermap.org/img/wn/10d@2x.png" alt="" />

                <p className=' text-3xl sm:text-5xl sm:p-5'>23°C</p>


                <div className=' flex flex-col sm:p-5 '>

                    {
                        verticalDetails.map(({ id, Icon, title, value }) => {
                            return (
                                <div key={id} className=' flex font-light justify-start items-center'>
                                    <div className=' mr-1'><Icon size={18} /></div>
                                    <div>{title} : <span className=' font-medium'>{value}</span></div>
                                </div>
                            )
                        })
                    }



                </div>
            </div>

        </div>
    )
}
