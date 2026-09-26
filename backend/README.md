# ATELIER/AI Backend

Node.js + Express + MongoDB/Mongoose API.

## Run
1. `npm install`
2. Copy `.env.example` to `.env`
3. Add `MONGODB_URI` and a strong `JWT_SECRET`.
4. `npm run dev`

If `MONGODB_URI` is empty, the catalog/recommendation endpoints still work, but user persistence and orders require MongoDB.

## API
- `GET /api/health`
- `GET /api/products`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET/PUT /api/user/wishlist`
- `GET/PUT /api/user/cart`
- `GET/POST /api/orders`
- `POST /api/recommendations`
- `GET /api/weather?city=Bengaluru`
