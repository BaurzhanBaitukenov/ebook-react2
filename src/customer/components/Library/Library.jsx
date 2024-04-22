import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import LibraryCard from './LibraryCard'
import { useDispatch, useSelector } from 'react-redux';
import { getOrderHistory } from '../../../State/Order/Action';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Library = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { order } = useSelector(store => store);
    const { products } = useSelector((store) => store);

    useEffect(() => {
        if (jwt !== null) {
            dispatch(getOrderHistory({ jwt }));
        }
    }, [jwt]);

    return (
        <div className="bg-white">
            <div>
                <main className="mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Library</h1>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">


                            {/* Product grid */}
                            <div className="lg:col-span-4 w-full">

                                <div className='flex flex-wrap justify-center bg-white py-5'>
                                    {order.orders?.length > 0 && order.orders?.map((order) => {
                                        return order?.orderItems?.map((item, index, product) => <LibraryCard item={item} order={order} />);
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Library;
