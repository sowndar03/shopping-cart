import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; 
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import ShopcontextProvider from './context/shop-context';
import Favourite from './pages/favourite/Favorite';
import Payment from './pages/Payment';

const App = () => {
  return (
    <div className='App'>
      <ShopcontextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<h1>Sorry!... Page Not Found</h1>}/>
          <Route path="/" element={<Shop />} />
          <Route path="/Favourite" element={<Favourite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>
      </Router>
      </ShopcontextProvider>
      
    </div>
  );
};

export default App;
