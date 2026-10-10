import Memory from '../models/Memory.js';
export async function saveMemory(userId,content,type='note'){if(!content) return null; return Memory.create({userId,content,type,importanceScore:7});}
