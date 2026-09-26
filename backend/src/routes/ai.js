import {Router} from 'express';
import {getProducts} from '../services/catalog.js';
import {recommend} from '../services/recommender.js';
const r=Router();
r.post('/chat',async(req,res,next)=>{try{const message=String(req.body.message||'').trim(); if(!message)return res.status(400).json({message:'Message is required'}); const m=message.toLowerCase(); const occasion=m.includes('office')||m.includes('work')?'office':m.includes('date')||m.includes('dinner')?'date':m.includes('party')?'party':m.includes('wedding')?'wedding':m.includes('travel')?'travel':m.includes('college')?'college':'casual'; const style=m.includes('street')?'streetwear':m.includes('elegant')?'elegant':m.includes('classic')?'classic':m.includes('trendy')?'trendy':m.includes('casual')?'casual':'minimal'; const temperature=Number((m.match(/(-?\d+(?:\.\d+)?)\s*°?c/)||[])[1]||28); const outfit=await recommend({occasion,style,temperature}); res.json({reply:`For a ${occasion} plan with a ${style} direction, I would start with this ${outfit.title.toLowerCase()}. ${outfit.reason}`,outfit})}catch(e){next(e)}});
export default r;
