import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ReviewForm } from '../components/reviews/ReviewForm';
import { ReviewList } from '../components/reviews/ReviewList';
import { StarRating } from '../components/reviews/StarRating';

// Mock reviews data - replace with actual data in production
const mockReviews = [
  {
    id: '1',
    productId: '1',
    rating: 5,
    comment: 'Great product! Exactly what I was looking for.',
    date: '2024-03-15',
    userId: 'user1',
    userName: 'John Doe'
  },
  {
    id: '2',
    productId: '1',
    rating: 4,
    comment: 'Good quality but a bit pricey.',
    date: '2024-03-14',
    userId: 'user2',
    userName: 'Jane Smith'
  }
];

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [sortBy, setSortBy] = useState<'recent' | 'rating'>('recent');
  const product = products.find(p => p.id === id);

  const handleAddToCart = () => {
    if (product) {
      dispatch({ type: 'ADD_ITEM', payload: product });
    }
  };

  const handleReviewSubmit = (review: { rating: number; comment: string; images?: FileList }) => {
    // Handle review submission - implement actual logic in production
    console.log('New review:', review);
  };

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="rounded-lg overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <StarRating rating={product.rating} />
            <span className="ml-2 text-sm text-gray-600">
              ({product.reviewCount} reviews)
            </span>
          </div>
          <p className="text-xl text-gray-600 mb-6">{product.description}</p>
          <p className="text-3xl font-bold text-blue-600 mb-6">
            ${product.price.toFixed(2)}
          </p>
          <button 
            onClick={handleAddToCart}
            className="flex items-center justify-center w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Write a Review</h2>
          <ReviewForm onSubmit={handleReviewSubmit} />
        </div>
        <div>
          <ReviewList 
            reviews={mockReviews}
            sortBy={sortBy}
            onSort={setSortBy}
          />
        </div>
      </div>
    </div>
  );
}