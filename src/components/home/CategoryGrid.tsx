import React from 'react';
import { CategoryCard } from './CategoryCard';
import { categories } from '../../data/categories';

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          id={category.id}
          name={category.name}
          image={category.image}
          color={category.color}
        />
      ))}
    </div>
  );
}