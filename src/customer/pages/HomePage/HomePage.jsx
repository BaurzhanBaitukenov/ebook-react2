import React from 'react'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel';
import { book_first } from '../../../Data/book_first';
import { book_bestseller } from '../../../Data/book_bestseller';
import MainCrosel from '../../components/HomeCarosel/MainCrosel';
import Footer from '../../components/Footer/Footer';
import { book_mostpopular } from '../../../Data/book_mostpopular';
import { book_comics } from '../../../Data/book_comics';
import { book_newauthors } from '../../../Data/book_newauthors';

const HomePage = () => {
    return (
        <div>
            <MainCrosel />

            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 border border-gray-300 rounded-lg'>
                <HomeSectionCarosel data={book_bestseller} sectionName={"Bestsellers"} />

                <h1 className="text-center text-4xl lg:text-4xl font-bold my-5">Know all about new books with us!</h1>

                <div className="flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-5 py-10 border border-gray-300 rounded-lg">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGPxTly3SJMvgV9cAKE0fyDn91V9QTEiIiGmSAyTn0Zpo04PLfsqXBykO2s3xCYJTo2OY&usqp=CAU" alt="Bestseller Highlight" className="w-full lg:w-1/2" />
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl font-bold mb-3">Harry Potter and the Cursed Child</h2>
                        <p className="text-lg">
                        “Harry Potter and the Cursed Child” is about the journey Albus takes while growing up, and the roles he and his best friend, Scorpius 
                        (Draco Malfoy's son), play when dark forces, perhaps in league with Voldemort, once again threaten the fate of the planet.
                        </p>
                    </div>
                </div>


                <HomeSectionCarosel data={book_first} sectionName={"New Trend"} />
                <HomeSectionCarosel data={book_mostpopular} sectionName={"Most Popular"} />
                <HomeSectionCarosel data={book_comics} sectionName={"Comics"} />
                <HomeSectionCarosel data={book_newauthors} sectionName={"New Authors"} />
            </div>

            <Footer />
        </div>
    )
}

export default HomePage;