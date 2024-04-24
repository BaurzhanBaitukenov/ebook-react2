import { Grid } from '@mui/material';
import React from 'react';
import NavigationCommunication from '../NavigationCommunication/NavigationCommunication';
import HomeSectionCommunication from '../HomeSectionCommunication/HomeSectionCommunication';
import RightPartCommunication from '../RightPartCommunication/RightPartCommunication';
import { Route, Routes } from 'react-router-dom';
import ProfileCommunication from '../ProfileCommunication/ProfileCommunication';
import TwitDetails from '../TwitDetails/TwitDetails';

const HomePageCommunication = () => {
    return (
        <div>
            <Grid container className='px-5 lg:px-36 justify-between'>
                <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
                    <NavigationCommunication/>
                </Grid>

                <Grid item xs={12} lg={6} className='px-5 lg:px-9 hidden lg:block w-full relative'>
                    <Routes>
                        <Route path='/' element={<HomeSectionCommunication/>}></Route>
                        <Route path='/profile/:userId' element={<ProfileCommunication/>}></Route>
                        <Route path='/twit/:id' element={<TwitDetails/>}></Route>
                    </Routes>
                    
                </Grid>

                <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
                    <RightPartCommunication/>
                </Grid>
            </Grid>
        </div>
    );
};

export default HomePageCommunication;
