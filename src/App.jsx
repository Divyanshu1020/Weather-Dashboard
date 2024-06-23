import React from 'react'
import './App.css'
import SearchBox from './components/SearchBox'
import TempAndDetails from './components/TempAndDetails'
import TimeAndDate from './components/TimeAndDate'
import Toggle from './components/Toggle'
import Forcast from './components/Forcast'

function App() {

  return (
    <div className=' sm:flex sm:m-0 sm:min-h-screen  min-w-6  sm:place-items-center '>
      <div className=' sm:max-w-[1280px] sm:mx-auto  sm:my-0 text-center sm:border-style p-4 sm:p-8 sm:bg-background' >
        <div className=' flex flex-row'>
          <SearchBox />
          <Toggle />
        </div>

        <TimeAndDate />
        <TempAndDetails />
        <Forcast/>
        <Forcast/>


      </div>
    </div>
  )
}

export default App
