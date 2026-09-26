import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:{type:String,required:true,trim:true},email:{type:String,required:true,unique:true,lowercase:true,trim:true},password:{type:String,required:true},role:{type:String,enum:['user','admin'],default:'user'},wishlist:[{type:String}],cart:[{productId:String,size:String,quantity:Number}],orders:[{type:mongoose.Schema.Types.ObjectId,ref:'Order'}]},{timestamps:true});
export default mongoose.model('User',schema);
