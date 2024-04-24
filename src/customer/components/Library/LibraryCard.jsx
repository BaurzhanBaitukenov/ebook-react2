import { Button, Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LibraryCard = ({ item, order, product }) => {
    const navigate = useNavigate();

    const handleDownloadClick = (e) => {
        // Остановить всплытие события, чтобы предотвратить переход по ссылке /product/id
        e.stopPropagation();
        // Перенаправить на страницу загрузки
        navigate(`/download`);
    };

    return (
        <div>
            <div onClick={() => navigate(`/product/${item.product?.id}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
                <Grid item xs={6}>
                    <img
                        className="w-[15rem] h-[25rem] object-cover object-left"
                        src={item?.product.imageUrl}
                        alt=""
                    />
                    <div className="ml-5">
                        <p className="mb-2">{item?.product.title}</p>
                        <p className="opacity-80 text-xs font-semibold space-x-5">
                            <span>Author: {item?.product.author}</span>
                        </p>
                        <p className="opacity-80 text-xs font-semibold space-x-5">
                            <span>Language: {item?.language}</span>
                        </p>

                        {/* Используйте handleDownloadClick вместо прямой навигации */}
                        <Button onClick={handleDownloadClick} variant='outlined'>Download</Button>
                    </div>
                </Grid>
            </div>
        </div>
    );
};

export default LibraryCard;
