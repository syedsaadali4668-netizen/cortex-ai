import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {ArrowRight,Brain,Cpu,Database,Lock,Rocket,Sparkles,Workflow,Layers3} from 'lucide-react';
import Logo from '../components/Logo';
const modules=['AI Command Center','Memory Vault','Research Hub','Startup Builder','Career Pilot','Project Workspace','Resume Studio','Reports Library'];
const stack=['React + Vite','Tailwind + Framer Motion','Node + Express','MongoDB Atlas','JWT + bcrypt','Gemini 2.5 Flash','RAG Pipeline','Render + Vercel'];
export default function Landing(){return <div className="min-h-screen relative overflow-hidden"><div className="aurora"/><div className="gridbg"/>
  <header className="mx-auto max-w-7xl p-6 flex justify-between items-center sticky top-0 z-20 backdrop-blur-xl"><Logo/><div className="flex gap-3"><Link className="btn-ghost" to="/login">Login</Link><Link className="btn-primary" to="/signup">Create workspace</Link></div></header>
  <main className="mx-auto max-w-7xl px-6 py-14">
    <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="text-center">
      <span className="inline-flex gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sky-200"><Sparkles size={18}/> Production-ready AI operating system</span>
      <h1 className="mt-8 text-5xl md:text-7xl font-black tracking-tight text-white">Build, research, plan, and grow inside one AI workspace.</h1>
      <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">Cortex AI is a deployable SaaS platform with agentic AI, RAG memory, document intelligence, startup strategy, career tools, reports, and project planning.</p>
      <div className="mt-8 flex justify-center gap-4 flex-wrap"><Link to="/signup" className="btn-primary flex gap-2 items-center">Start now <ArrowRight size={18}/></Link><a href="#features" className="btn-ghost">Explore features</a></div>
    </motion.div>
    <div id="features" className="mt-20 grid md:grid-cols-4 gap-4">{modules.map((m,i)=><motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}} key={m} className="card group hover:-translate-y-1 transition"><Brain className="text-sky-300 group-hover:scale-110 transition"/><h3 className="font-bold text-white mt-4">{m}</h3><p className="text-sm text-slate-400 mt-2">A protected, animated, AI-powered workspace module with persistent data.</p></motion.div>)}</div>
    <section className="mt-20 grid lg:grid-cols-3 gap-6"><div className="card"><Lock className="text-sky-300"/><h2 className="text-2xl font-black mt-4">Secure SaaS Core</h2><p className="text-slate-400 mt-2">JWT sessions, bcrypt hashing, protected routes, private user data, production environment setup.</p></div><div className="card"><Database className="text-sky-300"/><h2 className="text-2xl font-black mt-4">RAG Memory Layer</h2><p className="text-slate-400 mt-2">Upload documents, chunk content, retrieve profile, memories, reports, and knowledge for grounded responses.</p></div><div className="card"><Cpu className="text-sky-300"/><h2 className="text-2xl font-black mt-4">Multi-Agent AI</h2><p className="text-slate-400 mt-2">Career, research, startup, project, learning, resume, and report agents powered by Gemini.</p></div></section>
    <section className="mt-20 card"><div className="flex items-center gap-3"><Layers3 className="text-sky-300"/><h2 className="text-3xl font-black text-white">Deploy-ready stack</h2></div><div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">{stack.map(s=><div key={s} className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-slate-200">{s}</div>)}</div></section>
  </main>
</div>}
