import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <Link to={`/product/${product.id}`} className="group h-full">
      <div className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
        <div className="relative pt-[75%]"> {/* 4:3 aspect ratio */}
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col flex-grow p-4">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 line-clamp-2 mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
            <button 
              onClick={handleAddToCart}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}