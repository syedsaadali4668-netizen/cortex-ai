import jwt from 'jsonwebtoken';
import User from '../models/User.js';
export async function auth(req,res,next){
  try{const token=(req.headers.authorization||'').replace('Bearer ',''); if(!token) return res.status(401).json({message:'No token'});
    const decoded=jwt.verify(token,process.env.JWT_SECRET||'devsecret'); req.user=await User.findById(decoded.id).select('-password'); if(!req.user) return res.status(401).json({message:'Invalid token'}); next();
  }catch(e){res.status(401).json({message:'Unauthorized'});}
}
