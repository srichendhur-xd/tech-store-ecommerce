import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Headphones, Camera, Tv, Smartphone } from 'lucide-react';

const categories = [
  { id: 'laptops', name: 'Laptops', icon: Laptop, description: 'Powerful laptops for work and play' },
  { id: 'audio', name: 'Audio', icon: Headphones, description: 'High-quality audio equipment' },
  { id: 'cameras', name: 'Cameras', icon: Camera, description: 'Professional photography gear' },
  { id: 'tvs', name: 'TVs', icon: Tv, description: 'Smart TVs and home entertainment' },
  { id: 'phones', name: 'Phones', icon: Smartphone, description: 'Latest smartphones and accessories' },
];

export function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(({ id, name, icon: Icon, description }) => (
          <Link
            key={id}
            to={`/products?category=${id}`}
            className="block group"
          >
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Icon className="h-8 w-8 text-blue-500 group-hover:text-blue-600 transition-colors" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">{name}</h2>
              </div>
              <p className="text-gray-600">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}