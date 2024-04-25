import { Button, Grid } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react';
import AuthModel from './AuthModel';

const Authentication = () => {
    const [openAuthModel, setOpenAuthModel] = useState(false);
    const handleOpenAuthModel = () => setOpenAuthModel(true);
    const handleCloseAuthModel = () => setOpenAuthModel(false);

    return (
        <div>
            <Grid className='overflow-y-hidden' container>

                <Grid className='hidden lg:block' item lg={7}>

                    <img className='w-full h-screen' src="https://img.freepik.com/premium-photo/cat-sits-desk-front-computer-screen-that-says-cat_779834-1878.jpg"
                        alt="" />

                </Grid>

                <Grid className='px-10' lg={5} xs={12}>

                    <h1 className='mt-10 font-bold text-7xl'>Happening Now</h1>

                    <h1 className='font-bold text-3xl py-16'>Join E-VBook System Today</h1>

                    <div className='w-[60%]'>

                        <div className='w-full'>
                            <GoogleLogin width={330} />
                            <p className='py-5 text-center'>OR</p>

                            <Button onClick={handleOpenAuthModel} fullWidth variant='contained' size='large' sx={{
                                borderRadius: "29px",
                                py: "7px",

                            }}>Create Account</Button>

                            <p className='text-sm mt-2'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                        </div>

                        <div className='mt-10'>
                            <h1 className='font-bold text-xl mb-5'>Already Have Account?</h1>
                            <Button onClick={handleOpenAuthModel} fullWidth variant='outlined' size='large' sx={{
                                borderRadius: "29px",
                                py: "7px",

                            }}>Login</Button>
                        </div>
                    </div>

                </Grid>

            </Grid>
            <AuthModel open={openAuthModel} handleClose={handleCloseAuthModel}/>
        </div>
    );
};

export default Authentication;