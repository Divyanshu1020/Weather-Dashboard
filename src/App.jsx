import React, { useEffect, useState } from 'react'
import './App.css'
import Forcast from './components/Forcast'
import SearchBox from './components/SearchBox'
import TempAndDetails from './components/TempAndDetails'
import TimeAndDate from './components/TimeAndDate'
import Toggle from './components/Toggle'
import getWheatherInfo from './service/apiConfig'

function App() {

  const [units, setUnits] = useState('metric')
  const [serchParams, setSerchParams] = useState({ q: 'Mumbai' })
  const [weatherInfo, setWeatherInfo] = useState(null)

  console.log(serchParams);

  useEffect(() => {
    const getData = async () => {
      await getWheatherInfo({ ...serchParams, units: 'metric'})
      .then(data => {setWeatherInfo(data) })
    }
    getData()
  }, [units, serchParams])


  return (
    <div className=' sm:flex sm:m-0 sm:min-h-screen  min-w-6  sm:place-items-center '>
      <div className=' relative sm:max-w-[1280px] sm:mx-auto  sm:my-0 text-center sm:border-style p-4 sm:p-8 sm:bg-background' >
        <div className=' flex flex-row  '>
          <SearchBox setSerchParams={setSerchParams} />
          <Toggle />
        </div>


        {weatherInfo ?
          <>
            <TimeAndDate weatherInfo={weatherInfo} />
            <TempAndDetails weatherInfo={weatherInfo} />
            <Forcast title="3 hour forcast" weatherInfo={weatherInfo.hourly} />
            <Forcast title="Daily forcast" weatherInfo={weatherInfo.daily} />
          </>:
          <p className=' flex justify-center items-center text-3xl h-40'>Loading...</p>

        }



      </div>
    </div>
  )
}

export default App
