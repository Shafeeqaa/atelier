import mongoose from 'mongoose';
const item=new mongoose.Schema({productId:String,name:String,price:Number,image:String,size:String,quantity:Number},{_id:false});
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},items:[item],shipping:{name:String,address:String,city:String,state:String,pincode:String,phone:String},subtotal:Number,shippingFee:Number,total:Number,status:{type:String,default:'Placed',enum:['Placed','Confirmed','Packed','Shipped','Delivered','Cancelled']}},{timestamps:true});
export default mongoose.model('Order',schema);
