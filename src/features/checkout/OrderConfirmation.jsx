// src/components/checkout/OrderConfirmation.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
      <p>Thank you for your purchase! Your order has been placed successfully.</p>
      <button onClick={handleContinueShopping} className="btn mt-4">Continue Shopping</button>
    </div>
  );
};

export default OrderConfirmation;
