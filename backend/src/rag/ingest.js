import Document from '../models/Document.js'; import {chunkText} from './chunker.js';
export async function ingestDocument(userId,filename,content){return Document.create({userId,filename,content,chunks:chunkText(content)});}
