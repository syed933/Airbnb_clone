import React from 'react'

function Footer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
            {/* Col 1 */}
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>How Airbnb Works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            {/* Col 2 */}
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p>Travel</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            {/* Col 3 */}
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>HOST</h5>
                <p>Outdoors</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            {/* Col 4 */}
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>SERVICE</h5>
                <p>Accessibility</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
        </div>
    )
}

export default Footer
