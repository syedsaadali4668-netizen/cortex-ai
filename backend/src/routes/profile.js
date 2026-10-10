import express from 'express'; import Profile from '../models/Profile.js'; import {auth} from '../middleware/auth.js'; import {saveMemory} from '../agents/memoryAgent.js';
const r=express.Router(); r.use(auth);
r.get('/',async(req,res)=>res.json(await Profile.findOne({userId:req.user._id})||{}));
r.post('/',async(req,res)=>{const p=await Profile.findOneAndUpdate({userId:req.user._id},{...req.body,userId:req.user._id},{upsert:true,new:true}); await saveMemory(req.user._id,`Profile updated: ${JSON.stringify(req.body).slice(0,500)}`,'profile'); res.json(p);});
r.put('/',async(req,res)=>{const p=await Profile.findOneAndUpdate({userId:req.user._id},{...req.body,userId:req.user._id},{upsert:true,new:true}); res.json(p);}); export default r;
