import 'dotenv/config'; import express from 'express'; import cors from 'cors'; import {connectDB} from './db.js';
import products from './routes/products.js'; import recommendations from './routes/recommendations.js'; import weather from './routes/weather.js'; import auth from './routes/auth.js'; import user from './routes/user.js'; import orders from './routes/orders.js'; import admin from './routes/admin.js'; import ai from './routes/ai.js';
const app=express(); app.use(cors({origin:process.env.CLIENT_URL?.split(',')||true})); app.use(express.json({limit:'1mb'}));
app.get('/api/health',(_,s)=>s.json({ok:true,name:'ATELIER/AI API',database:process.env.MONGODB_URI?'configured':'demo'}));
app.use('/api/products',products);app.use('/api/recommendations',recommendations);app.use('/api/weather',weather);app.use('/api/auth',auth);app.use('/api/user',user);app.use('/api/orders',orders);app.use('/api/admin',admin);app.use('/api/ai',ai);
app.use((err,_req,res,_next)=>{console.error(err);res.status(500).json({message:'Something went wrong on the server'})});
const port=process.env.PORT||5000; connectDB().catch(e=>console.error('MongoDB connection failed:',e.message)); app.listen(port,()=>console.log(`ATELIER/AI API on ${port}`));
