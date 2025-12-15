# Food Delivery App – Local Setup Guide

This guide explains how to run the Food Delivery App locally. The project consists of three parts: backend API, customer frontend, and admin panel.

---

## Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local install or MongoDB Atlas)
- Git
- Stripe account (for payment testing)

---

## Backend Setup

### Navigate to backend directory

```bash
cd backend
```

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env` file inside the `backend` folder.

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=4000
```

Notes:
- Local MongoDB example: `mongodb://localhost:27017/food-delivery`
- Use a Stripe test key (`sk_test_...`)
- JWT secret can be any long random string

### Start backend server

```bash
npm run server
```

Backend runs on: `http://localhost:4000`

---

## Frontend Setup (Customer App)

### Navigate to frontend directory

```bash
cd frontend
```

### Install dependencies

```bash
npm install
```

### Environment variables (optional)

Only required if backend runs on a different URL.

```env
VITE_API_URL=http://localhost:4000
```

### Start frontend server

```bash
npm run dev
```

Frontend runs on: `http://localhost:5173`

---

## Admin Panel Setup

### Navigate to admin directory

```bash
cd admin
```

### Install dependencies

```bash
npm install
```

### Environment variables (optional)

```env
VITE_API_URL=http://localhost:4000
```

### Start admin server

```bash
npm run dev
```

Admin panel runs on: `http://localhost:5174`

---

## Using the Application

### Application URLs

- Customer App: `http://localhost:5173`
- Admin Panel: `http://localhost:5174`
- Backend API: `http://localhost:4000`

### Admin account setup

1. Open the customer app
2. Sign up with a new account
3. Use the same credentials to log into the admin panel

### Adding food items (Admin)

1. Log into admin panel
2. Go to Add Items
3. Fill in item details and upload an image
4. Submit to save the item

### Placing an order (Customer)

1. Log into the customer app
2. Add items to cart
3. Proceed to checkout
4. Enter delivery details
5. Choose payment method (Stripe or Cash on Delivery)

### Managing orders (Admin)

1. Open admin panel
2. Go to Orders
3. View and update order status

---

## Stripe Test Cards

Use these cards for testing payments:

- Successful payment: `4242 4242 4242 4242`
- Expired card: `4000 0000 0000 0069`
- Declined payment: `4000 0000 0000 0002`

Use any future expiry date, any CVV, and any ZIP code.

---

## Common Issues

### MongoDB connection issues

- Ensure MongoDB service is running
- Check connection string
- Verify IP whitelist if using Atlas

### Port already in use

```bash
lsof -ti:4000 | xargs kill -9
```

Change the port number if required.

### CORS errors

- Start backend before frontend/admin
- Verify API URL in `.env` files

### Image upload issues

- Ensure `backend/uploads` folder exists
- Check folder permissions
- Verify multer configuration

---

## Project Structure

```
Food-Delivery-App-on-Mern-Stack/
├── backend/
├── frontend/
├── admin/
└── diagrams/
```

---

## Scripts Reference

### Backend

```bash
npm run server
```

### Frontend / Admin

```bash
npm run dev
npm run build
npm run preview
```

---

## Notes

- Authentication uses JWT stored in localStorage
- Passwords are hashed using bcrypt
- Images are stored in `backend/uploads`
- Supports Stripe payments and Cash on Delivery

---

## Help

If something doesn’t work:
- Make sure all servers are running
- Verify environment variables
- Check terminal and browser console logs
- Clear browser cache and localStorage
