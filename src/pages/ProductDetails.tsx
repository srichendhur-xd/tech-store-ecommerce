import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { ShoppingCart } from 'lucide-react';

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-xl text-gray-600">Product not found</p>
        <button 
          onClick={() => navigate('/products')}
          className="mt-4 text-blue-500 hover:text-blue-600"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{product.description}</p>
          <p className="text-3xl font-bold text-blue-600 mb-6">
            ${product.price.toFixed(2)}
          </p>
          <button className="flex items-center justify-center w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}