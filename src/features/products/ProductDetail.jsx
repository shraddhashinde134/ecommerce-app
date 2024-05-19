import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../cart/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.products.items.find((item) => item.id === id));
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-auto object-cover" />
        <div>
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p className="mb-4">Category: {product.category}</p>
          <p className="mb-4">Price: ${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <button className="btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
