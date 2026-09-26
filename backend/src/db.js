import mongoose from 'mongoose';
export async function connectDB(){
  if(!process.env.MONGODB_URI){ console.warn('MONGODB_URI not set — using demo catalog and no persistence.'); return false; }
  await mongoose.connect(process.env.MONGODB_URI); console.log('MongoDB connected'); return true;
}
