import express from 'express';
import { body } from 'express-validator';
import { Product } from '../models/Product.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/',
  authenticate,
  authorize(['admin']),
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('description').trim().notEmpty().withMessage('Description is required'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('category').isIn(['laptops', 'audio', 'cameras', 'tvs', 'phones']).withMessage('Invalid category'),
    body('image').isURL().withMessage('Invalid image URL'),
    validate
  ],
  async (req, res) => {
    try {
      const product = new Product({
        ...req.body,
        createdBy: req.user._id
      });
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }
);

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.put('/:id',
  authenticate,
  authorize(['admin']),
  async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }
);

router.delete('/:id',
  authenticate,
  authorize(['admin']),
  async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }
);

export default router;