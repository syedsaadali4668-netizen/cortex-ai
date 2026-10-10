import {askGemini} from '../utils/gemini.js';
export async function startupAgent(ctx){return askGemini(`Act as YC partner and McKinsey strategist. Produce business model, ICP, competitors, GTM, risks, MVP roadmap, pricing. Context:\n${JSON.stringify(ctx)}`);}
