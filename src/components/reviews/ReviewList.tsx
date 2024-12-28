import React from 'react';
import { StarRating } from './StarRating';
import type { Review } from '../../types';

interface ReviewListProps {
  reviews: Review[];
  sortBy: 'recent' | 'rating';
  onSort: (sort: 'recent' | 'rating') => void;
}

export function ReviewList({ reviews, sortBy, onSort }: ReviewListProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">
          Customer Reviews ({reviews.length})
        </h3>
        <select
          value={sortBy}
          onChange={(e) => onSort(e.target.value as 'recent' | 'rating')}
          className="px-3 py-1 rounded-lg border border-gray-300 bg-white text-gray-900"
        >
          <option value="recent">Most Recent</option>
          <option value="rating">Highest Rating</option>
        </select>
      </div>

      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white rounded-lg p-4 shadow-sm"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <StarRating rating={review.rating} />
              <span className="ml-2 text-gray-600">
                {review.userName}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </div>

          <p className="text-gray-700 mt-2">{review.comment}</p>

          {review.images && review.images.length > 0 && (
            <div className="mt-4 flex gap-2 overflow-x-auto">
              {review.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Review image ${index + 1}`}
                  className="h-20 w-20 object-cover rounded-lg"
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}