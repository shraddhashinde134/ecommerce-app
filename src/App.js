
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductList from './features/products/ProductList';
import ProductDetail from './features/products/ProductDetail';

import Checkout from './features/checkout/Checkout';
import { Provider } from 'react-redux';
import store from './app/store';
import Cart from './features/cart/Cart';

import OrderConfirmation from './features/checkout/OrderConfirmation';
import Register from './registration/Register';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { useState } from 'react';

function App() {
  

  return (
    <>
    <Provider store={store}>
      <Router>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/register" element={<Register  />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>

    </>
  );
}

export default App;
