// src/components/product/ProductDetail.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from './productSlice';
import { addToCart } from '../cart/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.items.find((item) => item.id === Number(id)));
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full md:w-1/2 object-contain mb-4 md:mb-0" 
          style={{ maxHeight: '300px' }} 
        />
        <div className="md:ml-4">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl mb-4">Price: ${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <button onClick={handleAddToCart} className="btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
