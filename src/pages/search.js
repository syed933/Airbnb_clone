import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import InfoCard from 'components/InfoCard'



function Search({ searchResults }) {

    const router = useRouter();


    //Destructuring our useRouter object
    const { location, startDate, endDate, noOfGuests } = router.query;

    //Formatting our start and end date of the stay
    const formattedStartDate = format(new Date(startDate), "MMMM dd, yyyy");
    const formattedEndDate = format(new Date(endDate), "MMMM dd, yyyy");

    const range = `${formattedStartDate} - ${formattedEndDate}`


    return (
        // Having the main div set to h-screen will make the page able to scroll  
        <div className='h-screen'>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays | {range} | {noOfGuests} guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                    <div className='flex hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='searchPageButton' >Cancellation Flexibility</p>
                        <p className='searchPageButton' >Type of place</p>
                        <p className='searchPageButton' >Price</p>
                        <p className='searchPageButton' >Rooms and Beds</p>
                        <p className='searchPageButton' >More filters</p>
                    </div>
                    <div className='flex flex-col'>
                        {/* After mapping through each item we need to use parenthesis not curly braces to return a jsx object */}
                        {searchResults.map(
                            ( {img, location, title, description, star, price, total}
                            ) => (
                            <InfoCard
                                key={img} 
                                img ={img}
                                location ={location}
                                title ={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search

// Using server side rendering
//We don't need context in our parameter since we have dummy data from an api 
export async function getServerSideProps() {
    const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS')
    .then(
        (res) => res.json()
        );
    return {
        props: {
            searchResults,
        },
    };
}