import mongoose from 'mongoose';
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},jobTitle:String,company:String,status:{type:String,default:'Saved'},deadline:String,notes:String},{timestamps:true});
export default mongoose.model('Application',schema);
