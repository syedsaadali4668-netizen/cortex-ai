import mongoose from 'mongoose';
const chunk=new mongoose.Schema({text:String,tokens:Number,embedding:[Number]},{_id:false});
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},filename:String,content:String,chunks:[chunk]},{timestamps:true});
schema.index({content:'text','chunks.text':'text'});
export default mongoose.model('Document',schema);
