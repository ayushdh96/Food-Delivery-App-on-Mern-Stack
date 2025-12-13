import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { listOrders, placeOrder,updateStatus,userOrders, verifyOrder, placeOrderCod } from '../controllers/orderController.js';

const orderRouter = express.Router();

// Order management routes
orderRouter.get("/list",listOrders); // Admin - get all orders
orderRouter.post("/userorders",authMiddleware,userOrders); // Get user's orders
orderRouter.post("/place",authMiddleware,placeOrder); // Place order with Stripe
orderRouter.post("/status",updateStatus); // Admin - update order status
orderRouter.post("/verify",verifyOrder); // Verify Stripe payment
orderRouter.post("/placecod",authMiddleware,placeOrderCod); // Place COD order

export default orderRouter;