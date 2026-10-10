import express from 'express'; import Job from '../models/Job.js'; import SavedJob from '../models/SavedJob.js'; import Profile from '../models/Profile.js'; import {auth} from '../middleware/auth.js'; import {jobMatchingAgent} from '../agents/careerAgent.js';
const r=express.Router(); r.use(auth);
r.get('/',async(req,res)=>res.json(await Job.find().sort('-createdAt').limit(50)));
r.post('/search',async(req,res)=>{const {query='',location='',type=''}=req.body; const filter={}; if(query) filter.$text={$search:query}; if(location) filter.location=new RegExp(location,'i'); if(type) filter.type=new RegExp(type,'i'); const jobs=await Job.find(filter).limit(30).catch(()=>Job.find({}).limit(30)); res.json(jobs);});
r.post('/match',async(req,res)=>{const {jobId}=req.body; const [profile,job]=await Promise.all([Profile.findOne({userId:req.user._id}),Job.findById(jobId)]); if(!job) return res.status(404).json({message:'Job not found'}); res.json(await jobMatchingAgent(profile,job));});
r.post('/save',async(req,res)=>{const item=await SavedJob.findOneAndUpdate({userId:req.user._id,jobId:req.body.jobId},{...req.body,userId:req.user._id},{upsert:true,new:true}); res.json(item);});
r.get('/saved/list',async(req,res)=>res.json(await SavedJob.find({userId:req.user._id}).populate('jobId').sort('-createdAt'))); export default r;
