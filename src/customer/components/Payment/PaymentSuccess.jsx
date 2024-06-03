import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { getOrderById } from '../../../State/Order/Action';
import { updatePayment } from '../../../State/Payment/Action';
import { Alert, AlertTitle, Grid } from '@mui/material';
import OrderTracker from '../Order/OrderTracker';
import AdressCard from '../AdressCard/AdressCard';

const PaymentSuccess = () => {
    const { orderId } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const { order } = useSelector(store => store);
    const [paymentId, setPaymentId] = useState('');

    useEffect(() => {
        console.log("Order ID:", orderId);
        console.log("Payment ID:", paymentId);
    }, [orderId, paymentId]);

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        setPaymentId(urlParams.get("paymentId")); // Извлекаем paymentId из параметров URL
    }, [location.search]);

    useEffect(() => {
        if (paymentId && orderId) {
            const data = { orderId, paymentId };
            dispatch(getOrderById(orderId));
            dispatch(updatePayment(data));
        }
    }, [orderId, paymentId]);

    console.log("Order from Redux store:", order);
    return (
        <div className='px-2 lg:px-36'>
            <div className='flex flex-col justify-center items-center'>
                <Alert
                    variant='filled'
                    severity='success'
                    sx={{ mb: 6, width: "fit-content" }}
                >
                    <AlertTitle>Payment Success</AlertTitle>
                    Congratulation Your Order Get Placed
                </Alert>
            </div>

            <OrderTracker activeStep={1} />

            <Grid container className='space-y-5 py-5 pt-20'>
                {order.order && order.order.orderItems.map((item, index) => (
                    <Grid key={index} container item className='shadow-xl rounded-md p-5'
                        sx={{ alignItems: "center", justifyContent: "space-between" }}
                    >
                        <Grid item xs={6}>
                            <div className='flex items-center'>
                                <img className='w-[5rem] h-[8rem] object-cover object-top' src={item.product.imageUrl} alt="" />
                                <div className='ml-5 space-y-2'>
                                    <p>{item.product.title}</p>
                                    <div className='opacity-50 text-xs font-semibold space-x-5'>
                                        <span>Genre: {item.genre}</span>
                                        <span>Language: {item.language}</span>
                                    </div>
                                    <p>Author: {item.product.author}</p>
                                    <p>Quantity: {item.product.quantity}</p>
                                    <p>Price: ₸{item.price}</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item>
                            <AdressCard address={order.order?.shippingAddress} />
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default PaymentSuccess;
