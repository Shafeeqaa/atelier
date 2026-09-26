import {Router} from 'express'; import Order from '../models/Order.js'; import User from '../models/User.js'; import {auth} from '../middleware/auth.js';
const r=Router(); r.use(auth);
r.get('/',async(req,res,next)=>{try{res.json({orders:await Order.find({userId:req.user.sub}).sort({createdAt:-1})})}catch(e){next(e)}});
r.post('/',async(req,res,next)=>{try{const {items,shipping}=req.body;if(!items?.length)return res.status(400).json({message:'Your bag is empty'});const subtotal=items.reduce((s,i)=>s+(Number(i.price)||0)*(Number(i.quantity)||1),0);const shippingFee=subtotal>=2500?0:99;const order=await Order.create({userId:req.user.sub,items,shipping,subtotal,shippingFee,total:subtotal+shippingFee});await User.findByIdAndUpdate(req.user.sub,{$set:{cart:[]},$push:{orders:order._id}});res.status(201).json({order})}catch(e){next(e)}});
export default r;
