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
function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CustomerRouter/>}></Route>
        <Route path='/admin/*' element={<AdminRouters/>}></Route>
      </Routes>

    </div>
    
    
    
  );
}

export default App;
