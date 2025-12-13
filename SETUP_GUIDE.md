# Food Delivery App - Local Setup Guide

This guide will help you set up and run the Food Delivery Application on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community) OR use MongoDB Atlas (cloud)
- **Git** - [Download here](https://git-scm.com/)
- **Stripe Account** - [Sign up here](https://stripe.com/) for payment integration


## Step 2: Backend Setup

### 2.1 Navigate to Backend Directory

```bash
cd backend
```

### 2.2 Install Dependencies

```bash
npm install
```

### 2.3 Configure Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string_here

# JWT Secret Key (use a strong random string)
JWT_SECRET=your_jwt_secret_key_here

# Stripe API Keys
STRIPE_SECRET_KEY=your_stripe_secret_key_here

# Server Port (optional, defaults to 4000)
PORT=4000
```

**How to get these values:**

- **MONGODB_URI**: 
  - For local MongoDB: `mongodb://localhost:27017/food-delivery`
  - For MongoDB Atlas: Get from your Atlas dashboard → Connect → Connect your application
  
- **JWT_SECRET**: 
  - Generate a random string: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
  
- **STRIPE_SECRET_KEY**: 
  - Get from Stripe Dashboard → Developers → API keys → Secret key (starts with `sk_test_` for test mode)

### 2.4 Start the Backend Server

```bash
npm run server
```

The backend server will run on `http://localhost:4000`

---

## Step 3: Frontend Setup

### 3.1 Open a New Terminal and Navigate to Frontend Directory

```bash
cd frontend
```

### 3.2 Install Dependencies

```bash
npm install
```

### 3.3 Configure Environment Variables (Optional)

If your backend runs on a different port, create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=http://localhost:4000
```

### 3.4 Start the Frontend Development Server

```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is busy)

---

## Step 4: Admin Panel Setup

### 4.1 Open a New Terminal and Navigate to Admin Directory

```bash
cd admin
```

### 4.2 Install Dependencies

```bash
npm install
```

### 4.3 Configure Environment Variables (Optional)

If your backend runs on a different port, create a `.env` file in the `admin` directory:

```env
VITE_API_URL=http://localhost:4000
```

### 4.4 Start the Admin Development Server

```bash
npm run dev
```

The admin panel will run on `http://localhost:5174` (or another port if 5174 is busy)

---

## Step 5: Testing the Application

### 5.1 Access the Applications

- **Customer Frontend**: Open `http://localhost:5173` in your browser
- **Admin Panel**: Open `http://localhost:5174` in your browser
- **Backend API**: Running on `http://localhost:4000`

### 5.2 Create an Admin Account

1. Go to the customer frontend (`http://localhost:5173`)
2. Click on "Sign In" and create a new account
3. Use this account to log in to the admin panel

### 5.3 Add Food Items (Admin)

1. Log in to the admin panel
2. Navigate to "Add Items"
3. Fill in the food details and upload an image
4. Click "ADD" to add the item to the database

### 5.4 Place an Order (Customer)

1. Go to the customer frontend
2. Sign in with your account
3. Browse food items and add them to cart
4. Proceed to checkout
5. Fill in delivery details
6. Choose payment method (Stripe or Cash on Delivery)

### 5.5 Manage Orders (Admin)

1. Go to the admin panel
2. Navigate to "Orders"
3. View all customer orders
4. Update order status using the dropdown menu

---

## Step 6: Stripe Test Payments

For testing Stripe payments, use these test card numbers:

- **Successful Payment**: `4242 4242 4242 4242`
- **Expired Card**: `4000 0000 0000 0069`
- **Declined Payment**: `4000 0000 0000 0002`

Use any future expiry date, any 3-digit CVV, and any 5-digit ZIP code.

---

## Troubleshooting

### MongoDB Connection Issues

- Ensure MongoDB is running locally: `mongod`
- Check your MongoDB Atlas IP whitelist if using cloud database
- Verify connection string format is correct

### Port Already in Use

If you get a "port already in use" error:

```bash
# Find and kill the process using the port (e.g., port 4000)
lsof -ti:4000 | xargs kill -9
```

### CORS Errors

- Ensure backend server is running before starting frontend/admin
- Check that the API URL in frontend/admin matches your backend URL

### Image Upload Issues

- Ensure the `uploads` folder exists in the `backend` directory
- Check file permissions on the uploads folder
- Verify Multer is correctly configured in the backend

### Stripe Webhook Issues (Production)

For production deployment, you'll need to:
1. Set up Stripe webhooks in your Stripe dashboard
2. Add webhook endpoint: `https://yourdomain.com/api/order/verify`
3. Update the webhook secret in your backend `.env` file

---

## Project Structure

```
Food-Delivery-App-on-Mern-Stack/
├── backend/          # Express.js API server
├── frontend/         # React customer application
├── admin/            # React admin panel
└── diagrams/         # Mermaid diagrams and documentation
```

---

## Default Scripts

### Backend
```bash
npm run server     # Start backend with nodemon (auto-restart on changes)
```

### Frontend
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

### Admin
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

---

## Additional Notes

- The application uses **JWT tokens** stored in localStorage for authentication
- **Cart data** is synced with the backend for logged-in users
- **Images** are stored in the `backend/uploads` folder
- All **passwords** are hashed using bcrypt before storing in the database
- The app supports both **Stripe payments** and **Cash on Delivery**

---

## Need Help?

If you encounter any issues:
1. Check that all three servers (backend, frontend, admin) are running
2. Verify all environment variables are correctly set
3. Clear browser cache and localStorage
4. Check the browser console and terminal for error messages

---
