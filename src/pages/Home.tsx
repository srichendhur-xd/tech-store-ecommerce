import React from 'react';
import { Hero } from '../components/home/Hero';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { FeaturedSection } from '../components/home/FeaturedSection';
import { PromoSection } from '../components/home/PromoSection';

export function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4">
        <section className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Shop by Category
          </h2>
          <CategoryGrid />
        </section>

        <section className="py-12">
          <FeaturedSection />
        </section>

        <section className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Why Choose Us
          </h2>
          <PromoSection />
        </section>
      </div>
    </div>
  );
}