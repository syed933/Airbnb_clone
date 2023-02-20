import React, { useState } from 'react'
import Image from 'next/image'
import { 
    MagnifyingGlassIcon,
    Bars3Icon,
    GlobeAltIcon,
    UserCircleIcon,
    UsersIcon,

} from '@heroicons/react/24/solid'

// Imports styles for react-date-range picker
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file 
//React-date-range picker
import { DateRangePicker } from 'react-date-range';


function Header() {

    //Building the Search feature below using useState
    //Inside our useState goes the initial value, but here its an empty string 
    const [searchInput, setSearchInput] = useState('');

    //We're creating two instances of state for startDate and endDate for our date picker
    // Start date will be today's date
    const[startDate, setStartDate] = useState(new Date());
    const[endDate, setEndDate] = useState(new Date());

    //Selection range for date picker
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    // This is our function that allows users to pick a start and end date
    // The ranges parameter is give to us by the get-date-range in property
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }



    return (
        // main header container
        //Tailwind is Mobile first, so we'll adjust our breakpoint media queries for larger screens,for example medium screens will have padding 10px as md:px-10
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            {/* header section left for Logo*/}
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image 
                   src='https://links.papareact.com/qd3'
                   fill
                   className="object-contain object-left"
                />
            </div>

            {/* header section middle, for the search section, using hero-icons */}
            {/* Only apply the border on search in medium size screen */}
            {/* On medium screens we also set shadow to small */}
            {/* --- We connect our useState to the input here --- */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                {/* We set the input field back-ground to transparent to remove background white, and remove outline  */}
                {/* We also set flex to grow in our input element so it pushes the search to the end */}
                {/* We want input text to be small and color gray through text-sm and text-gray-600, placeholder gray is set to 400 for contrast */}
                <input className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start your search'
                // --- The value from useState goes here inside our input ---
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                //With onChange we're mapping our keypress inside the search value through e.target.value  
                />
                {/* Setting search icon by default to hidden and only showing it in medium screens with inline-flex */}
                {/* On medium screens we need some margin on our search icons through mx-2 */}
                <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
            </div>


            {/* header section right */}
            {/* In tailwind to have spaces after every component in a div use space-x-4 */}
            <div className='flex items-center justify-end space-x-4 text-gray-500'>
                {/* Hide "become a guest" on small mobile screens, so on medium screens make it inline md:inline, but default should be hidden  */}
                <p className='hidden md:inline'>Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <Bars3Icon className='h-6 cursor-pointer' />
                    <UserCircleIcon className='h-6 cursor-pointer' />
                </div>
            </div>

            {/* --- Our Calendar Goes here */}
            {/* --- Only show calendar if search input has value, if searchInput is truthy && then show h1 */}
            {/* --- Below we also have our react-date-range picker in our div */}

            {searchInput &&
               <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
               </div>
            }       

        </header>
    )
}

export default Header
