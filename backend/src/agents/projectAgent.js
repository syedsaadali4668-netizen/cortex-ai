import {askGemini} from '../utils/gemini.js';
export async function projectAgent(ctx){return askGemini(`Act as senior product manager. Convert context into milestones, sprints, tasks, risks, KPIs. Context:\n${JSON.stringify(ctx)}`);}
