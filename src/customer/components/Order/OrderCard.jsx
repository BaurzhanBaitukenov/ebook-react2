import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>

                <Grid item xs={6}>

                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[7rem] object-cover object-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEGAShKWveqPu7tPYoTdhcVNJz7ILJTtviQ&usqp=CAU" alt="" />

                        <div className='ml-5 space-y-2'>

                            <p className=''>Harry Potter</p>
                            <p className='opacity-50 text-xs font-semibold'>Author: J K Rowling</p>
                            <p className='opacity-50 text-xs font-semibold'>Language: KZ</p>
                            <p className='opacity-50 text-xs font-semibold'>Genre: Fantasy</p>
                        </div>
                    </div>

                </Grid>

                <Grid item xs={2}>
                    <p>T500</p>
                </Grid>

                <Grid item xs={4}>
                    {true && <div>
                        <p>
                            <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2 txt-sm' />
                            <span>
                                Delivered On April 06
                            </span>
                        </p>
                        <p className='text-xs'>
                            Your Item Has Been Delivered
                        </p>
                    </div>}
                    {false && <p>
                        <span>
                            Expected Delivery On April 10
                        </span>
                    </p>}
                </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard