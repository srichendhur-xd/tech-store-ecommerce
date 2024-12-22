export const products = [
  // Audio Category
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    category: 'audio',
    featured: true
  },
  {
    id: '2',
    name: 'Portable Bluetooth Speaker',
    description: 'Waterproof portable speaker with 24-hour battery life',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1',
    category: 'audio',
    featured: false
  },

  // TV Category
  {
    id: '3',
    name: 'Ultra HD Smart TV',
    description: '65" 4K Smart TV with HDR',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6',
    category: 'tvs',
    featured: true
  },
  {
    id: '4',
    name: 'OLED Gaming TV',
    description: '55" OLED TV with 120Hz refresh rate',
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6',
    category: 'tvs',
    featured: false
  },

  // Cameras Category
  {
    id: '5',
    name: 'Professional Camera',
    description: 'Mirrorless digital camera with 4K video',
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    category: 'cameras',
    featured: true
  },
  {
    id: '6',
    name: 'Action Camera',
    description: 'Waterproof 4K action camera with stabilization',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
    category: 'cameras',
    featured: false
  },

  // Laptops Category
  {
    id: '7',
    name: 'Gaming Laptop',
    description: '15.6" Gaming Laptop with RTX 4070',
    price: 1799.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    category: 'laptops',
    featured: true
  },
  {
    id: '8',
    name: 'Ultrabook',
    description: '13" Lightweight laptop for productivity',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef',
    category: 'laptops',
    featured: false
  },

  // Phones Category
  {
    id: '9',
    name: 'Flagship Smartphone',
    description: 'Latest smartphone with pro camera system',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
    category: 'phones',
    featured: true
  },
  {
    id: '10',
    name: 'Budget Smartphone',
    description: 'Great value smartphone with good features',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd',
    category: 'phones',
    featured: false
  }
] as const;