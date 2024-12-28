import { useState, useMemo } from 'react';
import type { Product } from '../types';

export function useSearch(items: Product[], category?: string) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      if (category) {
        return matchesSearch && item.category === category;
      }
      
      return matchesSearch;
    });
  }, [items, searchQuery, category]);

  return {
    searchQuery,
    setSearchQuery,
    filteredItems
  };
}