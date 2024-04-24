import React from 'react';
import { useNavigate } from 'react-router-dom';




const HomeSectionCard = ({product}) => {
    const navigate = useNavigate();
    return (
    <div onClick={() => navigate(`/books/category/new_trend`)} className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg 
    overflow-hidden w-[15rem] mx-3 border'>

        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src={product.imageUrl} alt="" />

        </div>

        <div className='p-4'>
            <h3 className='text-lg font-medium'>{product.title}</h3>
            <p className='mt-2 text-sm text-gray-500'>Author: {product.author}</p>
            <p className='mt-2 text-sm text-gray-500'>Genre: {product.genre}</p>
        </div>

    </div>    
    )
}

export default HomeSectionCard;