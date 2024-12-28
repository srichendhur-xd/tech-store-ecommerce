import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  color: string;
}

export function CategoryCard({ id, name, image, color }: CategoryCardProps) {
  return (
    <Link
      to={`/products?category=${id}`}
      className="group relative overflow-hidden rounded-2xl aspect-square"
    >
      <img 
        src={image} 
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
      <div 
        className={`absolute inset-0 bg-gradient-to-t ${color} via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity`} 
      />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <span className="text-lg font-semibold text-white">{name}</span>
      </div>
    </Link>
  );
}