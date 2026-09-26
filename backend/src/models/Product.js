import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  id:{type:String,unique:true,index:true}, name:{type:String,required:true,trim:true}, category:String, price:Number,
  image:String, images:[String], description:String, sizes:[String], colors:[String], tags:[String],
  occasions:[String], styles:[String], minTemp:Number, maxTemp:Number, fabric:String, stock:{type:Number,default:0},
  active:{type:Boolean,default:true}
},{timestamps:true});
export default mongoose.model('Product',schema);
