import mongoose from 'mongoose';
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},type:String,title:String,content:String},{timestamps:true});
export default mongoose.model('Report',schema);
