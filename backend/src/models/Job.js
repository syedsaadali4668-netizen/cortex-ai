import mongoose from 'mongoose';
const schema=new mongoose.Schema({title:String,company:String,location:String,type:String,salary:String,description:String,requirements:[String],source:String,applyLink:String},{timestamps:true});
schema.index({title:'text',company:'text',description:'text',requirements:'text',location:'text'});
export default mongoose.model('Job',schema);
