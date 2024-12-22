import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Cart() {
  const { state, dispatch } = useCart();
  
  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      
      {state.items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
          <Link 
            to="/products" 
            className="text-blue-500 hover:text-blue-600"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          {state.items.map((item) => (
            <div key={item.id} className="flex items-center py-4 border-b last:border-b-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                className="ml-4 p-2 text-red-500 hover:text-red-600"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
          <div className="mt-6 flex justify-between items-center">
            <div>
              <p className="text-lg text-gray-600">Total:</p>
              <p className="text-2xl font-bold text-blue-600">
                ${total.toFixed(2)}
              </p>
            </div>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}