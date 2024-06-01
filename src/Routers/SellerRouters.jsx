import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Seller from '../Seller/Seller'

const SellerRouters = () => {
    return (
        <div>
            <Routes>
                <Route path='/*' element={<Seller/>}></Route>
            </Routes>
        </div>
    )
}

export default SellerRouters