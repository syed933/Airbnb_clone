import React from 'react'
import Image from 'next/image'

function LargeCard({ img, title, description, buttonText}) {
    return (
        // We'll have text in the center of our image, so need to make the section parent element also relative
        <section className='relative py-16 cursor-pointer'>
            {/* We make sure to set the parent div to relative or else our image will take up the entire screen size */}
            <div className='relative h-96 min-w-[300px]'>
                <Image src={img} 
                fill
                className='object-fit object-cover rounded-2xl '
                />
            </div>
            <div className='absolute top-32 left-12'>
                <h3 className='text-4xl mb-3 w-64'>{title}</h3>
                <p>{description}</p>
                <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
