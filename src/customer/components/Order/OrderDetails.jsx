import React, { useEffect } from 'react'
import AdressCard from '../AdressCard/AdressCard'
import { Box, Button, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import OrderTracker from './OrderTracker'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrderById } from '../../../State/Order/Action';

const OrderDetails = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { orderId } = useParams();
    const { order } = useSelector((store) => store);

    console.log("order", order.order);

    useEffect(() => {
        dispatch(getOrderById(orderId));
    }, []);

    const navigate = useNavigate();
    return (
        <div className='px:5 lg:px-20'>
            <div>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <Grid item xs={6}>
                    <AdressCard address={order.order?.shippingAddress} />
                </Grid>
            </div>

            <Grid item xs={9}>
                <OrderTracker
                    activeStep={
                        order.order
                            ? order.order?.orderStatus === "PLACED"
                                ? 1
                                : order.order?.orderStatus === "CONFIRMED"
                                    ? 2
                                    : order.order?.orderStatus === "SHIPPED"
                                        ? 3
                                        : order.order?.orderStatus === "PENDING"
                                            ? 1
                                            : 5
                            : 1 // Если order.order не определен, устанавливаем значение "PLACED"
                    }
                />


            </Grid>

            <Grid className='space-y-5' container>
                {order.order?.orderItems.map((item) => <Grid item container className='shadow-xl rounded-md p-5 border' sx=
                    {{ alignItems: "center", justifyContent: "space-between" }}>

                    <Grid item xs={6}>

                        <div className='flex items-center space-x-4'>
                            <img className='w-[5rem] h-[7rem] object-cover object-top'
                                src={item.product.imageUrl}
                                alt="" />

                            <div className='space-y-2 ml-5'>
                                <p className='font-semibold'>{item.product.title}</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'>Author: {item.product.author}</p>

                                <p className='space-x-5 opacity-50 text-xs font-semibold'>
                                    <span>Genre: {item.product.genre}</span>
                                    <span>Language: {item.product.language}</span>
                                </p>

                                <p>₸{item.product.price}</p>
                            </div>
                        </div>

                    </Grid>

                    <Grid item>
                        {order.order?.orderStatus === "DELIVERED" && <Button sx={{ color: "" }} color="error" variant="text" >
                            RETURN
                        </Button>}

                        {order.order?.orderStatus !== "DELIVERED" && <Button sx={{ color: deepPurple[500] }} variant="text">
                            cancel order
                        </Button>}
                    </Grid>

                    <Grid item>

                        <Box sx={{ color: deepPurple[500] }}>

                            <StarBorderIcon sx={{ fontSize: "2rem" }} className='px-2' />
                            <span>Rate & Review Product</span>
                        </Box>

                    </Grid>

                </Grid>)}


            </Grid>

        </div>
    )
}

export default OrderDetails