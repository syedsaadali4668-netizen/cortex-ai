import mongoose from 'mongoose';
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},type:String,content:String,importanceScore:{type:Number,default:5},tags:[String]},{timestamps:true});
export default mongoose.model('Memory',schema);
