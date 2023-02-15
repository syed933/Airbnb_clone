import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function Header() {
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
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                {/* We set the input field back-ground to transparent to remove background white, and remove outline  */}
                {/* We also set flex to grow in our input element so it pushes the search to the end */}
                {/* We want input text to be small and color gray through text-sm and text-gray-600, placeholder gray is set to 400 for contrast */}
                <input className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start your search'/>
                {/* Setting search icon by default to hidden and only showing it in medium screens with inline-flex */}
                {/* On medium screens we need some margin on our search icons through mx-2 */}
                <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
            </div>


            {/* header section right */}
            <div></div>
        </header>
    )
}

export default Header
