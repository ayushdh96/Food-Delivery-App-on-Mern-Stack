import express from 'express';
import { addToCart, getCart, removeFromCart } from '../controllers/cartController.js';
import authMiddleware from '../middleware/auth.js';

const cartRouter = express.Router();

// Cart routes - all require authentication
cartRouter.post("/get",authMiddleware,getCart);
cartRouter.post("/add",authMiddleware,addToCart);
cartRouter.post("/remove",authMiddleware,removeFromCart);

export default cartRouter;