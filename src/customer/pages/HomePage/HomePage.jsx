import React from 'react'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel';
import { book_first } from '../../../Data/book_first';
import MainCrosel from '../../components/HomeCarosel/MainCrosel';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
    return (
        <div>
            <MainCrosel/>

            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarosel data={book_first} sectionName={"Bestsellers"}/>
                <HomeSectionCarosel data={book_first} sectionName={"New Trend"}/>
                <HomeSectionCarosel data={book_first} sectionName={"Most Popular"}/>
                <HomeSectionCarosel data={book_first} sectionName={"Comics"}/>
                <HomeSectionCarosel data={book_first} sectionName={"New Authors"}/>
            </div>

            <Footer/>
        </div>
    )
}

export default HomePage;