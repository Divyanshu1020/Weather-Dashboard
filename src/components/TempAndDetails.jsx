/* eslint-disable react/prop-types */
import React from 'react'
import { BiSolidDropletHalf } from 'react-icons/bi'
import { FaThermometerEmpty } from 'react-icons/fa'
import { FiWind } from 'react-icons/fi'

export default function TempAndDetails({
    weatherInfo
}) {
    const {
        description,
        feels_like,
        humidity,
        speed,
        temp,
        icon,

    } = weatherInfo
    const verticalDetails = [
        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: "Real Feel",
            value: `${feels_like.toFixed()}°`,
        },

        {
            id: 2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: `${humidity.toFixed()}%`,
        },

        {
            id: 3,
            Icon: FiWind,
            title: "Wind",
            value: `${speed.toFixed()} km/h`,
        }
    ]
    return (
        <div>
            <div className=' text-xl mt-5'>
                {description}
            </div>

            <div className=' flex justify-between items-center'>
                <img className=' h-[90px] sm:h-[140px] sm:p-5' src={icon} alt="" />

                <p className=' text-3xl sm:text-5xl sm:p-5'>{temp.toFixed()}°C</p>


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
