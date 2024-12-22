import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { useSearch } from '../context/SearchContext';

export function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const { searchQuery } = useSearch();

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (category) {
      return matchesSearch && product.category === category;
    }
    
    return matchesSearch;
  });

  const categoryTitle = category 
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : 'All Products';

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{categoryTitle}</h1>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No products found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}