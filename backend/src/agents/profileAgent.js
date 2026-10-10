import {askGemini} from '../utils/gemini.js';
export async function profileAnalyzerAgent(ctx){return askGemini(`Analyze this user profile and resume. Return profile summary, strengths, weaknesses, career score, best categories.\n${JSON.stringify(ctx)}`);}
