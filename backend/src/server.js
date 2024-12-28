import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { corsOptions } from './config/corsConfig.js';
import { connectDB } from './config/database.js';
import { handleErrors } from './utils/errorHandler.js';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';

// Load environment variables
dotenv.config();

// Initialize express
const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Connect to database
try {
  await connectDB();
} catch (error) {
  console.error('Failed to connect to database:', error);
  process.exit(1);
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Error handling
app.use(handleErrors);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle unhandled rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});