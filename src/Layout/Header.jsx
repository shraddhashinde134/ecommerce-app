// src/components/Header.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartItemCount } from '../features/cart/cartSlice';

const Header = ({ user }) => {
  const cartItemCount = useSelector(selectCartItemCount);
  

  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">E-Commerce</Link>
      {user && <p>Welcome, {user.username}</p>}
      <nav>
        <Link to="/register" className="mr-4">Register</Link>
        <Link to="/cart" className="relative">
          Cart
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {cartItemCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
