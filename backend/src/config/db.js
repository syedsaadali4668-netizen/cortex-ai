import mongoose from 'mongoose';
export async function connectDB(){
  const uri=process.env.MONGO_URI;
  if(!uri){console.warn('MONGO_URI missing. Backend started without DB.');return;}
  try{await mongoose.connect(uri);console.log('MongoDB connected');}
  catch(e){console.error('MongoDB error:',e.message);}
}
