import {products as fallback} from '../data/products.js';
import Product from '../models/Product.js';
import mongoose from 'mongoose';
const connected=()=>mongoose.connection.readyState===1;
export async function getProducts(q={}){let r=connected()?await Product.find({active:{$ne:false}}).lean():[...fallback];if(q.category)r=r.filter(p=>p.category?.toLowerCase()===String(q.category).toLowerCase());if(q.occasion)r=r.filter(p=>p.occasions?.includes(String(q.occasion).toLowerCase()));if(q.q)r=r.filter(p=>`${p.name} ${p.category} ${(p.tags||[]).join(' ')}`.toLowerCase().includes(String(q.q).toLowerCase()));return r}
export async function getCatalog(){return getProducts({})}
