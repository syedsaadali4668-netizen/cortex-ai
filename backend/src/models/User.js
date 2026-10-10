import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:String,email:{type:String,unique:true,lowercase:true},password:String,role:{type:String,default:'user'}},{timestamps:true});
export default mongoose.model('User',schema);
