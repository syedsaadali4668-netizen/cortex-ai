import { GoogleGenerativeAI } from '@google/generative-ai';
const fallback='Cortex AI is running. Add GEMINI_API_KEY to enable full Gemini-powered responses.';
export async function askGemini(prompt, system='You are Cortex AI, a premium professional multi-agent assistant. Return structured, actionable output.'){
  if(!process.env.GEMINI_API_KEY) return fallback+'\n\n'+prompt.slice(0,600);
  try{
    const genAI=new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model=genAI.getGenerativeModel({model:'gemini-2.5-flash'});
    const res=await model.generateContent(`${system}\n\n${prompt}`);
    return res.response.text();
  }catch(e){return `AI error: ${e.message}`;}
}
export function scoreByOverlap(a='',b=''){
  const A=new Set(a.toLowerCase().split(/[^a-z0-9+#.]+/).filter(Boolean));
  const B=b.toLowerCase().split(/[^a-z0-9+#.]+/).filter(Boolean);
  if(!A.size||!B.length) return 25;
  const hit=B.filter(x=>A.has(x)).length;
  return Math.min(98,Math.max(35,Math.round((hit/Math.max(8,B.length))*100)+35));
}
