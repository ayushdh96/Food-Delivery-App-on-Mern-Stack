# Food Delivery App - MERN Stack

A full-stack food delivery application built using the MERN (MongoDB, Express, React, Node.js) stack with separate frontend, backend, and admin panel.

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Backend Architecture](#backend-architecture)
- [Frontend Architecture](#frontend-architecture)
- [Admin Panel Architecture](#admin-panel-architecture)
- [Application Flow](#application-flow)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Setup and Installation](#setup-and-installation)

---

## 🎯 Project Overview

This is a comprehensive food delivery application with three main components:
1. **Customer Frontend** - User interface for browsing menu, ordering food, and tracking orders
2. **Admin Panel** - Dashboard for managing food items and orders
3. **Backend API** - RESTful API server handling all business logic and database operations

---

## 🏗️ Architecture

The application follows a **three-tier architecture**:

```
┌─────────────────┐       ┌─────────────────┐
│  Frontend       │       │  Admin Panel    │
│  (React/Vite)   │       │  (React/Vite)   │
└────────┬────────┘       └────────┬────────┘
         │                         │
         └──────────┬──────────────┘
                    │
         ┌──────────▼──────────┐
         │   Backend API       │
         │   (Express/Node.js) │
         └──────────┬──────────┘
                    │
         ┌──────────▼──────────┐
         │   MongoDB Database  │
         └─────────────────────┘
```

---

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **File Upload**: Multer
- **Payment Gateway**: Stripe
- **Validation**: Validator.js
- **CORS**: cors middleware

### Frontend
- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Routing**: React Router DOM 6.22.0
- **HTTP Client**: Axios
- **Payment**: Stripe.js
- **Notifications**: React Toastify

### Admin Panel
- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.1.0
- **Routing**: React Router DOM 6.22.0
- **HTTP Client**: Axios
- **Notifications**: React Toastify

---

## 📁 Project Structure

```
Food-Delivery-App-on-Mern-Stack/
│
├── backend/                    # Backend API Server
│   ├── config/
│   │   └── db.js              # MongoDB connection configuration
│   ├── controllers/           # Request handlers
│   │   ├── userController.js  # User authentication logic
│   │   ├── foodController.js  # Food item management
│   │   ├── cartController.js  # Shopping cart operations
│   │   └── orderController.js # Order processing
│   ├── middleware/
│   │   └── auth.js           # JWT authentication middleware
│   ├── models/               # Mongoose schemas
│   │   ├── userModel.js      # User data schema
│   │   ├── foodModel.js      # Food item schema
│   │   └── orderModel.js     # Order data schema
│   ├── routes/               # API route definitions
│   │   ├── userRoute.js      # User authentication routes
│   │   ├── foodRoute.js      # Food CRUD routes
│   │   ├── cartRoute.js      # Cart management routes
│   │   └── orderRoute.js     # Order processing routes
│   ├── uploads/              # Food item images storage
│   ├── server.js             # Entry point
│   └── package.json          # Backend dependencies
│
├── frontend/                  # Customer-facing application
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   │   ├── NavBar/       # Navigation bar
│   │   │   ├── Header/       # Hero section
│   │   │   ├── ExploreMenu/  # Category menu
│   │   │   ├── FoodDisplay/  # Food items grid
│   │   │   ├── FoodItem/     # Individual food card
│   │   │   ├── LoginPopup/   # Authentication modal
│   │   │   ├── Footer/       # Page footer
│   │   │   └── AppDownload/  # App promotion section
│   │   ├── Context/
│   │   │   └── StoreContext.jsx # Global state management
│   │   ├── pages/            # Page components
│   │   │   ├── Home/         # Landing page
│   │   │   ├── Cart/         # Shopping cart page
│   │   │   ├── PlaceOrder/   # Checkout page
│   │   │   ├── MyOrders/     # Order history
│   │   │   └── Verify/       # Payment verification
│   │   ├── assets/           # Images and static assets
│   │   ├── App.jsx           # Main app component
│   │   └── main.jsx          # Entry point
│   └── package.json          # Frontend dependencies
│
└── admin/                     # Admin dashboard
    ├── src/
    │   ├── components/       # Admin UI components
    │   │   ├── Navbar/       # Admin navigation
    │   │   └── Sidebar/      # Admin sidebar menu
    │   ├── pages/            # Admin pages
    │   │   ├── Add/          # Add new food items
    │   │   ├── List/         # View/delete food items
    │   │   └── Orders/       # Manage orders
    │   ├── assets/           # Admin panel assets
    │   ├── App.jsx           # Admin app component
    │   └── main.jsx          # Entry point
    └── package.json          # Admin dependencies
```

---

## 🔧 Backend Architecture

### Models (Database Schemas)

#### 1. **User Model** (`userModel.js`)
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  cartData: Object (default: {})
}
```

#### 2. **Food Model** (`foodModel.js`)
```javascript
{
  name: String (required),
  description: String (required),
  price: Number (required),
  image: String (required),
  category: String (required)
}
```

#### 3. **Order Model** (`orderModel.js`)
```javascript
{
  userId: String (required),
  items: Array (required),
  amount: Number (required),
  address: Object (required),
  status: String (default: "Food Processing"),
  date: Date (default: now),
  payment: Boolean (default: false)
}
```

### Controllers (Business Logic)

#### 1. **User Controller** (`userController.js`)
- **registerUser**: Creates new user with hashed password, email validation
- **loginUser**: Authenticates user and returns JWT token
- **createToken**: Generates JWT token for authenticated sessions

#### 2. **Food Controller** (`foodController.js`)
- **addFood**: Adds new food item with image upload
- **listFood**: Retrieves all food items
- **removeFood**: Deletes food item and associated image

#### 3. **Cart Controller** (`cartController.js`)
- **addToCart**: Adds item to user's cart (increments quantity)
- **removeFromCart**: Removes/decrements item from cart
- **getCart**: Retrieves user's cart data

#### 4. **Order Controller** (`orderController.js`)
- **placeOrder**: Creates order and initiates Stripe payment
- **placeOrderCod**: Creates order with Cash on Delivery
- **listOrders**: Retrieves all orders (admin)
- **userOrders**: Retrieves orders for specific user
- **updateStatus**: Updates order delivery status
- **verifyOrder**: Verifies payment success/failure

### Middleware

#### **Authentication Middleware** (`auth.js`)
- Validates JWT token from request headers
- Extracts user ID and attaches to request
- Protects routes requiring authentication

### Routes (API Endpoints)

#### **User Routes** (`/api/user`)
- `POST /register` - User registration
- `POST /login` - User login

#### **Food Routes** (`/api/food`)
- `GET /list` - Get all food items
- `POST /add` - Add food item (with image upload)
- `POST /remove` - Delete food item

#### **Cart Routes** (`/api/cart`) - Protected
- `POST /get` - Get user cart
- `POST /add` - Add to cart
- `POST /remove` - Remove from cart

#### **Order Routes** (`/api/order`)
- `GET /list` - Get all orders (admin)
- `POST /userorders` - Get user orders (protected)
- `POST /place` - Place order with Stripe (protected)
- `POST /placecod` - Place COD order (protected)
- `POST /status` - Update order status
- `POST /verify` - Verify payment

---

## 💻 Frontend Architecture

### State Management

#### **StoreContext** (`StoreContext.jsx`)
Global state provider using React Context API managing:
- **food_list**: Array of all food items
- **cartItems**: Object mapping food IDs to quantities
- **token**: JWT authentication token
- **currency**: Display currency ($)
- **deliveryCharge**: Fixed delivery fee (5)

**Key Functions**:
- `addToCart(itemId)`: Adds item to cart
- `removeFromCart(itemId)`: Removes item from cart
- `getTotalCartAmount()`: Calculates cart subtotal
- `fetchFoodList()`: Loads food items from API
- `loadCartData(token)`: Syncs cart from server

### Components

#### 1. **NavBar** (`NavBar.jsx`)
- Navigation menu with links (Home, Menu, Mobile App, Contact)
- Shopping cart icon with item count indicator
- User authentication display (Sign In / Profile dropdown)
- Logout functionality

#### 2. **Header** (`Header.jsx`)
- Hero section with call-to-action
- Featured content on landing page

#### 3. **ExploreMenu** (`ExploreMenu.jsx`)
- Food category filter
- Visual category selection menu
- Updates food display based on selection

#### 4. **FoodDisplay** (`FoodDisplay.jsx`)
- Grid display of food items
- Filters by selected category
- Maps through food_list from context

#### 5. **FoodItem** (`FoodItem.jsx`)
- Individual food card component
- Add to cart functionality
- Quantity increment/decrement
- Displays: image, name, price, description

#### 6. **LoginPopup** (`LoginPopup.jsx`)
- Modal authentication form
- Toggles between Sign Up and Login
- Form validation (email format, password length)
- Stores JWT token in localStorage
- Syncs cart after login

#### 7. **Footer** (`Footer.jsx`)
- Company information
- Social media links
- Contact details

#### 8. **AppDownload** (`AppDownload.jsx`)
- Mobile app promotion section
- App store links

### Pages

#### 1. **Home** (`Home.jsx`)
Structure:
- Header component
- ExploreMenu component (with category state)
- FoodDisplay component (filtered by category)
- AppDownload component

#### 2. **Cart** (`Cart.jsx`)
Features:
- Displays cart items with images
- Quantity and price per item
- Cart total calculation
- Delivery fee display
- Remove item functionality
- Promo code input (UI only)
- Checkout navigation

#### 3. **PlaceOrder** (`PlaceOrder.jsx`)
Features:
- Delivery information form (name, email, address, phone)
- Cart summary with totals
- Payment method selection (COD / Stripe)
- Form validation
- Order placement with API integration
- Redirects to Stripe checkout or confirmation

#### 4. **MyOrders** (`MyOrders.jsx`)
Features:
- Displays user's order history
- Shows items, quantities, status
- Track order functionality

#### 5. **Verify** (`Verify.jsx`)
Features:
- Payment verification page
- Handles Stripe redirect
- Confirms order success/failure

### Routing Structure
```
/ (Home)
├── /cart (Shopping Cart)
├── /order (Checkout)
├── /myorders (Order History)
└── /verify (Payment Verification)
```

---

## 🎛️ Admin Panel Architecture

### Components

#### 1. **Navbar** (`Navbar.jsx`)
- Admin branding
- Admin profile display

#### 2. **Sidebar** (`Sidebar.jsx`)
- Navigation menu
- Links to: Add Items, List Items, Orders

### Pages

#### 1. **Add** (`Add.jsx`)
Features:
- Food item creation form
- Image upload with preview
- Fields: name, description, price, category
- Category dropdown (8 categories)
- Form submission to backend
- Success/error notifications

#### 2. **List** (`List.jsx`)
Features:
- Displays all food items in table format
- Shows: image, name, category, price
- Delete functionality
- Real-time list updates after deletion

#### 3. **Orders** (`Orders.jsx`)
Features:
- Displays all orders from all users
- Order details: items, customer info, address
- Order status dropdown (Food Processing, Out for delivery, Delivered)
- Status update functionality
- Total amount and item count

### Routing Structure
```
/add (Add Food Items)
/list (View/Manage Food Items)
/orders (Manage Orders)
```

---

## 🔄 Application Flow

### 1. **User Registration/Login Flow**
```
User → Enter credentials → Frontend validates
→ POST /api/user/register or /login
→ Backend validates email/password
→ Hash password (bcrypt)
→ Generate JWT token
→ Return token to frontend
→ Store in localStorage
→ Update global state
```

### 2. **Browse and Add to Cart Flow**
```
User visits Home → Fetch food items
→ GET /api/food/list
→ Display in categories
→ User clicks add to cart
→ Update local state
→ POST /api/cart/add (if authenticated)
→ Update database cartData
```

### 3. **Checkout Flow**
```
User navigates to Cart
→ Display cart items from context
→ Calculate totals
→ User clicks checkout
→ Navigate to PlaceOrder page
→ Fill delivery information
→ Select payment method (Stripe/COD)
→ Submit order
→ POST /api/order/place or /placecod
→ Clear cart in database
→ Create order record
→ Redirect to Stripe (if Stripe) or MyOrders (if COD)
→ Verify payment (Stripe only)
→ Update order payment status
```

### 4. **Admin Food Management Flow**
```
Admin navigates to Add page
→ Fill food details + upload image
→ POST /api/food/add (with FormData)
→ Multer saves image to uploads/
→ Create food record in database
→ Success notification

OR

Admin navigates to List page
→ GET /api/food/list
→ Display all items
→ Admin clicks delete
→ POST /api/food/remove
→ Delete image from uploads/
→ Delete database record
→ Refresh list
```

### 5. **Admin Order Management Flow**
```
Admin navigates to Orders
→ GET /api/order/list
→ Display all orders
→ Admin changes status dropdown
→ POST /api/order/status
→ Update order status in database
→ Refresh orders list
```

---

## 🌐 API Endpoints

### User Endpoints
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/user/register` | No | Register new user |
| POST | `/api/user/login` | No | User login |

### Food Endpoints
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/food/list` | No | Get all food items |
| POST | `/api/food/add` | No | Add new food item |
| POST | `/api/food/remove` | No | Delete food item |

### Cart Endpoints
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/cart/get` | Yes | Get user cart |
| POST | `/api/cart/add` | Yes | Add item to cart |
| POST | `/api/cart/remove` | Yes | Remove item from cart |

### Order Endpoints
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/order/list` | No | Get all orders (admin) |
| POST | `/api/order/userorders` | Yes | Get user's orders |
| POST | `/api/order/place` | Yes | Place order (Stripe) |
| POST | `/api/order/placecod` | Yes | Place order (COD) |
| POST | `/api/order/status` | No | Update order status |
| POST | `/api/order/verify` | No | Verify payment |

---

## 🗄️ Database Schema

### Collections

#### **users**
```javascript
{
  _id: ObjectId,
  name: "John Doe",
  email: "john@example.com",
  password: "$2b$10$hashed...", // bcrypt hash
  cartData: {
    "foodId1": 2,
    "foodId2": 1
  }
}
```

#### **foods**
```javascript
{
  _id: ObjectId,
  name: "Margherita Pizza",
  description: "Classic Italian pizza...",
  price: 12.99,
  image: "1234567890pizza.jpg",
  category: "Pizza"
}
```

#### **orders**
```javascript
{
  _id: ObjectId,
  userId: "userId123",
  items: [
    {
      _id: "foodId1",
      name: "Pizza",
      price: 12.99,
      quantity: 2
    }
  ],
  amount: 30.98,
  address: {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipcode: "10001",
    country: "USA",
    phone: "1234567890"
  },
  status: "Food Processing",
  date: ISODate("2024-01-01T00:00:00Z"),
  payment: false
}
```

---

## 🔐 Authentication & Security

### JWT Authentication
- **Token Generation**: Uses `jsonwebtoken` library with secret key
- **Token Storage**: Stored in browser's localStorage
- **Protected Routes**: Auth middleware validates token on each request
- **Token Payload**: Contains user ID for identification

### Password Security
- **Hashing Algorithm**: bcrypt with 10 salt rounds
- **Validation**: Minimum 8 characters required
- **Email Validation**: Using validator.js library

---

## 💳 Payment Integration

### Stripe
- **SDK**: Stripe Node.js library
- **Flow**: 
  1. Create order in database
  2. Generate Stripe checkout session
  3. Redirect user to Stripe payment page
  4. Handle success/cancel callbacks
  5. Verify payment and update order

### Cash on Delivery (COD)
- Direct order placement without payment gateway
- Payment marked as true immediately
- Order status begins at "Food Processing"

---

## 📦 Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup
```bash
cd backend
npm install
```

Create `.env` file:
```
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Start backend server:
```bash
npm run server
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Admin Panel Setup
```bash
cd admin
npm install
npm run dev
```

---

## 🚀 Running the Application

1. **Start MongoDB** (if running locally)
2. **Start Backend**: `cd backend && npm run server` (Port 4000)
3. **Start Frontend**: `cd frontend && npm run dev` (Port 5173)
4. **Start Admin**: `cd admin && npm run dev` (Port 5174)

### Access Points
- Frontend: `http://localhost:5173`
- Admin Panel: `http://localhost:5174`
- Backend API: `http://localhost:4000`

---

## 📝 Key Features

### Customer Features
- ✅ User registration and authentication
- ✅ Browse food items by category
- ✅ Add/remove items from cart
- ✅ Place orders with delivery details
- ✅ Multiple payment options (Stripe/COD)
- ✅ View order history
- ✅ Real-time cart updates

### Admin Features
- ✅ Add new food items with images
- ✅ View and delete food items
- ✅ View all orders
- ✅ Update order status
- ✅ Real-time data management

### Technical Features
- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ Image upload with Multer
- ✅ Stripe payment integration
- ✅ RESTful API design
- ✅ React Context for state management
- ✅ Responsive design
- ✅ Error handling and validation
- ✅ Toast notifications

---

## 🎨 Food Categories
1. Salad
2. Rolls
3. Deserts
4. Sandwich
5. Cake
6. Pure Veg
7. Pasta
8. Noodles

---

## 📌 Order Status Flow
1. **Food Processing** (Initial status)
2. **Out for delivery**
3. **Delivered**

---

## 🔧 Environment Variables

### Backend
- `PORT`: Server port (default: 4000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT signing
- `STRIPE_SECRET_KEY`: Stripe API secret key

---

## 🛡️ Security Considerations
- Passwords are hashed using bcrypt
- JWT tokens for secure authentication
- Protected routes using auth middleware
- Email validation for user registration
- CORS enabled for cross-origin requests
- File upload restrictions (images only)

---

## 📚 Dependencies Summary

### Backend
- express: Web framework
- mongoose: MongoDB ODM
- jsonwebtoken: JWT authentication
- bcrypt: Password hashing
- multer: File upload
- stripe: Payment processing
- validator: Input validation
- cors: Cross-origin support
- dotenv: Environment variables

### Frontend/Admin
- react: UI library
- react-router-dom: Routing
- axios: HTTP client
- react-toastify: Notifications
- vite: Build tool
- @stripe/stripe-js: Stripe integration (frontend only)

---

## 🎯 Project Highlights

This MERN stack food delivery application demonstrates:
- **Full-stack development** with modern JavaScript
- **RESTful API design** principles
- **Authentication and authorization** with JWT
- **State management** using React Context
- **Payment gateway integration** (Stripe)
- **File upload handling** with Multer
- **Database design** with MongoDB
- **Component-based architecture** in React
- **Separation of concerns** (Backend, Frontend, Admin)
- **Real-time updates** and notifications

---

## 📄 License
This project is for educational purposes.

---

## 👥 Contributors
Full Stack Group 6

---

## 📞 Support
For issues or questions, please create an issue in the repository.
