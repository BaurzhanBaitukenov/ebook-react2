import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import {Box, Grid} from '@mui/material'
import {deepPurple} from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import OrderTracker from './OrderTracker'

const OrderDetails = () => {
    return (
        <div className='px:5 lg:px-20'>
            <div>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AdressCard/>
            </div>

            <div className='py-20'>
                <OrderTracker activeStep={3}/>
            </div>

            <Grid className='space-y-5' container>
                {[1, 1, 1, 1].map((item) => <Grid item container className='shadow-xl rounded-md p-5 border' sx=
                    {{alignItems: "center", justifyContent: "space-between"}}>

                    <Grid item xs={6}>

                        <div className='flex items-center space-x-4'>
                            <img className='w-[5rem] h-[7rem] object-cover object-top'
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRue63ZP_bxrNBTriTJieyEfDEfiOF6td2ukA&usqp=CAU"
                                 alt=""/>

                            <div className='space-y-2 ml-5'>
                                <p className='font-semibold'>Harry Potter</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'>Author: J K Rowling</p>

                                <p className='space-x-5 opacity-50 text-xs font-semibold'> 
                                <span>Genre: Fantasy</span> 
                                <span>Language: KZ</span>
                                </p>

                                <p>₸199312</p>
                            </div>
                        </div>

                    </Grid>

                    <Grid item>

                        <Box sx={{color: deepPurple[500]}}>

                            <StarBorderIcon sx={{fontSize: "2rem"}} className='px-2'/>
                            <span>Rate & Review Product</span>
                        </Box>

                    </Grid>

                </Grid>)}


            </Grid>

        </div>
    )
}

export default OrderDetails