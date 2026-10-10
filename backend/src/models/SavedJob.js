import mongoose from 'mongoose';
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},jobId:{type:mongoose.Schema.Types.ObjectId,ref:'Job'},matchScore:Number,status:{type:String,default:'Saved'},notes:String},{timestamps:true});
export default mongoose.model('SavedJob',schema);
