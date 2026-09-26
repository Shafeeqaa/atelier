import {Router} from 'express'; import User from '../models/User.js'; import {auth} from '../middleware/auth.js';
const r=Router(); r.use(auth);
r.get('/me',async(req,res,next)=>{try{const u=await User.findById(req.user.sub).select('-password');res.json({user:u})}catch(e){next(e)}});
r.get('/wishlist',async(req,res,next)=>{try{const u=await User.findById(req.user.sub).select('wishlist');res.json({wishlist:u?.wishlist||[]})}catch(e){next(e)}});
r.put('/wishlist',async(req,res,next)=>{try{const ids=Array.isArray(req.body.productIds)?req.body.productIds:[];const u=await User.findByIdAndUpdate(req.user.sub,{wishlist:ids},{new:true}).select('wishlist');res.json({wishlist:u.wishlist})}catch(e){next(e)}});
r.get('/cart',async(req,res,next)=>{try{const u=await User.findById(req.user.sub).select('cart');res.json({cart:u?.cart||[]})}catch(e){next(e)}});
r.put('/cart',async(req,res,next)=>{try{const cart=Array.isArray(req.body.cart)?req.body.cart:[];const u=await User.findByIdAndUpdate(req.user.sub,{cart},{new:true}).select('cart');res.json({cart:u.cart})}catch(e){next(e)}});
export default r;
