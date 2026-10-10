import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import {ShieldCheck,ArrowRight} from 'lucide-react';
import Logo from '../components/Logo';
import {useAuth} from '../context/AuthContext';

export default function Auth({mode}){
  const [f,setF]=useState({name:'',email:'',password:''});
  const {login,signup}=useAuth();
  const nav=useNavigate();
  const [err,setErr]=useState('');
  const [loading,setLoading]=useState(false);
  async function submit(e){
    e.preventDefault(); setErr(''); setLoading(true);
    try{
      if(mode==='login') await login(f.email,f.password); else await signup(f);
      nav('/dashboard');
    }catch(x){ setErr(x.response?.data?.message||x.message); }
    setLoading(false);
  }
  return <div className="min-h-screen grid place-items-center p-6 relative overflow-hidden"><div className="aurora"/><div className="gridbg"/>
    <motion.form initial={{opacity:0,y:22,scale:.97}} animate={{opacity:1,y:0,scale:1}} transition={{duration:.55}} onSubmit={submit} className="card w-full max-w-md">
      <Logo/>
      <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-sky-200"><ShieldCheck size={15}/> Production auth enabled</div>
      <h1 className="text-3xl font-black text-white mt-5">{mode==='login'?'Login to Cortex AI':'Create your Cortex AI account'}</h1>
      <p className="text-slate-400 mt-2">Your workspace is private and connected to your MongoDB account data.</p>
      {mode==='signup'&&<input required className="input mt-6" placeholder="Full name" value={f.name} onChange={e=>setF({...f,name:e.target.value})}/>} 
      <input required className="input mt-4" placeholder="Email address" type="email" value={f.email} onChange={e=>setF({...f,email:e.target.value})}/>
      <input required minLength={8} className="input mt-4" placeholder="Password, minimum 8 characters" type="password" value={f.password} onChange={e=>setF({...f,password:e.target.value})}/>
      {err&&<p className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-red-200 mt-4">{err}</p>}
      <button disabled={loading} className="btn-primary w-full mt-6 flex items-center justify-center gap-2">{loading?'Please wait...':mode==='login'?'Login':'Create account'} <ArrowRight size={18}/></button>
      <p className="text-center text-slate-400 mt-5">{mode==='login'?'New here?':'Already have an account?'} <Link className="text-sky-300 hover:text-sky-200" to={mode==='login'?'/signup':'/login'}>{mode==='login'?'Create account':'Login'}</Link></p>
    </motion.form>
  </div>
}
