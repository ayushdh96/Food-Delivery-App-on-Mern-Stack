# Food Delivery App (MERN)

A full-stack food delivery app built with MongoDB, Express, React (Vite), and Node.js.  
This repo has three parts: **backend API**, **customer frontend**, and **admin panel**.

---

## What’s inside

- **Customer app**: browse items, add to cart, place orders, view order history
- **Admin panel**: add/remove food items, view/manage orders
- **Backend API**: auth, cart, orders, payments, image uploads

---

## Quick Start

> You’ll run 3 servers locally: backend + frontend + admin.

1) Install dependencies + set env
- Follow the setup guide: **`SETUP_GUIDE.md`**

2) Start services

```bash
# Terminal 1
cd backend
npm install
npm run server
```

```bash
# Terminal 2
cd frontend
npm install
npm run dev
```

```bash
# Terminal 3
cd admin
npm install
npm run dev
```

### Local URLs

- Customer app: `http://localhost:5173`
- Admin panel: `http://localhost:5174`
- Backend API: `http://localhost:4000`

---

## Tech Stack

- **Backend**: Node.js, Express, MongoDB (Mongoose), JWT, bcrypt, Multer, Stripe
- **Frontend/Admin**: React + Vite, React Router, Axios, React Toastify

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

## Environment Variables

Create `.env` in `backend/`:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=4000
```

Optional: if backend runs on a different URL, add `.env` in `frontend/` and `admin/`:

```env
VITE_API_URL=http://localhost:4000
```

---

## Scripts

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

- Auth uses JWT stored in localStorage
- Images are stored in `backend/uploads`
- Supports Stripe payments + Cash on Delivery

---

## Support

If something breaks, check:
- all 3 servers are running
- `.env` values are correct
- terminal + browser console logs

For full troubleshooting steps, see **`SETUP_GUIDE.md`**.
