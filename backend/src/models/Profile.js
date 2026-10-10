import mongoose from 'mongoose';
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},skills:[String],location:String,experience:String,education:String,careerGoal:String,preferredJobType:String,resumeText:String},{timestamps:true});
export default mongoose.model('Profile',schema);
