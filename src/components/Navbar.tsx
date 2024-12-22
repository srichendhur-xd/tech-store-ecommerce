import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { state } = useCart();
  const { searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();

  const cartItemsCount = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/products${searchQuery ? `?search=${encodeURIComponent(searchQuery)}` : ''}`);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-800">TechStore</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="absolute right-3 top-2.5">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </form>
            
            <Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
            <Link to="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
            <Link to="/auth" className="text-gray-600 hover:text-gray-900">
              <User className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <form onSubmit={handleSearch} className="p-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="absolute right-3 top-2.5">
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </form>
            <Link
              to="/products"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Categories
            </Link>
            <Link
              to="/auth"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Sign In
            </Link>
            <Link
              to="/cart"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Cart ({cartItemsCount})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}