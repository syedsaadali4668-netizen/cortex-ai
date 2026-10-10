import Document from '../models/Document.js'; import Memory from '../models/Memory.js'; import Profile from '../models/Profile.js';
export async function retrieveContext(userId,query=''){
 const [profile,docs,memories]=await Promise.all([
  Profile.findOne({userId}), Document.find({userId,$text:{$search:query}}).limit(3).catch(()=>Document.find({userId}).sort('-createdAt').limit(3)), Memory.find({userId}).sort('-importanceScore -createdAt').limit(8)
 ]);
 return {profile,documents:docs.map(d=>({filename:d.filename,content:d.content?.slice(0,1800)})),memories:memories.map(m=>m.content)};
}
