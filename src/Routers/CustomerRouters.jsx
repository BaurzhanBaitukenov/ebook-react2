import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Footer from '../customer/components/Footer/Footer'
import Navigation from '../customer/components/Navigation/Navigation'
import Product from '../customer/components/Product/Product'
import ProducDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import PaymentSuccess from '../customer/components/Payment/PaymentSuccess'
import UserProfile from '../customer/components/Profile/UserProfile'
import Library from '../customer/components/Library/Library'
import NotFound from '../customer/pages/Notfound'
import Support from '../customer/components/Support/Support'
import RateProduct from '../customer/components/ReviewProduct/RateProduct'
import HomePageCommunication from '../customer/components/Communication/HomePageCommunication/HomePageCommunication'
import ProfileCommunication from '../customer/components/Communication/ProfileCommunication/ProfileCommunication'
import Authentication from '../customer/components/Authentication/Authentication'


const CustomerRouter = () => {
    return (
        <div>
            <div>
            <Navigation/>
            </div>
            <Routes>
            <Route path='/login' element={<Authentication/>}></Route>
            <Route path='/register' element={<Authentication/>}></Route>

                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/profile' element={<UserProfile/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/support' element={<Support/>}></Route>
                <Route path='/library' element={<Library/>}></Route>
                <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
                <Route path='/product/:productId' element={<ProducDetails/>}></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path='/account/order' element={<Order/>}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
                <Route path="/account/rate/:productId" element={<RateProduct />}></Route>
                <Route path='/payment-success' element={<PaymentSuccess />} />
                <Route path="*" element={<NotFound />} />

                {/* Communication */}
                {/* <Route path='/communication' element={<HomePageCommunication/>}></Route>
                <Route path='/communication/profile/:userId' element={<ProfileCommunication/>}></Route> */}

            </Routes>
            <div>
            <Footer/>
            </div>
        </div>
    )
}

export default CustomerRouter