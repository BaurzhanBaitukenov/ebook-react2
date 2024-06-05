import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findUserProfile } from '../../../State/User/Action';
import { Card, CardContent, Typography, Grid, CardMedia, Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const Stores = () => {
    return (
        <Grid container className='space-y-5 py-5 pt-20'>
            <Grid container item className='shadow-xl rounded-md p-5'
                sx={{ alignItems: "center", justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex items-center'>
                        <img className='w-[20rem] h-[15rem] object-cover object-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYsfywfieSzgT98SesJvBr6UXfjtj7S0DL9A&usqp=CAU" alt="store-image" />
                        <div className='ml-5 space-y-2'>
                            <p className='font-bold text-lg'>Store "Меломан"</p>
                            <div className='opacity-50 text-xs font-semibold space-x-5'>
                                <span>Location: Astana, Kazakhstan</span>
                                <span>Address: ул. Республика, 17</span>
                                <span>Phone: +7 (701) 761-50-80</span>
                            </div>
                            <p>Opening Hours: 10:00 - 20:00</p>
                            <p>Type: Geek Store</p>
                        </div>
                    </div>
                </Grid>
            </Grid>


            <Grid container item className='shadow-xl rounded-md p-5'
                sx={{ alignItems: "center", justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex items-center'>
                        <img className='w-[20rem] h-[15rem] object-cover object-top' src="https://shopinfo.kz/img/u/640x480/164950.jpg" alt="store-image" />
                        <div className='ml-5 space-y-2'>
                            <p className='font-bold text-lg'>Store "Алматы кітап"</p>
                            <div className='opacity-50 text-xs font-semibold space-x-5'>
                                <span>Location: Astana, Kazakhstan</span>
                                <span>Address: ул. Иманова 10</span>
                                <span>Phone: +7 (701) 761-60-11</span>
                            </div>
                            <p>Opening Hours: 10:00 - 19:00</p>
                            <p>Type: Book Store</p>
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid container item className='shadow-xl rounded-md p-5'
                sx={{ alignItems: "center", justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex items-center'>
                        <img className='w-[20rem] h-[15rem] object-cover object-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1vJB5jP5zmYSWU9RNNqMJNqIborf8HQH9w&usqp=CAU" alt="store-image" />
                        <div className='ml-5 space-y-2'>
                            <p className='font-bold text-lg'>Store "#qazaqbooks"</p>
                            <div className='opacity-50 text-xs font-semibold space-x-5'>
                                <span>Location: Astana, Kazakhstan</span>
                                <span>Address: ул.Сыганак, 60\5</span>
                                <span>Phone: +7 (7172) 330-133</span>
                            </div>
                            <p>Opening Hours: 10:00 - 20:00</p>
                            <p>Type: Book Store</p>
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid container item className='shadow-xl rounded-md p-5'
                sx={{ alignItems: "center", justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex items-center'>
                        <img className='w-[20rem] h-[15rem] object-cover object-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThthugg0RDsysFBpXuNuCgH4uXtHU33n0Hgg&usqp=CAU" alt="store-image" />
                        <div className='ml-5 space-y-2'>
                            <p className='font-bold text-lg'>Store "Дом книги имени Алтынсарина"</p>
                            <div className='opacity-50 text-xs font-semibold space-x-5'>
                                <span>Location: Almaty, Kazakhstan</span>
                                <span>Address: пр. Сейфуллина, 16/1</span>
                                <span>Phone: +7 (727) 351 60 91</span>
                            </div>
                            <p>Opening Hours: 10:00 - 20:00</p>
                            <p>Type: Book Store</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );

};

export default Stores;
