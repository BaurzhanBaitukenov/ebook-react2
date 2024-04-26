import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Product from './customer/components/Product/Product';
import ProducDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouter from './Routers/CustomerRouters';
import AdminRouters from './Routers/AdminRouters';
import CommunicationRouters from './Routers/CommunicationRouters';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './State/Auth/Action';
import SigninForm from './customer/components/Authentication/SinginForm';
import { useNavigate } from 'react-router-dom/dist';
function App() {
  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector(store => store)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    if(jwt) {
      dispatch(getUser(jwt))
    }

  },[auth.jwt])

  return (
    <div className="">

      <Routes>
      <Route path='/communication/*' element={<CommunicationRouters />} />
        <Route path='/*' element={<CustomerRouter/>}></Route>
        {auth.user?.role==="ROLE_ADMIN" && <Route path="/admin/*" element={<AdminRouters />} />}
      </Routes>

    </div>
    
    
    
  );
}

export default App;
