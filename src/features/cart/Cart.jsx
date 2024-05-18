// src/components/cart/Cart.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from './cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="border p-4 mb-2">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p>Price: ${item.price}</p>
                <button onClick={() => handleRemove(item.id)} className="btn">Remove</button>
              </li>
            ))}
          </ul>
          <Link to="/checkout" className="btn mt-4">Proceed to Checkout</Link>
        </>
      )}
    </div>
  );
};

export default Cart;
