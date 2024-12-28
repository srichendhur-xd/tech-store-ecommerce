import React from 'react';
import { ProductGrid } from './ProductGrid';
import { products } from '../../data/products';

export function FeaturedSection() {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
        Featured Products
      </h2>
      <ProductGrid products={featuredProducts} />
    </div>
  );
}