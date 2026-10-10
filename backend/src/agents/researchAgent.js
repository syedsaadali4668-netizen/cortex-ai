import {askGemini} from '../utils/gemini.js';
export async function researchAgent(ctx){return askGemini(`Act as a research analyst. Summarize documents, extract insights, gaps, citations placeholders, and action plan. Context:\n${JSON.stringify(ctx)}`);}
