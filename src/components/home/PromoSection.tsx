import React from 'react';
import { Truck, Shield, CreditCard, Clock } from 'lucide-react';

const promos = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $100',
  },
  {
    icon: Shield,
    title: 'Secure Shopping',
    description: '100% secure payment',
  },
  {
    icon: CreditCard,
    title: 'Easy Returns',
    description: '30-day return policy',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Always here to help',
  },
];

export function PromoSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {promos.map(({ icon: Icon, title, description }) => (
        <div key={title} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4 p-3 bg-blue-50 rounded-full">
            <Icon className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      ))}
    </div>
  );
}