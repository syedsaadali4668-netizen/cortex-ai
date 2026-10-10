import {askGemini} from '../utils/gemini.js';
export async function skillGapAgent(ctx){return askGemini(`Find required skills, missing skills, 4-week roadmap, project suggestions, learning resources. Context:\n${JSON.stringify(ctx)}`);}
