import React from 'react';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Laptop, Headphones, Camera, Tv, Smartphone } from 'lucide-react';

export function Home() {
  const categories = [
    { icon: Laptop, name: 'Laptops' },
    { icon: Headphones, name: 'Audio' },
    { icon: Camera, name: 'Cameras' },
    { icon: Tv, name: 'TVs' },
    { icon: Smartphone, name: 'Phones' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to TechStore
          </h1>
          <p className="text-xl text-gray-600">
            Discover the latest in electronics and technology
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {categories.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <Icon className="h-8 w-8 text-blue-500 mb-2" />
              <span className="text-gray-700 font-medium">{name}</span>
            </div>
          ))}
        </div>

        <FeaturedProducts />
      </section>
    </div>
  );
}