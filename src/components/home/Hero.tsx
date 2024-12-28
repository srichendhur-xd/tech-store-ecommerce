import React from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative bg-gray-900 h-[600px]">
      <img
        src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80"
        alt="Tech devices on desk"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover the Latest in Tech
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Shop the most innovative gadgets and electronics at unbeatable prices
          </p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}