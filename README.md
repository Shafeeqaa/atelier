# ATELIER/AI

> A full-stack fashion e-commerce platform with personalized styling and weather-aware recommendations.

ATELIER/AI is a modern fashion shopping platform built to combine **e-commerce, personalization, and smart outfit discovery** in a single experience.

The application allows users to browse and search fashion products, filter products by category, style, and occasion, manage wishlists and shopping bags, and receive outfit recommendations based on factors such as **style, occasion, weather, color preferences, and budget**.

---

## ✨ Key Features

### 🛍️ E-Commerce Experience

- Product catalog and product discovery
- Search functionality
- Category-based filtering
- Style-based filtering
- Occasion-based filtering
- Product sorting
- Product detail pages
- Size and color selection
- Stock availability
- Shopping bag management
- Quantity management
- Wishlist functionality
- Related products
- Complete-the-look recommendations

### 👗 Smart Styling

The **Style Me** experience is designed to help users discover complete outfits instead of selecting individual products manually.

Recommendations can consider:

- Personal style
- Occasion
- Weather conditions
- Color preferences
- Budget
- Products available in the catalog

### 🌤️ Weather-Aware Recommendations

ATELIER/AI integrates the **Open-Meteo API** to retrieve weather information.

Weather conditions can be incorporated into outfit recommendations to help suggest clothing that is appropriate for the user's current conditions.

### 👤 Authentication & Authorization

The application includes secure user authentication using:

- User registration
- User login
- Logout
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes
- Role-based authorization
- User and administrator roles

User passwords are hashed before being stored and are never stored as plain-text passwords.

### ❤️ Wishlist

Users can:

- Add products to their wishlist
- Remove products from their wishlist
- View saved products
- Manage saved fashion items

### 🛒 Shopping Bag

Users can:

- Add products to their bag
- Select product sizes
- Select product colors
- Update quantities
- Remove products
- Review items before checkout

### 👑 Admin Dashboard

ATELIER/AI includes a protected administration area for authorized administrators.

Admin capabilities include:

- Dashboard
- Product management
- Create products
- Edit products
- Delete products
- Manage inventory
- Manage users and roles
- Manage orders

Products managed through the admin dashboard are persisted in MongoDB and become available to the customer-facing shopping experience.

---

## 🧰 Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| React | User interface |
| TypeScript | Type-safe development |
| Vite | Frontend development and build tooling |
| React Router | Client-side routing |
| CSS | Styling and responsive layouts |
| Lucide React | UI icons |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Express.js | REST API framework |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| JWT | Authentication |
| bcryptjs | Password hashing |

### External API

- Open-Meteo API — weather data

### Development Tools

- Git
- GitHub
- VS Code
- npm

---

## 🏗️ Architecture

ATELIER/AI follows a full-stack architecture that separates the frontend, backend, and database layers.

```text
┌─────────────────────────────┐
│        React Frontend       │
│     TypeScript + Vite       │
└──────────────┬──────────────┘
               │
               │ REST API
               ▼
┌─────────────────────────────┐
│       Express Backend       │
│          Node.js            │
└──────────────┬──────────────┘
               │
               │ Mongoose
               ▼
┌─────────────────────────────┐
│          MongoDB            │
│       Application Data      │
└─────────────────────────────┘
