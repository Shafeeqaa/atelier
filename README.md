# ATELIER/AI — Full-Stack Fashion Commerce

A production-style portfolio project built with React + TypeScript + Vite, Node.js + Express, MongoDB/Mongoose and a transparent rule-based outfit recommendation engine.

## Included
- Separate Home, Shop, Collections, Style Me, Wishlist, Bag, Product, Account and Checkout routes
- Search, category/occasion/style filters and sorting
- Product details, sizes, wishlist and cart
- JWT authentication with bcrypt password hashing
- MongoDB persistence for users, wishlist, cart and orders
- Weather-aware recommendations via Open-Meteo
- Recommendation scoring with explainable reasons
- Responsive editorial fashion UI
- Vercel/Render deployment-ready environment files

## Run locally
### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```
### Frontend
```bash
cd frontend
npm install
npm run dev
```
Set `VITE_API_URL=http://localhost:5000/api` in `frontend/.env` when needed.

## Production setup
1. Create a free MongoDB Atlas cluster and database user.
2. Put the connection string in Render as `MONGODB_URI`.
3. Put a long random `JWT_SECRET` in Render.
4. Deploy `backend` to Render.
5. Set `VITE_API_URL` to the Render API URL + `/api` in Vercel.
6. Deploy `frontend` to Vercel.

No API keys or passwords are included in this repository.
