import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineFavorite } from 'react-icons/md';
import { useLocalStorage } from '../service/localStorage';

export default function SearchBox({
  setSerchParams
}) {
  const searchInputRef = useRef(null);
  const [isSearchDropdownVisible, setSearchIsDropdownVisible] = useState(false);
  const [isFavoriteCityDropdownVisible, setFavoriteCityDropdownVisible] = useState(false);
  const { setValue, getValue } = useLocalStorage('searchHistory')
  const [searchHistory, setSearchHistory] = useState([]);



  const favoriteCity = () => {
    setFavoriteCityDropdownVisible(!isFavoriteCityDropdownVisible);
  };

  const searchHandleFocus = () => {
    const searchHistory = getValue();
    if (searchHistory) setSearchHistory(getValue());
    setSearchIsDropdownVisible(true);
    setFavoriteCityDropdownVisible(false);
  };

  const searchHandleBlur = () => {
     setSearchIsDropdownVisible(false);
  };
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const handleSearch = (searchInput) => {
    const capitalizedInput = capitalizeFirstLetter(searchInput);
      setSerchParams({ q: capitalizedInput });
      
      searchInputRef.current.value = '';  // Clear the input field
      searchInputRef.current.blur();

      setSearchIsDropdownVisible(false);
      return capitalizedInput
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const searchInput = searchInputRef.current?.value;
    if (searchInput) {
      const capitalizedInput =  handleSearch(searchInput);
      setValue(capitalizedInput);
    }
  };
  const onClick = (e) => {
    setSearchIsDropdownVisible(true)
    handleSearch(e.target.textContent);
  }



  return (
    <div className='  w-3/4 flex flex-row justify-center items-center space-x-4'>
      <div className='relative w-full'>
        <form onSubmit={(e) => { onSubmit(e) }}>
          <input
            type='text'
            ref={searchInputRef}
            onFocus={searchHandleFocus}
            // onBlur={searchHandleBlur}
            className=' text-xl w-full font-light p-2 rounded-lg focus:outline-none capitalize'
            placeholder='search city'
          />
          
          <div id="dropdown" className={` ${isSearchDropdownVisible ? '' : 'hidden'} mt-2 w-full absolute divide-y rounded-lg shadow dark:bg-[#121212]`}>

          {searchHistory.length > 0 && <ul className="py-2 text-sm text-left" >
            {searchHistory.map((item, index) => (
              <li key={index}>
                <a href="#" onClick={(e) => onClick(e)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item}</a>
              </li>
            ))}
          </ul>}
        </div>
        </form>

        <p onClick={()=> { searchInputRef.current.value = ''; setSearchIsDropdownVisible(false)}} className=' text-xl absolute top-2  cursor-pointer right-3'>X</p>

        
      </div>


      {/* <MdMyLocation size={30} className=' font-thin transition ease-in-out hover:scale-110 cu' /> */}

      {/* <MdOutlineFavorite size={35} onClick={favoriteCity} className=' font-thin transition cursor-pointer ease-in-out hover:scale-110 cu ' /> */}

      <div id="dropdown" className={` ${isFavoriteCityDropdownVisible ? '' : 'hidden'} z-10 top-[3.5rem] sm:top-[4.5rem] sm:right-[2rem] right-[1rem]   mt-2 w-full-minus-1rem sm:w-full-minus-2rem absolute divide-y rounded-lg shadow dark:bg-[#121212]`}>
        <ul className="py-2 text-sm text-left" aria-labelledby="dropdownDefaultButton">
          <li>
            <button className='block w-full bg-red-600 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Action</button>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
    </div>
  )
}


