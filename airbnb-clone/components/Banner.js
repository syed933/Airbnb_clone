import React from 'react'
import Image from 'next/image'

function Banner() {
    return (
        // We make the banner picture relative, which means there needs to be a height required 
        //Default height is 300px
        //Small Screen height is 300px
        //Large Screen height is 500px
        //XL screen height is 600px
        //2XL screen height is going to be 700px
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]
        3xl:h-[800px] 4xl:h-[900px] 5xl:h-[1000px] 6xl:h-[1100px]'>
           <Image 
            src='https://links.papareact.com/0fm'
            fill
            className="object-cover"
           />
           {/* We want the text below to be in the middle of the page so we position it absolute, and we can do this because the parent div is relative, and then we position this element accordingly */}
           <div className='absolute top-1/2 w-full text-center'>
                {/* We make sure the text is smaller by default, and from small screens through large they're text-lg  */}
               <p className='text-sm sm:text-lg'>Not sure where to go?</p>
               <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-4
               hover:shadow-xl active:scale-90 transition duration-150'>I'm flexible</button>
           </div>

        </div>
    )
}

export default Banner
